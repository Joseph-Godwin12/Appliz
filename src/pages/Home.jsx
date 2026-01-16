export default function Home() {
  return (
    <div className="bg-white text-black">
      
      {/* Hero Section */}
      <section
        className="h-[100vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1568605114967-8130f3a36994)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Home
          </h1>
          <p>
            Appliz helps you discover premium properties with ease and confidence.
          </p>
        </div>
      </section>

      {/* About Preview */}
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


      {/* Properties Preview */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-army mb-6">
            Featured Properties
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="property"
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Luxury Apartment</h3>
                  <p className="text-sm text-gray-600">
                    Prime location with modern design and comfort.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Own or Rent?
        </h2>
        <p className="mb-6 text-gray-600">
          Explore properties tailored just for you.
        </p>
        <button className="bg-army text-white px-6 py-3 rounded">
          Browse Properties
        </button>
      </section>
    </div>
  );
};

