import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const usePlug = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [principalId, setPrincipalId] = useState(null)
  const router = useNavigate()

  useEffect(() => {
    if (window.ic?.plug) {
      window.ic.plug.isConnected().then(setIsConnected)
    }
  }, [])

  const connectPlug = async () => {
    if (window.ic?.plug) {
      const connected = await window.ic.plug.requestConnect()
      setIsConnected(connected)
      if (connected) {
        const principal = await window.ic.plug.getPrincipal()
        setPrincipalId(principal)
      }
    }
  }

  const requestTransfer = async (to, amount) => {
    if (!window.ic?.plug) {
      console.error("Plug wallet is not available.")
      return
    }

    try {
      console.log(`Attempting transfer of 0.01 ICP (1,000,000 e8s) to ${to}`)

      // Pass amount in e8s directly (1_000_000 for 0.01 ICP)
      const response = await window.ic.plug.requestTransfer({
        to,
        amount: 1_000_000
      })
      console.log("Transaction response:", response)

      if (response && response.height) {
        console.log("Transaction successful with height:", response.height)
        return response
      } else {
        console.warn("Transaction not confirmed; 'height' field is empty.")
        return
      }
    } catch (error) {
      console.error("Transaction failed:", error)
      return
    }
  }

  return { isConnected, principalId, connectPlug, requestTransfer }
}
