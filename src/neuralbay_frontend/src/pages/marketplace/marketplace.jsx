// src/components/Marketplace.js

import React, { useContext, useState, useEffect } from "react";
import { models as staticModels } from "../../../constants";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { checkPurchaseStatus } from "../../../utils/supabaseHelpers";
import { supabase } from "../../../supabaseClient"; 

export default function Marketplace() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [models, setModels] = useState([]); 
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        // Fetch models from Supabase
        const { data, error } = await supabase.from("models").select("*");

        if (error) {
          console.error("Error fetching models from Supabase:", error);
        } else {
          const transformedData = data.map((model) => ({
            modelId: model.id,
            modelImg: model.modelimg || "/default-image.jpg",
            modelName: model.name || "Unnamed Model",
            ratings: model.ratings || "0",
            likes: model.likes || "0",
            shortDes: model.description || "No description available",
            modelPrice: {
              eth: model.price || "0",
              dollar: model.price ? (parseFloat(model.price) * 167).toFixed(2) : "0",
            },
            modelTags: model.tags || [],
            modelOverview: model.overview || "No overview available",
            developedBy: model.developedBy || "Unknown",
            modelType: model.type || "N/A",
            languages: model.languages || [],
            licence: model.licence || "N/A",
            modelDesc: model.description || "No detailed description available",
            moreInfo: model.moreInfo || "No additional information",
            category: model.category || "Uncategorized",
            isFromSupabase: true, 
          }));

          const combinedModels = [
            ...staticModels.map((model) => ({ ...model, isFromSupabase: false })),
            ...transformedData,
          ];

          setModels(combinedModels);
        }
      } catch (err) {
        console.error("Unexpected error fetching models:", err);
      }
    };

    fetchModels();
  }, []);

  const handleCardClick = async (modelId) => {
    if (!authContext || !authContext.principal) {
        setShowLoginPrompt(true);
        return;
    }

    const hasPurchased = await checkPurchaseStatus(authContext.principal, modelId);
    if (hasPurchased) {
        const model = models.find((m) => m.modelId === modelId);
        window.location.href = "https://model-test-chi.vercel.app/";
    } else {
        navigate(`/marketplace/${modelId}`);
    }
};

  const handleLogin = async () => {
    if (authContext && authContext.login) {
      await authContext.login();
    }
  };

  return (
    <main className="flex-grow">
      {/* Login Prompt Modal */}
      {showLoginPrompt && (
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
            <button
              onClick={() => setShowLoginPrompt(false)}
              className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Marketplace Grid */}
      <div className="container grid lg:grid-cols-3 gap-8 py-8 pt-24">
        {models.map((model, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(model.modelId || model.id)}
            className="w-full h-full flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-200"
          >
            {/* Model Image */}
            <div className="relative w-full h-[187px]">
              <img
                src={model.modelImg || "/path/to/default-image.png"} // Replace with actual default image path
                alt={model.modelName || "Model Image"}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              {/* Subscription Badge */}
              <div className="absolute right-5 bottom-5 text-xs bg-[rgba(1,0,31,0.30)] backdrop-blur-[12px] px-6 py-2 rounded-full">
                Subscription
              </div>
            </div>

            {/* Model Details */}
            <div className="flex-grow flex flex-col gap-2 bg-[#12113D] p-4 rounded-b-2xl">
              {/* Model Name and Ratings */}
              <div className="w-full grid gap-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-xl font-medium">{model.modelName || "Unnamed Model"}</h3>
                  <p className="text-sm text-gray-400">{model.modelId || model.id}</p>
                  <div className="flex items-center gap-2">
                    <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                    <p className="text-sm text-[#8E8E8E]">{model.ratings} Ratings</p>
                  </div>
                </div>
              </div>

              {/* Model Description */}
              <p className="flex-grow text-sm leading-relaxed text-gray-300">
                {model.shortDes || "No description available"}
              </p>

              {/* Model Price */}
              <p className="text-[#7B68EE] text-xl font-semibold self-end">
                ${model.modelPrice?.dollar || model.price || "N/A"}
              </p>

              {/* Buy Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  handleCardClick(model.modelId || model.id);
                }}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
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
