import React from "react";
import { useAuth } from "../contexts/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1689251690370-3b0d44894a65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <span className="text-sm font-medium">
            Welcome back <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome!</span>
      )}
      <button
        className="p-2 ml-auto text-black bg-gray-300 rounded-lg "
        onClick={() => setUser(null)}
      >
        sign out
      </button>
    </div>
  );
};

export default HeaderMain;
