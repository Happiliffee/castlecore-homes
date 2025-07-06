import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">CastleCore Homes</h1>
        <p className="text-lg">Building with Integrity, Progress & Accountability</p>
      </header>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8">
          We aim to redefine real estate in Nigeria by delivering quality homes, promoting transparency, and empowering communities.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Transparent property dealings</li>
          <li>✅ Affordable and flexible payment plans</li>
          <li>✅ Trusted by hundreds of homeowners</li>
        </ul>
      </section>
      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CastleCore Homes. All rights reserved.
      </footer>
    </div>
  );
}