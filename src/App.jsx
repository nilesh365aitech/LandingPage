import React, { useState } from 'react';
import { ShoppingCart, Eye, ChevronLeft, ChevronRight, X, Calendar, Play } from 'lucide-react';
import HeroBanner from "./components/banner";
import healthcare from "./assets/3.png"
import english from "./assets/5.png"
import playschoool from "./assets/4.png"
import legal from "./assets/6.png"
import realestate from "./assets/2.png"
import Buycar from "./assets/13.png"
import sellcar from "./assets/7.png"
import hotel from "./assets/8.png"
import restaurant from "./assets/9.png"
import retail from "./assets/10.png"
import fitness from "./assets/14.png"
import hr from "./assets/11.png"
import solar from "./assets/12.png"
import realestate2 from "./assets/realestate2.png"
import axios from 'axios';


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
  "Healthcare": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info",
    "Provide general info"
  ],
  "Play School": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info",
    "Provide general info"
  ],
  "English Examiner": [
    "Conduct interview",
    "Analyze the skills",
    "Send results to the user"
  ],
  "Legal": [
    "Client Intake & Lead Qualification",
    "Appointment Scheduling",
    "Answering FAQs",
    "Status Updates"
  ],
  "Real Estate 1": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info",
    "Filter preferred properties"
  ],
  "Real Estate 2": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info"
  ],
  "Buy a Car": [
    "Lead Qualification and Data Collection",
    "Scheduling Appointments",
    "Quoting and Pre-Evaluation",
    "Frequently Asked Questions",
    "Direct users to a human agent for complex or specific issues",
    "Follow-Up"
  ],
  "Sell a Car": [
    "Inquiry Handling",
    "Scheduling and Appointments",
    "Provide real-time availability",
    "Recommend cars based on customer preferences",
    "Lead Collection",
    "Follow-Up"
  ],
  "Hotel": [
    "Booking and Reservation Management",
    "Check-In and Check-Out Assistance",
    "General Inquiry Handling",
    "Event and Conference Management",
    "Services and amenities",
    "Personalized Recommendations",
    "Real-Time Notifications"
  ],
  "Restaurant": [
    "Reservation Management",
    "Order Taking and Pick-Up Scheduling",
    "Menu Assistance",
    "Event Bookings",
    "Customer Support and FAQs",
    "Real-Time Updates",
    "Follow-Up"
  ],
  "Fitness": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info",
    "Call forwarding"
  ],
  "Retail": [
    "Answering FAQs",
    "Product Information",
    "Account Management",
    "Order Tracking",
    "Order Assistance",
    "Product Suggestions",
    "Returns & Refund Assistance"
  ],
  "Solar": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info",
    "Provide product info"
  ],
  "HR Interview Scheduling and Conducting": [
    "Check availability",
    "Book appointment",
    "Send follow-up email",
    "Send follow-up SMS",
    "Extract user info"
  ],
  "HR Interview Conduct": [
    "Conduct interview",
    "Analytics of interview",
    "Send to HR/User"
  ]
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
  // State for modal
  const [selectedBot, setSelectedBot] = useState(null);

  // Sample data
  const categories = [
    {
      name: "Healthcare",
      bots: [
        {
          id: 1,
          name: "Healthcare",
          description: "Check availability, book appointments, send follow-up emails, and extract user information.",
          price: 299,
          image: healthcare,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_1"
        }
      ]
    },
    {
      name: "Education",
      bots: [
        {
          id: 2,
          name: "English Examiner",
          description: "Conduct interviews, analyze skills, send results, and follow up with users.",
          price: 199,
          image: english,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_2"
        },
        {
          id: 3,
          name: "Play School",
          description: "Simplifies managing preschool interactions by handling appointment bookings, follow-ups via email and SMS, user information collection.",
          price: 249,
          image: playschoool,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_3"
        },
        
      ]
    },
    {
      name: "Legal",
      bots: [
        {
          id: 4,
          name: "Legal",
          description: "Handle client intake, schedule appointments, update status, and manage FAQs.",
          price: 349,
          image: legal,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_4"
        }
      ]
    },
    {
      name: "Real Estate",
      bots: [
        {
          id: 5,
          name: "Real Estate 1",
          description: "Check availability, book appointments, filter preferred properties in realtime, and send follow-up SMS.",
          price: 399,
          image: realestate,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_5"
        },
        {
          id: 6,
          name: "Real Estate 2",
          description: "Check availability, book appointments and send follow-up SMS.",
          price: 359,
          image: realestate2,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_6"
        }
      ]
    },
    {
      name: "Car Dealers",
      bots: [
        {
          id: 7,
          name: "Buy a car",
          description: "Qualify leads, schedule appointments, recommend cars, and assist with inquiries.",
          price: 299,
          image: Buycar,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_7"
        },
        {
          id: 8,
          name: "Sell a car",
          description: "Qualify leads, schedule appointments, recommend cars, and assist with inquiries to sell a car.",
          price: 329,
          image: sellcar,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_8"
        }
      ]
    },
    {
      name: "Hospitality",
      bots: [
        {
          id: 9,
          name: "Hotel",
          description: "Booking and Reservation Management, Check-In and Check-Out Assistance, General Inquiry Handling, Event and Conference Management, Services and Amenities, Personalized Recommendations, Real-Time Notifications.",
          price: 399,
          image: hotel,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_9"
        },
        {
          id: 10,
          name: "Restaurant",
          description: "Reservation Management, Order Taking and Pick-Up Scheduling, Menu Assistance, Event Bookings, Customer Support and FAQs, Real-Time Updates, Follow-Up.",
          price: 249,
          image: restaurant,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_10"
        }
      ]
    },
    {
      name: "Fitness",
      bots: [
        {
          id: 11,
          name: "Fitness",
          description: "Check availability, book appointments, send follow-up emails or SMS, extract user info, and enable call forwarding.",
          price: 349,
          image: fitness,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_11"
        }
      ]
    },
    {
      name: "Retail",
      bots: [
        {
          id: 12,
          name: "Retail",
          description: "Answering FAQs, providing product information, account management, order tracking, order assistance, product suggestions, and support for returns and refunds.",
          price: 199,
          image: retail,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_12"
        }
      ]
    },
    {
      name: "Solar",
      bots: [
        {
          id: 13,
          name: "Solar",
          description: "Check availability, book appointments, send follow-up emails or SMS, extract user info, and provide detailed product information.",
          price: 299,
          image: solar,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_13"
        }
      ]
    },
    {
      name: "HR",
      bots: [
        {
          id: 14,
          name: "HR Interview Scheduling and Conducting",
          description: "Check availability, book appointments, send follow-up emails or SMS, and extract user info.",
          price: 269,
          image: hr,  // Replace with actual image path
          videoUrl: "https://www.youtube.com/embed/sample_video_14"
        }
      ]
    }
  ];
  
  

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
  {/* <Navbar/> */}
    <HeroBanner/>
    <div className="min-h-screen bg-gray-50 p-8">
      {/* <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        AI Voice Bots Marketplace
      </h1> */}

      {categories.map((category) => (
        <div key={category.name} className="mb-16 md:ml-auto -ml-4">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 px-4">
            {category.name}
          </h2>

          <div className="relative">
            {/* Scroll Left Button */}
            <button 
              onClick={() => scroll('left', category.name)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Horizontal Scrolling Container */}
            <div 
              id={`scroll-${category.name}`}
              className="flex overflow-x-auto gap-6 px-12 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {category.bots.map((bot) => (
                <div 
                  key={bot.id} 
                  className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <img 
                    src={bot.image} 
                    alt={bot.name}
                    className="w-full h-40 object-cover"
                  />
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {bot.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
                      {bot.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gray-800">
                        ${bot.price}
                      </span>
                      <div className="flex gap-2">
                        <button 
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="View details"
                          onClick={() => setSelectedBot(bot)}
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
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