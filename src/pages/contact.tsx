
import { FormEvent, useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage(data.message);
      form.reset();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | BloomCart</title>
      </Head>

      <main className="max-w-2xl mx-auto px-6 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-purple-700 text-center">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Have a question? Send us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 mt-10 space-y-5"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border p-3 rounded-lg"
          />

          <button
            disabled={loading}
            className="w-full bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-800 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="text-center text-sm">{message}</p>
          )}
        </form>
      </main>
    </>
  );
}
