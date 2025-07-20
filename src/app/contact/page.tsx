"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { motion } from "framer-motion";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";
import { clientApi } from "~/trpc/react";
import Swal from "sweetalert2";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
  message: z.string().min(10),
});

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const submitFormMutation = clientApi.notification.create.useMutation({
    onSuccess: async () => {
      await Swal.fire({
        title: "Submission Successful",
        text: "Thank you for reaching out to Mziyonke. Our team has received your message and will respond as soon as possible.",
        icon: "success",
        timer: 20000,
      } as unknown as string);
      setIsSubmitting(false);
    },
    onError: async (error) => {
      await Swal.fire({
        title: "Submit form error",
        text: error.message,
        icon: "error",
        timer: 20000,
      } as unknown as string);
      setIsSubmitting(false);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    submitFormMutation.mutate({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      message: values.message,
    });

    form.reset();
    setIsSubmitting(false);
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <NavBar />
      <motion.div
        className="flex flex-col justify-around bg-gray-50 py-12 md:flex-row md:p-12"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
      >
        <motion.div
          className="mb-8 flex flex-col items-start justify-center px-4 md:mb-0 md:w-1/2"
          variants={itemVariants}
        >
          <h2 className="mb-4 w-full text-center text-3xl font-bold text-gray-800 md:w-fit">
            Contact Us
          </h2>
          <p className="text-center leading-relaxed text-gray-600">
            We&apos;d love to hear from you! Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div className="px-4 md:w-1/2" variants={itemVariants}>
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 rounded-lg bg-white p-8 shadow-lg"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                variants={itemVariants}
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mxolisi"
                          {...field}
                          className="rounded-full border p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mbulazi"
                          {...field}
                          className="rounded-full border p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                variants={itemVariants}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="mxo23@example.com"
                          {...field}
                          className="rounded-full border p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="076 770 0996"
                          {...field}
                          className="rounded-full border p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little about your driving goals"
                          className="resize-none rounded-2xl border p-6"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary py-6 text-white transition duration-200"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </motion.div>
            </motion.form>
          </Form>
        </motion.div>
      </motion.div>
      <FAQ />
      <Footer />
    </>
  );
}
