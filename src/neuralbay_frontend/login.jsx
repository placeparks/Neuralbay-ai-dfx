"use client";

import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const LoginPage = () => {
    const authContext = useContext(AuthContext);

    const handleLogin = async () => {
        if (authContext && authContext.login) {
            await authContext.login();
        }
    };

    return (
        <main className="flex-grow">
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
                <div className="bg-white p-8 rounded-lg shadow-xl w-80 text-center">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login Required</h2>
                    <p className="text-gray-600 mb-6">
                        Please log in with DFINITY to continue.
                    </p>
                    <button
                        onClick={handleLogin}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium"
                    >
                        Login with DFINITY
                    </button>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;