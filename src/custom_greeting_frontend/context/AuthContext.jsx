"use client"
import React, { createContext, useState, useEffect } from "react"
import { AuthClient } from "@dfinity/auth-client"

export const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [authClient, setAuthClient] = useState(null)
  const [principal, setPrincipal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function initAuth() {
      const client = await AuthClient.create()
      setAuthClient(client)

      if (await client.isAuthenticated()) {
        const identity = client.getIdentity()
        setPrincipal(identity.getPrincipal().toString())
      }

      setLoading(false)
    }

    initAuth()
  }, [])

  const login = async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          const identity = authClient.getIdentity()
          setPrincipal(identity.getPrincipal().toString())
          console.log("Login successful!")
        },
        onError: error => {
          console.error("Login failed", error)
        }
      })
    }
  }

  const logout = async () => {
    if (authClient) {
      await authClient.logout()
      setPrincipal(null)
    }
  }

  // Render loading message until authentication completes
  if (loading) return <p>Loading...</p>

  return (
    <AuthContext.Provider value={{ principal, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
