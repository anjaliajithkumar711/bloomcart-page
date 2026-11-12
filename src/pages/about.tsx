
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | BloomCart</title>
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
        <h1 className="text-4xl font-bold text-purple-700">
          About BloomCart
        </h1>

        <p className="text-gray-600 mt-6 leading-8">
          Welcome to BloomCart! We believe shopping should be
          simple, convenient and enjoyable.

          Our platform brings together a variety of products
          in one place, helping customers discover products
          that suit their needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            ["Our Mission", "To make online shopping simple."],
            ["Our Vision", "To create a better shopping experience."],
            ["Our Promise", "A convenient and user-friendly platform."],
          ].map(([title, description]) => (
            <div key={title} className="bg-purple-50 p-6 rounded-xl">
              <h2 className="font-bold text-xl text-purple-700">
                {title}
              </h2>
              <p className="mt-3 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
