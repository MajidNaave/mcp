import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Gem , Radiation, Globe , Recycle,  ChevronLeft, ChevronRight} from "lucide-react";
import { Dialog } from "@headlessui/react";
import mundoImage from "../assets/mundomap.png"; // Adjust the path as necessary
import expertImage from "../assets/phelimon.jpeg"; // Adjust the path as necessary

export default function MCPHomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false); // for mobile and desktop
  const [currentStartIndex, setCurrentStartIndex] = useState(0);



const experts = [
          {
            name: "Philemon Okyere Danquah",
            field: "MFP, MSc (Executive Director, Sustainability & Finance)",
            description: "Certified Climate Finance Expert with extensive leadership in banking, sustainability, and capital raise strategy.",
            image: `${expertImage}`,
            fullBio: "...",
          },
          {
            name: "Bismark Boakye",
            field: "Chartered Accountant",
            description: "Chartered Accountant & Development Finance Specialist",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            fullBio: "...",
          },
          {
            name: "Linda Ofori",
            field: "Risk & Compliance",
            description: "Linda brings deep expertise in risk analysis and regulatory compliance, assisting clients in creating resilient operations.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            fullBio: "...",
          },
          {
            name: "Samuel K. Mensah",
            field: "Financial Analyst",
            description: "Samuel specializes in market trends, portfolio analysis, and investment planning.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            fullBio: "Samuel is a licensed financial analyst with 10+ years of experience...",
          },
          {
            name: "Akosua Boateng",
            field: "Environmental Consultant",
            description: "Akosua focuses on climate impact strategies and sustainability practices.",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            fullBio: "Akosua has advised over 50 companies on environmental impact solutions...",
          },
          {
            name: "Kwame Nkrumah",
            field: "IT Solutions Architect",
            description: "Kwame builds digital infrastructure for scalable enterprise solutions.",
            image: "https://randomuser.me/api/portraits/men/78.jpg",
            fullBio: "Kwame is an AWS-certified solutions architect with a passion for system optimization...",
          },
          {
            name: "Ama Serwaa",
            field: "Legal & Compliance",
            description: "Ama ensures organizational compliance with legal frameworks.",
            image: "https://randomuser.me/api/portraits/women/88.jpg",
            fullBio: "Ama is a certified legal compliance consultant and policy advisor...",
          },
        ]

const expertsPerPage = 3;
const totalPages = Math.ceil(experts.length / expertsPerPage);

