import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Form } from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { useForm } from "react-hook-form";

export default function GenerateImageTest() {
  const { id: modelId } = useParams(); // Retrieve modelId from route parameters

  const { isLoading, error, data: modelDetails } = useQuery({
    queryKey: ["model-details", modelId],
    queryFn: () =>
      fetch(`/api/endpoints?id=${modelId}`).then((res) => res.json()),
    enabled: !!modelId,
  });

  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [output, setOutput] = useState();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (values) => {
    console.log(`${modelDetails?.url}?prompt=${values.prompt}`);
    setLoading(true);
    try {
      const headers =
        modelDetails?.headers?.key && modelDetails?.headers?.value
          ? { [modelDetails.headers.key]: modelDetails.headers.value }
          : undefined;

      const res =
        modelDetails?.input === "TEXT"
          ? await fetch(`${modelDetails?.url}?prompt=${values.prompt}`, {
              method: modelDetails.method,
              headers,
            })
          : await fetch(`${modelDetails?.url}`, {
              method: modelDetails.method,
              body: (() => {
                const formData = new FormData();
                formData.append("file", selectedFile);
                return formData;
              })(),
              redirect: "follow",
            });

      if (modelDetails?.output === "TEXT") {
        const data = await res.json();
        setOutput(data.transcription || data.response);
      } else {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setImage(url);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow mt-20">
      <section className="container w-2/3 py-12">
        <h1 className="text-3xl font-semibold text-center leading-loose">
          Test Run
        </h1>
        <div className="bg-[#12113D] p-4 rounded-xl space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h1 className="text-xl font-medium">{modelDetails?.name}</h1>
              {modelDetails?.input === "TEXT" ? (
                <div className="space-y-2">
                  <Label>Please enter prompt:</Label>
                  <Input
                    type="text"
                    onChange={(e) => form.setValue("prompt", e.target.value)}
                    className="text-black"
                  />
                </div>
              ) : (
                modelDetails?.input === "FILE" && (
                  <div className="space-y-2">
                    <Label>Please upload audio:</Label>
                    <Input
                      type="file"
                      onChange={(e) => handleFileChange(e)}
                      className="text-black"
                    />
                  </div>
                )
              )}

              <Button type="submit">
                {loading ? "Generating..." : "Generate"}
              </Button>
            </form>
          </Form>

          <div>
            {image && <img src={image} alt="img" width={500} height={320} />}

            {output && (
              <div className="bg-background rounded-md p-4">
                <div
                  dangerouslySetInnerHTML={{ __html: output }}
                  className=""
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
