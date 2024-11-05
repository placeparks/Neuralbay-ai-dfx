"use client";

import { models } from "../../../constants";
import { Star } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { checkPurchaseStatus } from "../../../utils/supabaseHelpers"; 

export default function Marketplace() {
  const router = useNavigate();
  const authContext = useContext(AuthContext); 
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  

  const handleCardClick = async (modelId) => {
      if (!authContext || !authContext.principal) {
          setShowLoginPrompt(true);
          return;
      }
  
      const hasPurchased = await checkPurchaseStatus(authContext.principal, modelId);
      const model = models.find((m) => m.modelId === modelId);
  
      if (hasPurchased && model) {
          const categoryPath = model.category?.toLowerCase().replace(/\s+/g, '-');
          router(`/marketplace/${categoryPath}/test`);
      } else {
          router(`/marketplace/${modelId}`);
      }
  };
  
  

  const handleLogin = async () => {
    if (authContext && authContext.login) {
        await authContext.login();
    }
};


if (!authContext || !authContext.principal) {
  return (
    <main className="flex-grow">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-80 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Access Restricted</h2>
            <p className="text-gray-600 mb-6">
              Please log in with DFINITY to access the marketplace.
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
}


  return (
    <main className="flex-grow">
      <div className="container grid lg:grid-cols-3 gap-8 py-8 pt-24">
        {models.slice(0, 3).map((model, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(model.modelId)}
            className="w-full h-full flex flex-col cursor-pointer"
          >
            <div className="relative w-full h-[187px]">
            <img
  src={model.modelImg}
  alt={model.modelName}
  className="w-full h-full object-cover rounded-t-2xl"
/>

              <div className="absolute right-5 bottom-5 text-xs bg-[rgba(1,0,31,0.30)] backdrop-blur-[12px] px-6 py-2 rounded-full">
                Subscription
              </div>
            </div>
            <div className="flex-grow flex flex-col gap-2 bg-[#12113D] p-4 rounded-b-2xl">
              <div className="w-full grid gap-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-xl font-medium">{model.modelName}</h3>
                  <p>{model.modelId}</p>
                  <div className="flex items-center gap-2">
                    <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                    <p className="text-sm text-[#8E8E8E]">{model.ratings} Ratings</p>
                  </div>
                </div>
              </div>
              <p className="flex-grow text-sm leading-relaxed">
                {model.shortDes}
              </p>
              <p className="text-[#7B68EE] text-xl font-semibold self-end">
                {model.modelPrice.dollar} 
              </p>
              <button
                onClick={() => handleCardClick(model.modelId)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}