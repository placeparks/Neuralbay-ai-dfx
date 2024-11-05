// src/components/UploadModelForm.js

import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabaseClient";
import { AuthContext } from "../../../../context/AuthContext";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../../../declarations/custom_greeting_backend";

// Import your UI components
import { Button } from "../../../../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Switch } from "../../../../components/ui/switch";
import { Label } from "../../../../components/ui/label";

export default function UploadModelForm() {
  const navigate = useNavigate();
  const { principal, login } = useContext(AuthContext) || {};
  const [isLoading, setIsLoading] = useState(false);

  const canisterId = "ezvoz-kqaaa-aaaal-qnbpq-cai";
  const agent = new HttpAgent({ host: "https://ic0.app" });
  const backendActor = Actor.createActor(idlFactory, { agent, canisterId });

  const methods = [
    { id: "1", method: "GET" },
    { id: "2", method: "POST" },
    { id: "3", method: "PUT" },
    { id: "4", method: "DELETE" },
    { id: "5", method: "PATCH" },
  ];

  const form = useForm({
    defaultValues: {
      url: "",
      name: "",
      description: "",
      modelImg: "",
      method: methods[0].method,
      headers: { key: "", value: "" },
      parameters: { limit: 0, offset: 0 },
      input: "TEXT",
      output: "TEXT",
      isStatus: false,
      walletPrincipalId: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      // Upload to Supabase
      const { data, error } = await supabase
        .from("models")
        .insert([
          {
            name: values.name,
            description: values.description,
            modelimg: values.modelImg || "/images/default.png",
            price: values.price || 0,
            principal_id: principal,
            wallet_principal_id: values.walletPrincipalId, 
          },
        ]);

      if (error) throw error;

      // Upload to backend canister
      const canisterResponse = await backendActor.addModel(
        values.name,
        values.url,
        values.walletPrincipalId // Pass the wallet principal to the canister
      );

      console.log("Canister response:", canisterResponse);

      // Navigate to marketplace on success
      navigate("/marketplace");
    } catch (error) {
      console.error("Error saving model:", error);
    } finally {
      setIsLoading(false);
    }
  };


  if (!principal) {
    return (
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
    );
  }

  return (
    <section className="container py-8 space-y-6">
      <h1 className="text-2xl font-medium text-center">Add a Model</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="lg:w-2/3 bg-[#12113D] mx-auto flex flex-col gap-8 p-6 rounded-lg"
        >
          {/* Model URL */}
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Model URL*</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="Enter the URL of your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Model Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Model Name*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter the name of your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Model Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Model Description*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Short summary about your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Model Image URL */}
          <FormField
            control={form.control}
            name="modelImg"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Image URL</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="Enter the image URL for your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

             {/* Wallet Principal ID */}
             <FormField
            control={form.control}
            name="walletPrincipalId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Wallet Principal ID*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter wallet principal ID to receive tokens"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Price In ICP*</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter the price of your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input */}
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-normal">Input Type*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-6"
                  >
                    {["TEXT", "FILE"].map((item, index) => (
                      <FormItem
                        key={index}
                        className="flex items-center space-x-2 space-y-0.5"
                      >
                        <FormControl>
                          <RadioGroupItem value={item} />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Output */}
          <FormField
            control={form.control}
            name="output"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-normal">Output Type*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-6"
                  >
                    {["TEXT", "FILE"].map((item, index) => (
                      <FormItem
                        key={index}
                        className="flex items-center space-x-2 space-y-0.5"
                      >
                        <FormControl>
                          <RadioGroupItem value={item} />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Headers */}
          <div className="space-y-3">
            <Label className="font-normal">Headers*</Label>

            <div className="flex gap-6">
              {/* Limit */}
              <FormField
                control={form.control}
                name="headers.key"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter key"
                        {...field}
                        className="bg-background border-[#4E3EAD] focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Offset */}
              <FormField
                control={form.control}
                name="headers.value"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter value"
                        {...field}
                        className="bg-background border-[#4E3EAD] focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Parameters */}
          <div className="space-y-3">
            <Label className="font-normal">Parameters*</Label>

            <div className="flex gap-6">
              {/* Limit */}
              <FormField
                control={form.control}
                name="parameters.limit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted font-normal">
                      Limit
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter limit"
                        {...field}
                        className="bg-background border-[#4E3EAD] focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Offset */}
              <FormField
                control={form.control}
                name="parameters.offset"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted font-normal">
                      Offset
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter offset"
                        {...field}
                        className="bg-background border-[#4E3EAD] focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Status */}
          <FormField
            control={form.control}
            name="isStatus"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="font-normal">Make it public?</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="self-end">
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}