// Auto-play
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentStartIndex((prev) => (prev + 1) % totalPages);
  }, 5000); // Change slide every 5 seconds

  return () => clearInterval(interval); // Cleanup on unmount
}, [totalPages]);




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
        const response = await fetch("https://mcpbackend-chi.vercel.app/appointment", {
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
    <div className="min-h-screen bg-gradient-to-br from-violet-800 via-fuchsia-600 to-pink-500 text-dark font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-white">Mundo Africa</div>
          <nav className="hidden md:flex space-x-6 items-center relative">
            <a href="#home" className="text-white hover:text-blue-900">Home</a>
            <a href="#about" className="text-white hover:text-blue-900">Values</a>
             <a href="#records" className="block text-white hover:text-blue-900">Track Records</a>
             <div className="relative">
                   <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="text-white hover:text-blue-900 flex items-center gap-1"
                      >
                   About Us <ChevronDown size={16} />
                   </button>

                    {aboutOpen && (
                      <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md w-64 z-50">
                        {[
                          { label: "Governing Board", href: "#board" },
                          { label: "Consultants", href: "#consultants" },
                          { label: "Global Partners", href: "#partners" },
                          { label: "Our Expertise", href: "#expertise" },
                        ].map((item, idx, arr) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setAboutOpen(false)} // close on click
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 ${
                              idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                            }`}
                          >
                            {item.label}
                          </a>
                           ))}
                              </div>
                            )}
            </div>

            <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-white hover:text-blue-900 flex items-center gap-1"
                    >
                  Services <ChevronDown size={16} />
                  </button>

                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md w-64 z-50">
                        {servicesList.map((service, idx, arr) => (
                          <a
                            key={idx}
                            href="#services"
                            onClick={() => setServicesOpen(false)} // Optional: auto-close on click
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 ${
                              idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                            }`}
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    )}
              </div>

          <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact Us</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-white">
            <a href="#home" className="block hover:text-blue-200">Home</a>
            <details className="text-white">
              <summary className="cursor-pointer py-2 hover:text-blue-200">About Us</summary>
              <div className="ml-4 mt-2 space-y-1">
                <a href="#board" className="block text-sm hover:text-blue-200">Governing Board</a>
                <a href="#consultants" className="block text-sm hover:text-blue-200">Consultants</a>
                <a href="#partners" className="block text-sm hover:text-blue-200">Global Partners</a>
                <a href="#expertise" className="block text-sm hover:text-blue-200">Our Expertise</a>
              </div>
            </details>
            <a href="#records" className="block hover:text-blue-200">Track Records</a>
            <details className="text-white">
              <summary className="cursor-pointer py-2 hover:text-blue-200">Services</summary>
              <div className="ml-4 mt-2 space-y-1">
                {servicesList.map((service, idx) => (
                  <a
                    key={idx}
                    href="#service"
                    className="block text-sm hover:text-blue-200"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </details>
            <a href="#contact" className="block hover:text-blue-200">Contact Us</a>
          </div>)}
  
      </header>

      {/* Hero Section */}
    <section
  id="home"
  className="relative w-full min-h-screen bg-blue-950 text-white px-4 sm:px-6 flex flex-col justify-center items-center text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${mundoImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-indigo-900/80 to-pink-800/70"></div>


  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Mundo Africa Advisory</h1>
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
        className="bg-white px-4 py-3 rounded-md text-black w-full sm:w-2/3 border focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      <section id="about" className=" py-12 px-4 sm:px-6">
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
      <section id="services" className="py-12 px-4 sm:px-6">
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
      <section id="records" className="py-16 px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">MCP Track Record</h2>
          <p className="text-center text-base sm:text-lg mb-10 max-w-3xl mx-auto">
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

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Global Funding Sources</h2>
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
<section id="expertise" className="py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Our Expertise</h2>

    <div className="relative flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => setCurrentStartIndex((prev) => Math.max(prev - 3, 0))}
        className="z-20 bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition mx-4"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-blue-800" />
      </button>

      {/* Animated Grid */}
      <div className="flex-1 overflow-hidden">
        <div
          key={currentStartIndex} // This forces React to treat each group as a new render
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 transition-opacity duration-500 ease-in-out opacity-100 animate-fade"
        >
          {experts
            .slice(currentStartIndex, currentStartIndex + 3)
            .map((expert, idx) => (
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
                <button
                  onClick={() => setSelectedExpert(expert)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrentStartIndex((prev) => Math.min(prev + 3, experts.length - 3))
        }
        className="z-20 bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition mx-4"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-blue-800" />
      </button>
    </div>
  </div>

  {/* Modal */}
  {selectedExpert && (
    <div className="fixed inset-0 z-50 flex justify-center items-center px-4 overflow-y-auto">
      <div className="absolute inset-0 bg-blue-100 bg-opacity-40 backdrop-blur-md transition-opacity duration-300"></div>
      <div className="relative bg-white rounded-xl max-w-2xl w-full mx-auto my-12 p-6 shadow-2xl z-10 animate-fade-in">
        <button
          onClick={() => setSelectedExpert(null)}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold text-blue-900 mb-2">{selectedExpert.name}</h3>
        <p className="text-blue-700 text-sm font-medium mb-4">{selectedExpert.field}</p>
        <div className="text-gray-800 text-sm whitespace-pre-line leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {selectedExpert.fullBio}
        </div>
      </div>
    </div>
  )}
</section>





      {/* Footer */}
      <footer id="contact" className="bg-blue-900 text-white py-6 px-4 text-center ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="mb-4">You can reach out to us via email at <a href="mailto:mundoafricacapital@gmail.com" className="text-blue-600 underline">mundoafricacapital@gmail.com</a></p>
          <p>Phone: +233 248253595</p>
        </div>
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} MCP Advisory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
