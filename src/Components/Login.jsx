import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
     
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/chatbox');

      // navigate("/chatbox");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1eb">
      <div className="bg-[#F7D9BC] h-100 rounded shadow-md w-100">
        <h2 className="text-2xl bold center my-8 font-bold text-center">Welcome Back 👋</h2>


        <div>
          <form >
            <input type="email"
             placeholder="Enter your email" 
             value={email}   
             className="border p-2 mx-15 rounded w-70"
             onChange={(e) => setEmail(e.target.value)} />

            <input type="password"
             placeholder="Enter your password"
             value={password}
             className="border p-2 mx-15 my-6 rounded w-70"
             onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="bg-[#e5e5e5] pt-3 pl-10 pr-10 pb-3 mx-37 rounded-md hover:bg-[#a88f78] transition">Login</button>
          </form>

          <p className="text-center my-5"> Don't have an account? {""} <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
        </div>
        
      </div>
    </div>
  )
}

export default Login;