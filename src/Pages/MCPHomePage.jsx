import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Gem , Radiation, Globe , Recycle} from "lucide-react";

export default function MCPHomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");




const handleSubmit = async (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError("Please enter a valid email address.");
          return;
        }

       setEmailError("")
       setIsSubmitting(true);

      try {
        const response = await fetch("http://localhost:5000/appointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail("");
        } else {
          console.error("Failed to send appointment email.");
        }
      } catch (error) {
        console.error("Error:", error);
      }finally {
    setIsSubmitting(false); // Re-enable if needed
  }
};


  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const servicesList = [
    "Financial Advisory",
    "Debt Capital",
    "Equity Capital",
    "Connecting clients to right financing partners",
    "Data room setup & management",
    "Credit Management",
    "Risk Management",
    "Green Financing",
    "ESG",
    "Local Account Agent for Offshore Partners",
  ];

  const coreValues = [
    {
      title: "Excellence",
      icon: "🌟",
      description:
        "Our business is anchored on the pursuit of a high level of excellence in delivering various solutions for our clients.",
    },
    {
      title: "Transparency",
      icon: "🔍",
      description:
        "High ethical considerations and very transparent dealings underpin what MCP stands for at each point in time.",
    },
    {
      title: "Integrity",
      icon: "🤝",
      description:
        "The highest level of integrity guides every interaction and engagement at MCP in our dealings with all stakeholders.",
    },
    {
      title: "Resilience",
      icon: "💪",
      description:
        "We remain committed to any given task until we achieve our mutual goal, the challenges notwithstanding. We persist until we win with our clients.",
    },
  ];

  const uspList = [
    {
      logo: <Gem size={24} className="text-blue-900" />,
      title: "Sustainable Value",
      text: "With our global expertise, we are a reliable partner that seeks to understand your business, your operating model and specific needs within your ecosystem to unlock solutions that drive sustainable value for the short, medium and long term.",
    },
    {
      logo: <Radiation size={24} className="text-blue-900" />,
      title: "Risk Management Capabilities",
      text: "MCP does not adopt a one-size-fits-all approach when it comes to risk management. We assist clients to develop proactive risk appetite frameworks and embed risk cultures with our global partners.",
    },
    {
      logo: <Globe size={24} className="text-blue-900" />,
      title: "Connecting You to Global Opportunities",
      text: "We connect our partners to the right global opportunities to support their aspirations in expansion, growth, and restructuring.",
    },
    {
      logo: <Recycle size={24} className="text-blue-900" />,
      title: "Sustainability Practices (ESG & Green Considerations)",
      text: "We apply our expertise in sustainable financing and ESG practices across varied business models, helping partners meet modern compliance and impact goals.",
    },
  ];

  const successStories = [
    ["Mining Asset Deal", "$120 million"],
    ["Cassava to Industrial Starch", "$50 million"],
    ["New Mining Asset Financing", "$300 million"],
    ["Energy & Power – BDCs", "$50 million"],
    ["Lubricants Factory Setup", "$10 million"],
    ["Cocoa Sector LBCs", "$110 million"],
  ];

  const fundingPools = [
    ["Europe", "$3 billion"],
    ["Asia", "$2 billion"],
    ["Middle East", "$2 billion"],
    ["Americas", "$1.5 billion"],
    ["Others", "$1 billion"],
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-blue-900">MCP</div>
          <nav className="hidden md:flex space-x-6 items-center relative">
            <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">About Us</a>
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-900 flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>
              <div
                className={`absolute top-full mt-2 bg-white border rounded-md shadow-md w-64 z-10 transition-opacity duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {servicesList.map((service, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-900">Contact Us</a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-900">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-900">About Us</a>
            <details className="text-gray-700">
              <summary className="cursor-pointer py-2 hover:text-blue-900">Services</summary>
              <div className="ml-4 mt-2 space-y-1">
                {servicesList.map((service, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block text-sm hover:text-blue-900"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </details>
            <a href="#" className="block text-gray-700 hover:text-blue-900">Contact Us</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full bg-blue-950 text-white py-24 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">MCP Advisory</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
            African-based global advisory entity delivering bespoke financial solutions
            across equity, debt, mezzanine financing, and strategic financial architecture.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-white px-4 py-3 rounded-md text-black w-full sm:w-2/3 border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {emailError && (
              <p className="text-red-400 text-sm -mt-2 mb-2">{emailError}</p>
              )}

            <button
             disabled={isSubmitting}
              type="submit"
              className={`${
                  isSubmitting ? 'bg-blue-400  cursor-not-allowed ' : 'bg-blue-600 hover:bg-blue-700 '
                  } px-3 py-2 rounded-md text-white font-medium w-full sm:w-auto`}
            >
              {isSubmitting ? "Booking..." : "Book an Appointment"}
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-300">Thank you! We'll be in touch shortly.</p>
          )}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-medium text-blue-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Our Unique Selling Proposition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {uspList.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="text-blue-900 mb-4 flex justify-center items-center">
                {item.logo}
              </div>
              <h3 className="text-blue-900 text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">MCP Track Record</h2>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            MCP has created and co-created significant value for its partners over the period.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {successStories.map(([title, amount], idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden p-5">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                <p className="text-gray-600">{amount}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fundingPools.map(([region, amount], idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{region}</h4>
                <p className="text-gray-600">{amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
<section className="py-16 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          name: "Ama Mensah",
          field: "Capital Markets",
          description: "Ama has over 15 years of experience advising governments and private corporations on capital market instruments and financing strategy.",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Kwame Nkrumah",
          field: "Sustainable Finance",
          description: "Kwame specializes in ESG frameworks and green financing, helping clients align capital with sustainable impact.",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Linda Ofori",
          field: "Risk & Compliance",
          description: "Linda brings deep expertise in risk analysis and regulatory compliance, assisting clients in creating resilient operations.",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
      ].map((expert, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
        >
          <img
            src={expert.image}
            alt={expert.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-900">{expert.name}</h3>
          <p className="text-sm text-blue-600 mb-2">{expert.field}</p>
          <p className="text-gray-700 text-sm">{expert.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 px-4 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} MCP Advisory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
