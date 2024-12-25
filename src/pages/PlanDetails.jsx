import {
  Check,
  MessageSquare,
  Calendar,
  Bot,
  Star,
  Shield,
  Sparkles,
  Trophy,
} from "lucide-react";
import PlanLanding from "./PlanLanding";

const PlanDetails = () => {
  const highlights = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise-grade security",
    },
    { icon: <Sparkles className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <Trophy className="w-5 h-5" />, text: "Award-winning support" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
                    Most Popular Plan
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-6">AI Assistant Pro</h1>
                <p className="text-xl text-blue-100 mb-6">
                  Perfect for growing businesses looking to automate lead
                  management and response
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-blue-100 text-sm">
                    Increase in Lead Conversion
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100 text-sm">
                    Automated Response Time
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-100 text-sm">Lead Capture Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">5min</div>
                  <div className="text-blue-100 text-sm">
                    Average Setup Time
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="lg:ml-auto">
              <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    Starting from only
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-6xl font-bold">$9</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Unlimited AI responses
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Smart lead qualification
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Calendar integration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Premium support included
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105">
                    Buy Now
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    No credit card required • Cancel anytime
                  </p>
                </div>
              </div>
            </div> */}
            <div>
              <img
                src="/bot.png"
                alt=""
                className="animate-bounce animate-infinite"
              />
            </div>
          </div>
        </div>
      </div>
      <PlanLanding />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 px-4">
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
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wIF4TU2zDA0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Never miss a lead - 24/7 instant response",
              "Automated scheduling synced to your calendar",
              "Smart lead qualification before your involvement",
              "Work around the clock automatically",
              "Always first to respond to new leads",
              "Customizable response templates",
              "Integration with your existing tools",
              "Detailed analytics and reporting",
              "Priority support",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100"
              >
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "24/7 Response",
                desc: "Never miss a lead with instant AI responses",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Smart Scheduling",
                desc: "Automated calendar management",
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Lead Qualification",
                desc: "Intelligent screening and routing",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100"
              >
                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can I get started?",
                a: "Setup takes less than 10 minutes and our AI Assistant begins working immediately after configuration.",
              },
              {
                q: "Can I customize the AI's responses?",
                a: "Yes, you can fully customize the AI's responses and behavior to match your brand voice and requirements.",
              },
              {
                q: "What integrations are supported?",
                a: "We integrate with major calendar systems, CRMs, and messaging platforms including Google, Outlook, and Slack.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-100"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg">
            Start Your Free Trial
          </button>
          <p className="mt-4 text-blue-100">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
