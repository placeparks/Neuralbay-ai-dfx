"use client";

import { generateChat } from "../../../../../lib/data"; 
import { Button } from "../../../../../components/ui/button";
import { Form } from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function InstructGptTest() {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    console.log(values.prompt);
    try {
      const data = await generateChat(values.prompt);
      console.log(data);
      setResponse(data?.response || "No response received.");
    } catch (error) {
      console.error("Error generating chat:", error);
      setResponse("An error occurred while generating the response.");
    } finally {
      setIsLoading(false);
    }
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
              <h1 className="text-xl font-medium">Instruct-GPT Model</h1>
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

          {response && (
            <div className="bg-background rounded-md p-4">
              <div dangerouslySetInnerHTML={{ __html: response }}></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

