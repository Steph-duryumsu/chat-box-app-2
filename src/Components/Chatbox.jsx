import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection,addDoc,query,orderBy,onSnapshot,
serverTimestampop } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: input,
      createdAt: serverTimestamp(),
      uid: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    });

    setInput("");
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 h-screen bg-[#f3efea] flex flex-col">
      {/* Chat Display */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 ${
              msg.uid === auth.currentUser?.uid ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.uid === auth.currentUser?.uid
                  ? "bg-[#d6cdc3] text-black"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">{msg.email}</div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-grow p-2 rounded border border-gray-400 bg-[#fff9f4] text-black placeholder-gray-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />

        <button
          type="submit"
          className="bg-[#d6cdc3] text-black px-4 py-2 rounded shadow-md hover:bg-[#cfc4b8]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
