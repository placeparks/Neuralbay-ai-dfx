"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { useFieldArray, useForm } from "react-hook-form";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";
import {useRouter} from "react-router-dom";

export default function UploadModelForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = [
    {
      id: "1",
      method: "GET",
    },
    {
      id: "2",
      method: "POST",
    },
    {
      id: "3",
      method: "PUT",
    },
    {
      id: "4",
      method: "DELETE",
    },
    {
      id: "5",
      method: "PATCH",
    },
  ];

  const form = useForm({
    defaultValues: {
      url: "",
      name: "",
      description: "",
      method: methods[0].method,
      headers: {
        key: "",
        value: "",
      },
      parameters: {
        limit: 0,
        offset: 0,
      },
      input: "TEXT",
      output: "TEXT",
      isStatus: false,
    },
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      setIsLoading(true);
      const res = await fetch(`/api/endpoints`, {
        method: "POST",
        body: JSON.stringify({
          ...values,
          userId: "1231234",
        }),
      });
      const data = await res.json();
      console.log(data);
      router.replace("/marketplace");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    // console.log(values);
  };

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
                <FormMessage />
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
                <FormLabel className="font-normal">
                  Model Description*
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Short summery about your model"
                    {...field}
                    className="bg-background border-[#4E3EAD] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Method */}
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-normal">Method*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-6"
                  >
                    {methods.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-2 space-y-0.5"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.method} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.method}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
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
