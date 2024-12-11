import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  Star, 
  Globe 
} from 'lucide-react';
import HeroBanner from "../components/banner";
import healthcare from "../assets/3.png"
import english from "../assets/5.png"
import playschoool from "../assets/4.png"
import legal from "../assets/6.png"
import realestate from "../assets/2.png"
import Buycar from "../assets/13.png"
import sellcar from "../assets/7.png"
import hotel from "../assets/8.png"
import restaurant from "../assets/9.png"
import retail from "../assets/10.png"
import fitness from "../assets/14.png"
import hr from "../assets/11.png"
import solar from "../assets/12.png"
import realestate2 from "../assets/realestate2.png"
import axios from 'axios';

// Keep the existing ScheduleMeetingModal and BotPurchaseModal components as they were

const ScheduleMeetingModal = ({ isOpen, onClose, bot, mode }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Prepare data for webhook
      const webhookData = {
        ...formData,
        botName: bot.name,
        botPrice: bot.price,
        mode: mode
      };

      // Send data to webhook
      const response = await axios.post('https://hook.eu2.make.com/rl3339ixkzqotny7zj3orkrdiaww2mra', webhookData);
      
      // Different actions based on mode
      if (mode === 'buy') {
        // Redirect to Fiverr link
        window.location.href = 'https://www.fiverr.com/s/420erVl';
      } else {
        // For schedule meeting, just close the modal
        // alert('Meeting scheduled successfully!');
        window.location.href = 'https://calendly.com/projects-365aitech/30min';
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {mode === 'buy' ? 'Purchase' : 'Schedule Meeting'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              {mode === 'buy' ? 'Purchase' : 'Schedule Meeting'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const featuresMapping = {
  "Skills Evaluator AI": [
    "Conduct interviews",
    "Analyze skills",
    "Share detailed results",
    "Track performance",
    "Integrate with Google Sheets",
    "Automated assessment"
  ],
  "Smart Receptionist AI": [
    "Handle inquiries",
    "Book appointments", 
    "Send follow-ups",
    "Forward calls",
    "Manage calendar",
    "Personalized communication"
  ],
  "Property Finder AI": [
    "Search properties",
    "Book appointments",
    "Filter preferences",
    "Tailored recommendations",
    "CRM integration",
    "Efficient scheduling"
  ],
  "Realty Scheduler AI": [
    "Manage appointments",
    "Send follow-ups",
    "Extract user details",
    "Track scheduling",
    "Integrate with calendars",
    "Communication management"
  ],
  "SolarSync Scheduler AI": [
    "Schedule site visits",
    "Send follow-ups",
    "Provide product info",
    "Organize user information",
    "Calendar integration",
    "Efficient booking"
  ],
  "PlaySchool Scheduler AI": [
    "Handle inquiries",
    "Book appointments",
    "Manage scheduling",
    "Parent communication",
    "Follow-up management",
    "Easy booking"
  ],
  "Hospital Scheduler AI": [
    "Book appointments",
    "Send follow-ups",
    "Provide general info",
    "Patient communication",
    "Calendar management",
    "Efficient scheduling"
  ],
  "Education Scheduler AI": [
    "Schedule demo classes",
    "Manage follow-ups",
    "Student communication",
    "Class scheduling",
    "Engagement tracking",
    "Smooth coordination"
  ],
  "CarLead Qualifier AI": [
    "Qualify leads",
    "Schedule appointments",
    "Answer FAQs",
    "Escalate complex issues",
    "Lead management",
    "Automated follow-ups"
  ],
  "CarSales Recommender AI": [
    "Schedule appointments",
    "Real-time recommendations",
    "Manage lead collection",
    "Car matching",
    "Inquiry handling",
    "Preference-based suggestions"
  ],
  "HR Scheduler AI": [
    "Schedule interviews",
    "Send reminders",
    "Organize candidate data",
    "Interview coordination",
    "Communication tracking",
    "Candidate management"
  ],
  "Interview Insights AI": [
    "Conduct interviews",
    "Analyze responses",
    "Generate detailed reports",
    "Automated assessment",
    "Insights generation",
    "Decision support"
  ],
  // Existing features remain the same
 
};


const BotPurchaseModal = ({ isOpen, onClose, bot }) => {
  const [activeModal, setActiveModal] = useState(null);

  if (!isOpen || !bot) return null;

  const features = featuresMapping[bot.name] || [];

  const handleScheduleMeeting = () => {
    setActiveModal('schedule');
  };

  const handleBuyNow = () => {
    setActiveModal('buy');
  };

  const closeModals = () => {
    setActiveModal(null);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">{bot.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Video Section */}
          <div className="p-6 border-b">
            <div className="relative w-full bg-gray-900 rounded-lg" style={{ paddingBottom: '56.25%' }}>
              {bot.videoUrl && (
                <iframe
                  width="100%"
                  height="100%"
                  src={bot.videoUrl}
                  title={`${bot.name} Demo Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Description</h3>
            <p className="text-gray-600 leading-relaxed">{bot.description}</p>
          </div>

          {/* Key Features */}
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Features</h3>
            <ul className="list-disc ml-5 text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-gray-800">${bot.price}</div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={handleScheduleMeeting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-semibold transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Meeting
              </button>
              <button 
                onClick={handleBuyNow}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Meeting Modal */}
      <ScheduleMeetingModal 
        isOpen={activeModal === 'schedule'}
        onClose={closeModals}
        bot={bot}
        mode="schedule"
      />

      {/* Buy Now Modal */}
      <ScheduleMeetingModal 
        isOpen={activeModal === 'buy'}
        onClose={closeModals}
        bot={bot}
        mode="buy"
      />
    </>
  );
};


const HorizontalBotCatalog = () => {
  const [selectedBot, setSelectedBot] = useState(null);

  const categories = [
    {
      name: "Skills & Recruitment",
      bots: [
        {
          id: 101,
          name: "Skills Evaluator AI",
          description: "Automates skill assessments with instant results, tracking performance through detailed interviews and analysis.",
          price: 299,
          image: hr,
          videoUrl: "https://www.youtube.com/embed/sample_skills_evaluator",
          integrations: ['Google Sheet', 'Email']
        },
        {
          id: 102,
          name: "Interview Insights AI",
          description: "Conducts automated interviews, analyzes responses, and generates comprehensive reports for HR decision-making.",
          price: 349,
          image: hr,
          videoUrl: "https://www.youtube.com/embed/sample_interview_insights",
          integrations: ['Airtable', 'Email', 'SMS']
        },
        {
          id: 103,
          name: "HR Scheduler AI",
          description: "Streamlines interview scheduling, sends reminders, and keeps candidate information organized.",
          price: 279,
          image: hr,
          videoUrl: "https://www.youtube.com/embed/sample_hr_scheduler",
          integrations: ['Google Calendar', 'Airtable', 'Email', 'SMS']
        }
      ]
    },
    {
      name: "Customer Service",
      bots: [
        {
          id: 201,
          name: "Smart Receptionist AI",
          description: "Seamlessly handles inquiries, books appointments, and provides personalized follow-ups across communication channels.",
          price: 329,
          image: healthcare,
          videoUrl: "https://www.youtube.com/embed/sample_smart_receptionist",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        }
      ]
    },
    {
      name: "Real Estate",
      bots: [
        {
          id: 301,
          name: "Property Finder AI",
          description: "Simplifies property search with tailored recommendations, efficient appointment scheduling, and preference filtering.",
          price: 399,
          image: realestate,
          videoUrl: "https://www.youtube.com/embed/sample_property_finder",
          integrations: ['Google Calendar', 'CRM (Airtable)', 'Email', 'SMS']
        },
        {
          id: 302,
          name: "Realty Scheduler AI",
          description: "Manages real estate appointments with precision, ensuring efficient communication and user detail tracking.",
          price: 359,
          image: realestate2,
          videoUrl: "https://www.youtube.com/embed/sample_realty_scheduler",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        }
      ]
    },
    {
      name: "Automotive",
      bots: [
        {
          id: 401,
          name: "CarLead Qualifier AI",
          description: "Automates lead qualification, schedules appointments, and provides intelligent support for car sales processes.",
          price: 299,
          image: Buycar,
          videoUrl: "https://www.youtube.com/embed/sample_car_lead_qualifier",
          integrations: ['Email', 'SMS', 'Google Calendar', 'Call Forwarding', 'CRM/Google Sheet']
        },
        {
          id: 402,
          name: "CarSales Recommender AI",
          description: "Matches customers with ideal vehicles, manages appointments, and streamlines the car sales inquiry process.",
          price: 329,
          image: sellcar,
          videoUrl: "https://www.youtube.com/embed/sample_car_sales_recommender",
          integrations: ['Google Calendar', 'Real-Time Access', 'Email', 'SMS', 'CRM/Google Sheet']
        }
      ]
    },
    {
      name: "Specialized Services",
      bots: [
        {
          id: 501,
          name: "SolarSync Scheduler AI",
          description: "Efficiently manages solar site visit bookings, provides product information, and ensures smooth follow-ups.",
          price: 299,
          image: solar,
          videoUrl: "https://www.youtube.com/embed/sample_solar_scheduler",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        },
        {
          id: 502,
          name: "PlaySchool Scheduler AI",
          description: "Simplifies appointment scheduling for playschools with efficient communication and parent-friendly interfaces.",
          price: 249,
          image: playschoool,
          videoUrl: "https://www.youtube.com/embed/sample_playschool_scheduler",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        },
        {
          id: 503,
          name: "Hospital Scheduler AI",
          description: "Streamlines hospital appointment booking with timely follow-ups and efficient patient communication.",
          price: 379,
          image: healthcare,
          videoUrl: "https://www.youtube.com/embed/sample_hospital_scheduler",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        },
        {
          id: 504,
          name: "Education Scheduler AI",
          description: "Manages demo class scheduling and student engagement with seamless communication tools.",
          price: 269,
          image: english,
          videoUrl: "https://www.youtube.com/embed/sample_education_scheduler",
          integrations: ['Google Calendar', 'Google Sheet', 'Email', 'SMS']
        }
      ]
    },
    // Keep existing categories for full compatibility
    // ...categories.filter(category => !['Skills & Recruitment', 'Customer Service', 'Real Estate', 'Automotive', 'Specialized Services'].includes(category.name))
  ];

  // Rest of the component remains the same as in the previous implementation
  // (scroll function, render method, etc.)

  const scroll = (direction, categoryName) => {
    const container = document.getElementById(`scroll-${categoryName}`);
    const scrollAmount = 800;
    if (container) {
      const scrollPosition = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <HeroBanner/>
      <div className="bg-gray-50 p-8">
        {categories.map((category) => (
          <div key={category.name} className="max-w-7xl mx-auto mb-16">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
            </div>

            <div className="relative">
              {/* Scroll Left Button */}
              <button 
                onClick={() => scroll('left', category.name)}
                className="absolute -left-9 md:-left-14 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Horizontal Scrolling Container */}
              <div 
                id={`scroll-${category.name}`}
                className="flex overflow-x-auto gap-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.bots.map((bot) => (
                  <div 
                    key={bot.id} 
                    className="flex-none w-80 md:w-[22rem] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Bot Image */}
                    <div className="relative">
                      <img 
                        src={bot.image} 
                        alt={bot.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    {/* Bot Info */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{bot.name}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {bot.description}
                      </p>

                      {/* Integrations */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Integrations</p>
                        <div className="flex flex-wrap gap-2">
                          {bot.integrations.map((integration, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs flex items-center"
                            >
                              <Globe className="w-3 h-3 mr-1" />
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xl font-bold text-gray-900">${bot.price}</span>
                        <div className="flex gap-2">
                          <button 
                            className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                            onClick={() => setSelectedBot(bot)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Details
                          </button>
                          <button 
                            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            onClick={() => setSelectedBot(bot)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Right Button */}
              <button 
                onClick={() => scroll('right', category.name)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        ))}

        {/* Purchase Modal */}
        <BotPurchaseModal 
          isOpen={!!selectedBot}
          onClose={() => setSelectedBot(null)}
          bot={selectedBot}
        />
      </div>
    </>
  );
};


export default HorizontalBotCatalog;
