// src/hooks/usePlug.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePlug = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [principalId, setPrincipalId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkConnection = async () => {
      console.log("Checking Plug connection...");
      if (window.ic && window.ic.plug && typeof window.ic.plug.isConnected === "function") {
        try {
          const connected = await window.ic.plug.isConnected();
          console.log("Is Connected:", connected);
          setIsConnected(connected);
          if (connected && typeof window.ic.plug.getPrincipal === "function") {
            const principal = await window.ic.plug.getPrincipal();
            const principalText = principal.toText ? principal.toText() : principal;
            console.log("Principal:", principalText);
            setPrincipalId(principalText);
          }
        } catch (error) {
          console.error("Error checking Plug connection:", error);
        }
      } else {
        console.warn("Plug wallet not detected or missing methods.");
      }
    };

    checkConnection();
  }, []);

  const connectPlug = async () => {
    if (window.ic && window.ic.plug && typeof window.ic.plug.requestConnect === "function") {
      try {
        const connected = await window.ic.plug.requestConnect();
        console.log("Connected:", connected);
        setIsConnected(connected);
        if (connected && typeof window.ic.plug.getPrincipal === "function") {
          const principal = await window.ic.plug.getPrincipal();
          const principalText = principal.toText ? principal.toText() : principal;
          console.log("Principal after connection:", principalText);
          setPrincipalId(principalText);
        }
      } catch (error) {
        console.error("Error connecting to Plug wallet:", error);
      }
    } else {
      console.error("Plug wallet not available or missing methods.");
    }
  };

  const requestTransfer = async (to, amountICP) => {
    if (!(window.ic && window.ic.plug && typeof window.ic.plug.requestTransfer === "function")) {
      console.error("Plug wallet is not available or missing transfer method.");
      return;
    }

    try {
      const amountE8s = Math.floor(amountICP * 100_000_000); // Convert ICP to e8s
      console.log(`Attempting transfer of ${amountICP} ICP (${amountE8s} e8s) to ${to}`);

      const response = await window.ic.plug.requestTransfer({ to, amount: amountE8s });
      console.log("Transaction response:", response);

      if (response && response.height) {
        console.log("Transaction successful with height:", response.height);
        return response;
      } else {
        console.warn("Transaction not confirmed; 'height' field is empty.");
        return null;
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      return null;
    }
  };

  return { isConnected, principalId, connectPlug, requestTransfer };
};
