import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here
    //! USE supabase.auth.admin AT THIS AREA
    // const {data, error} = await supabase.auth.signInWithPassword({
    //   email: username,
    //   password: password,
    // })
    // if (error) throw error
    // else if (data)
    // {
    //   const response = await supabase
    //   .from('users')
    //   .select()
    //   .eq('id', process.env.adminID)
    //   if (response.error)
    //   {
    //     navigate("/admin/login")
    //   }
    //   else if (response.data)
    //   {
    //     localStorage.setItem("tokenAdmin", process.env.adminID);
    //     navigate("/admin/login")
    //   }
    // }
    if (username === "admin" && password === "password") {
      localStorage.setItem("tokenAdmin", "insertauthtokenhere");
      navigate("/admin");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-5">Admin Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            className="border border-gray-300 p-2 mb-4"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className="border border-gray-300 p-2 mb-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
