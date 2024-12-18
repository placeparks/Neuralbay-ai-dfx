import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { models as staticModels } from "../../../../constants";
import { usePlug } from "../../../../hooks/usePlug";
import { recordPurchaseInSupabase } from "../../../../utils/supabaseHelpers";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "../../../../supabaseClient";
import { Star } from "lucide-react";

export default function Details() {
  const { id: modelId } = useParams(); // Retrieve model ID from URL params
  const [model, setModel] = useState(null);
  const { isConnected, connectPlug, requestTransfer } = usePlug();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const staticModel = staticModels.find((item) => item.modelId === modelId);

    if (staticModel) {
      setModel(staticModel);
    } else {
      const fetchSupabaseModel = async () => {
        try {
          const { data, error } = await supabase
            .from("models")
            .select("id, name, description, price, modelimg, wallet_principal_id") // Include wallet_principal_id
            .eq("id", modelId)
            .single();

          if (error) {
            console.error("Error fetching model from Supabase:", error);
          } else {
            console.log("Fetched model from Supabase:", data);

            setModel({
              modelId: data.id || modelId,
              modelImg: data.modelimg || "/default-image.jpg",
              modelName: data.name || "Unnamed Model",
              shortDes: data.description || "No description available",
              modelPrice: {
                eth: data.price || "0",
                dollar: (data.price || 0) * 167,
              },
              wallet_principal_id: data.wallet_principal_id || null, // Ensure wallet principal is set
            });
          }
        } catch (err) {
          console.error("Unexpected error fetching model:", err);
        }
      };

      fetchSupabaseModel();
    }
  }, [modelId]);

  const handleBuyClick = async () => {
    if (!authContext || !authContext.principal) {
      console.error("User is not authenticated or principal ID is missing.");
      navigate("/login");
      return;
    }

    if (!model || !model.wallet_principal_id) {
      console.error("Recipient wallet address is missing.");
      alert("Error: No recipient wallet address found for this model.");
      return;
    }

    try {
      const amountICP = parseFloat(model.modelPrice.eth || "0");
      console.log(`Transferring ${amountICP} ICP to ${model.wallet_principal_id}`);

      const response = await requestTransfer(model.wallet_principal_id, amountICP);
      console.log("Transaction successful:", response);

      await recordPurchaseInSupabase(authContext.principal, modelId);
      alert("Purchase successful!");
      window.location.href = "https://model-test-chi.vercel.app/";
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  if (!model) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col pt-20">
      <div className="relative py-12 bg-customBackgroundGreyGrad shadow">
        <div className="container grid grid-cols-10 items-center gap-4 3xl:gap-8 pb-12">
          <div className="col-span-10 lg:col-span-6 grid grid-cols-5 items-stretch gap-6">
            <div className="relative max-lg:h-[220px] col-span-5 lg:col-span-2 py-2">
              <img src={model.modelImg} alt="Model Image" className="w-full h-full object-cover rounded" />
            </div>
            <ShortDesc
              modelName={model.modelName}
              providerImg={model.providerImg || "/fallback-provider.png"}
              providerName={model.providerName || "Unknown Provider"}
              shortDes={model.shortDes}
              likes={model.likes}
              reviews={model.reviews || []}
            />
          </div>
          <div className="col-span-10 lg:col-span-4">
            <CurrentPrice modelPrice={model.modelPrice} handleBuyClick={handleBuyClick} />
          </div>
        </div>
      </div>
      {/* Additional sections and tabs as required */}
    </div>
  );
}

function CurrentPrice({ modelPrice, handleBuyClick }) {
  return (
    <div className="bg-[#12113D] p-6 space-y-4 rounded-2xl">
      <p>Current Price</p>
      <div className="flex items-end gap-2">
        <p className="text-4xl font-customBold">{modelPrice?.eth || "N/A"} ICP</p>
        <p className="text-lg">${modelPrice?.dollar || "N/A"}</p>
      </div>
      <Button className="w-full rounded-lg" onClick={handleBuyClick}>
        Buy Now
      </Button>
    </div>
  );
}


function ShortDesc({ modelName, providerImg, providerName, shortDes, likes, reviews }) {
  return (
    <div className="col-span-5 lg:col-span-3 flex flex-col items-start justify-center gap-2 3xl:gap-4">
      <h3 className="text-3xl font-medium">{modelName}</h3>
      <div className="flex items-center gap-2">
        <img
          src={providerImg}
          alt={`${providerName} Logo`}
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-muted">{providerName}</p>
      </div>
      <p>{shortDes}</p>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <p className="text-muted">Likes {likes}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[#FAC177] w-4 h-4">
                ⭐
              </span>
            ))}
            <span className="text-[#FAC177] w-4 h-4">☆</span>
          </div>
          <p className="text-muted">{reviews.length} Reviews</p>
        </div>
      </div>
    </div>
  );
}

