"use client";

import { generateImage } from "../../../../../lib/data"; 
import { Button } from "../../../../../components/ui/button";
import { Form } from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TranscribeTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [transcription, setTranscription] = useState();
  const form = useForm({
    defaultValues: {
      file: "",
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (values) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    const data = await generateTranscribe(formData);
    setTranscription(data.transcription);
    
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
              <h1 className="text-xl font-medium">Transcribe Model</h1>
              <div className="space-y-2">
                <Label>Please upload audio:</Label>
                <Input
                  type="file"
                  //   accept="audio/*"
                  onChange={(e) => handleFileChange(e)}
                  className="text-black"
                />
              </div>
              <Button type="submit">
                {isLoading ? "Generating..." : "Generate"}
              </Button>
            </form>
          </Form>

          {transcription && (
            <div className="bg-background rounded-md p-4">
              <div dangerouslySetInnerHTML={{ __html: transcription }}></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
