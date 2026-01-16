export default function About() {
  return (
    <div className="bg-white text-black">

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          alt="about appliz"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">About Appliz</h1>
          <p>
            Redefining how people discover, buy, and rent properties.
          </p>
        </div>
      </section>

      {/* Company Overview */}
    <section className="py-16 px-6 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">

        {/* Vision */}
        <div className="shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-center text-green-950 mb-3">
            Our Vision
        </h3>
        <p className="text-gray-700">
            To become a trusted and innovative real estate platform that empowers
            individuals and families to make confident property decisions.
        </p>
        </div>

        {/* Mission */}
        <div className="shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-center font-semibold text-green-950 mb-3">
            Our Mission
        </h3>
        <p className="text-gray-700">
            To simplify property discovery by providing transparent listings,
            modern tools, and expert support that meet the needs of today’s
            buyers, renters, and investors.
        </p>
        </div>

        {/* Core Values */}
        <div className="shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-center font-semibold text-green-950 mb-3">
            Core Values
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Integrity and transparency</li>
            <li>Customer-first approach</li>
            <li>Innovation and simplicity</li>
            <li>Trust and accountability</li>
        </ul>
        </div>

  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-950 mb-10">
          Why Choose Appliz
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="shadow-lg p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Trusted Listings</h4>
            <p className="text-gray-600 text-sm">
              Every property is carefully reviewed to ensure accuracy and
              legitimacy.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Customer-First Approach</h4>
            <p className="text-gray-600 text-sm">
              We prioritize transparency, support, and long-term relationships.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Modern Experience</h4>
            <p className="text-gray-600 text-sm">
              A clean interface designed to make property search fast and simple.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Let’s Help You Find Your Next Property
        </h2>
        <p className="mb-6 text-gray-300">
          Whether you’re buying, renting, or investing, Appliz is here for you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-950 text-white px-6 py-3 rounded"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
