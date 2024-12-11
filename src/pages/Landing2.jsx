import React from 'react';
import { 
  Clock, 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

const RealEstateLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your 24/7 Real Estate Assistant That Never Sleeps
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Handle property inquiries, schedule viewings, and qualify leads automatically while you focus on closing deals.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">85%</div>
              <div className="text-gray-600 mt-2">Lead Response Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">45%</div>
              <div className="text-gray-600 mt-2">More Showings Booked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">3hrs</div>
              <div className="text-gray-600 mt-2">Saved Daily</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Automate Your Real Estate Business
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Lead Response</h3>
              <p className="text-gray-600">Never miss an inquiry. Instant response to property questions, any time of day.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Scheduling</h3>
              <p className="text-gray-600">Let buyers book viewings directly into your calendar without your intervention.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lead Qualification</h3>
              <p className="text-gray-600">Pre-qualify leads by asking the right questions before they reach you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-8">
              "This AI assistant has transformed my business. I'm booking more viewings while sleeping than I used to during work hours."
            </blockquote>
            <div className="font-medium text-gray-900">Sarah Johnson</div>
            <div className="text-gray-600">Top Performing Agent, RE/MAX</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get Started in Minutes
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Your Bot</h3>
              <p className="text-gray-600">Select from our pre-built real estate AI assistants</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Customize Settings</h3>
              <p className="text-gray-600">Tailor responses and scheduling to your preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Go Live</h3>
              <p className="text-gray-600">Integrate with your phone and start automating</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Real Estate Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful real estate agents who have transformed their business with AI assistance.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateLanding;