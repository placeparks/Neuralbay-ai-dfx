"use client"
import React, { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Form } from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { generateImage } from "../../../../../lib/data"; 
import { useForm } from "react-hook-form";

export default function GenerateImageTest() {
  console.log("GenerateImageTest component loaded"); 

  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const data = await generateImage(values.prompt);
      setImage(data);
    } catch (error) {
    }
    setIsLoading(false);
  };

  return (
    <main className="flex-grow mt-20">
      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-center leading-loose">
          Test Run
        </h1>
        <div className="bg-[#12113D] p-4 rounded-xl space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h1 className="text-xl font-medium">Image Generation Model</h1>
              <div className="space-y-2">
                <Label>Please enter prompt:</Label>
                <Input
                  type="text"
                  onChange={(e) => form.setValue("prompt", e.target.value)}
                  className="text-black"
                />
              </div>
              <Button type="submit">
                {isLoading ? "Generating..." : "Generate"}
              </Button>
            </form>
          </Form>

          <div>
            {image && <img src={image} alt="Generated Image" width={500} height={320} />}
          </div>
        </div>
      </section>
    </main>
  );
}
