import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(".chatbox");
    } catch (err) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1eb">
    <div className="bg-[#F7D9BC] h-100 rounded shadow-md w-100">
      <h2 className="text-2xl bold center my-8 font-bold text-center">Hi user, </h2>

      <div>
        <input type="text"
         placeholder="Enter your full name"
         className="border p-2 mx-15 rounded w-70"
         />

        <input type="email"
         placeholder="Enter your email" 
         className="border p-2 mx-15 my-5 rounded w-70"
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>

        <input type="password"
         placeholder="Enter your password"
         className="border p-2 mx-15 rounded w-70"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        <input/>

        <button className="bg-[#e5e5e5] pt-3 pl-10 pr-10 pb-3 mx-37 rounded-md hover:bg-[#a88f78] transition" >SignUP</button>
        <p className="text-center my-5" >Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
      </div>
      
    </div>
   </div>
  );
};

export default Signup;
