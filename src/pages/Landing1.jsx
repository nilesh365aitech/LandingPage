import React, { useEffect, useState, useCallback } from "react";
import {
  Clock,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Bell,
  ArrowDown,
  Shield,
  Sparkles,
  Trophy,
} from "lucide-react";
import { ScheduleMeetingModal } from "./Home";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Assistant from "./Assistant";
import LoginPage from "./Login";

const EnhancedRealEstateLanding = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [missedCalls, setMissedCalls] = useState(20);
  const [dealValue, setDealValue] = useState(10000);
  const aiAssistantCost = 500; // Monthly cost of AI Assistant
  const [showModal, setShowModal] = React.useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isAIModal, setAIModal] = useState(false);

  const dealConversionRate = 0.015; // 1.5%
  const highlights = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise-grade security",
    },
    { icon: <Sparkles className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <Trophy className="w-5 h-5" />, text: "Award-winning support" },
  ];
  // Calculate Additional Monthly Revenue
  const additionalRevenue = Math.round(
    missedCalls * dealConversionRate * dealValue
  );

  // Calculate ROI
  const roi = Math.round(
    ((additionalRevenue - aiAssistantCost) / aiAssistantCost) * 100
  );
  const bot = {
    id: 301,
    name: "Property Finder AI",
    description:
      "Simplifies property search with tailored recommendations, efficient appointment scheduling, and preference filtering.",
    price: 9,
    image: "/src/assets/2.png",
    videoUrl: "https://www.youtube.com/embed/wIF4TU2zDA0",
    integrations: ["Google Calendar", "CRM (Airtable)", "Email", "SMS"],
  };

  const navigation = useNavigate();

  const handleSuccess = useCallback((e) => {
    const decoded = jwtDecode(e.credential);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("user", JSON.stringify(decoded));
    }

    navigation("/assistants");
  }, []);

  const handleError = useCallback((e) => {
    console.log(e);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserID = localStorage.getItem("userId");
    setUserId(storedUserID);
    setAuthToken(storedToken);
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:7009/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || data.error);

      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("userProfile", JSON.stringify(data.profile));
      setIsLogin(false);
      setShowModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!authToken) {
  //     const timer = setTimeout(() => {
  //       setIsLogin(true);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [authToken]);

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handeStart = useCallback(
    (id) => {
      navigation("/assistant", { state: { id } });
    },
    [navigation]
  );

  if (isLogin) {
    return (
      // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      //   <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
      //     <div className="flex justify-between items-center mb-6">
      //       <h3 className="text-xl font-bold text-gray-900">
      //         Login to Continue
      //       </h3>
      //       <button
      //         onClick={() => setIsLogin(false)}
      //         className="text-gray-400 hover:text-gray-600 text-2xl"
      //       >
      //         ×
      //       </button>
      //     </div>

      //     <form onSubmit={handleLogin} className="space-y-4">
      //       {error && (
      //         <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
      //           {error}
      //         </div>
      //       )}

      //       <div>
      //         <label className="block text-sm font-medium text-gray-700 mb-1">
      //           Email
      //         </label>
      //         <input
      //           type="email"
      //           required
      //           className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      //           value={formData.email}
      //           onChange={(e) =>
      //             setFormData({ ...formData, email: e.target.value })
      //           }
      //         />
      //       </div>

      //       <div>
      //         <label className="block text-sm font-medium text-gray-700 mb-1">
      //           Password
      //         </label>
      //         <input
      //           type="password"
      //           required
      //           className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      //           value={formData.password}
      //           onChange={(e) =>
      //             setFormData({ ...formData, password: e.target.value })
      //           }
      //         />
      //       </div>

      //       <button
      //         type="submit"
      //         disabled={loading}
      //         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
      //       >
      //         {loading ? "Logging in..." : "Login"}
      //       </button>
      //     </form>
      //     <button
      //       type="button"
      //       className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
      //     >
      //       {/* <img
      //         src="/google.png"
      //         alt="Google logo"
      //         className="mr-2 w-5 h-5"
      //       />
      //       Sign in with Google */}
      //       <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      //     </button>
      //     <p className="mt-4 text-center text-sm text-gray-600">
      //       By signing in, you agree to our{" "}
      //       <a
      //         href="#"
      //         className="font-medium text-indigo-600 hover:text-indigo-500"
      //       >
      //         Terms of Service
      //       </a>{" "}
      //       and{" "}
      //       <a
      //         href="#"
      //         className="font-medium text-indigo-600 hover:text-indigo-500"
      //       >
      //         Privacy Policy
      //       </a>
      //     </p>
      //   </div>
      // </div>
      <LoginPage />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">
                  #1 Rated Real Estate AI Assistant
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Turn Missed Calls into Closed Deals{" "}
                <span className="text-blue-600">While You Sleep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your AI assistant handles unlimited calls, schedules viewings,
                and qualifies leads 24/7 - so you never miss a potential sale.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <a
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                  href="#try-assistant"
                >
                  Try AI Assistant for free
                  <ArrowDown className="w-5 h-5 ml-2" />
                </a>
                <button
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch 2-Min Demo
                  <Play className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Setup in 5 minutes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            {/* Live Demo Preview */}
            <div className="hidden lg:block w-96 bg-white rounded-lg shadow-xl p-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-2">
                    Live Demo
                  </div>
                  <h3 className="font-semibold">See It In Action</h3>
                </div>

                {isLoading && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="animate-pulse space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                )}

                <div
                  className={`rounded-lg overflow-hidden ${
                    isLoading ? "hidden" : "block"
                  }`}
                >
                  <video
                    className="w-full h-auto"
                    controls
                    onLoadedData={handleVideoLoad}
                    onError={() => setIsLoading(false)}
                  >
                    <source src="/dummy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* <button
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => setActiveModal(true)}
                >
                  Try Interactive Demo
                </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-blue-100">
              Watch how our AI Assistant transforms your workflow
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl overflow-hidden shadow-2xl">
              {isLoading && (
                <div className="w-full h-full animate-pulse bg-blue-700/50" />
              )}
              <video
                className={`w-full h-full object-cover ${
                  isLoading ? "hidden" : "block"
                }`}
                controls
                onLoadedData={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              >
                <source src="/dummy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* ROI Calculator Section */}
      {/* <div className="py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Revenue Potential
            </h2>
            <p className="text-gray-600">
              See how much more you could earn by never missing a lead
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Your Current Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Average Monthly Missed Calls
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="20"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Average Deal Value
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="$10,000"
                      value={dealValue}
                      onChange={(e) => setDealValue(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">
                  Your Potential with AI Assistant
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Additional Monthly Revenue</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${additionalRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="text-2xl font-bold text-green-600">
                      {roi.toLocaleString()}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Feature Comparison */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Without vs. With AI Assistant
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-500">
                Without AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Miss leads while with clients or sleeping",
                  "Manually schedule and reschedule viewings",
                  "Waste time on unqualified leads",
                  "Limited to working hours only",
                  "Risk losing leads to faster-responding agents",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-500">
                    <span className="w-5 h-5 mr-3 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg border-2 border-blue-600">
              <h3 className="text-xl font-semibold mb-6 text-blue-900">
                With AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Never miss a lead - 24/7 instant response",
                  "Automated scheduling synced to your calendar",
                  "Smart lead qualification before your involvement",
                  "Work around the clock automatically",
                  "Always first to respond to new leads",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-900">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FOMO Section */}
      <div className="border-t border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-600">
                <strong>73 agents</strong> signed up in the last 24 hours
              </span>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-600">
                <strong>Limited spots available</strong> for your area
              </span>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-4">
                    <span className="text-blue-100 font-medium">
                      AI-Powered Assistant
                    </span>
                  </div>
                  <h1 className="text-5xl font-bold mb-6">
                    Meet Your AI Companion
                  </h1>
                  <p className="text-xl text-blue-100 mb-6">
                    Experience intelligent conversations, task automation, and
                    24/7 support with our advanced AI assistant
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">0.1s</div>
                    <div className="text-blue-100 text-sm">Response Time</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-blue-100 text-sm">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-100 text-sm">Availability</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">∞</div>
                    <div className="text-blue-100 text-sm">Use Cases</div>
                  </div>
                </div>

                <button
                  onClick={() => navigation("/assistants")}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Try Assistant Now
                </button>

                <div className="flex flex-wrap gap-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/bot.png"
                  alt="AI Assistant"
                  className="animate-bounce animate-infinite"
                />
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-xl w-full p-8 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your Real Estate AI Assistant
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  I'm your AI-powered real estate assistant, ready to help you
                  with:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🔍",
                      title: "Property Search",
                      desc: "Find your perfect home based on your preferences",
                    },
                    {
                      icon: "💰",
                      title: "Price Analysis",
                      desc: "Get instant property valuations and market insights",
                    },
                    {
                      icon: "📊",
                      title: "Market Trends",
                      desc: "Access real-time market data and trends",
                    },
                    {
                      icon: "📝",
                      title: "Listing Assistant",
                      desc: "Help create compelling property descriptions",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    onClick={() =>
                      !authToken
                        ? setIsLogin(true)
                        : handeStart("Real-estate-New-iSKHignjLL9LrPsz-8Ajb")
                    }
                  >
                    <span>Try Our AI Assistant</span>
                    <span className="text-xl">→</span>
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Available 24/7 to help with your real estate needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
      <ScheduleMeetingModal
        isOpen={activeModal}
        onClose={() => setActiveModal(false)}
        bot={bot}
        mode="schedule"
      />
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 transition focus:outline-none"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Watch the Demo
              </h2>
              <p className="text-blue-500">
                Explore the interactive demo by watching this video.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-50 to-blue-100">
              {isLoading && (
                <div className="aspect-video animate-pulse bg-blue-200/50 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-blue-500 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              )}

              <video
                className={`aspect-video w-full object-cover ${
                  isLoading ? "hidden" : "block"
                }`}
                controls
                onLoadedData={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              >
                <source src="/dummy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      {isAIModal && <Assistant />}
    </div>
  );
};

export default EnhancedRealEstateLanding;
