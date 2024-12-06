import React from 'react';
import healthcare from "./assets/3.png"
import english from "./assets/5.png"
import playschoool from "./assets/4.png"
import legal from "./assets/6.png"
import realestate from "./assets/2.png"
import Buycar from "./assets/13.png"
import sellcar from "./assets/7.png"
import hotel from "./assets/8.png"
import restaurant from "./assets/9.png"
import fitness from "./assets/14.png"
import retail from "./assets/11.png"
import solar from "./assets/12.png"


// Header
const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-center items-center">
      <h1 className="text-2xl font-bold">Voice Bots</h1>
    </div>
  </header>
  
  );
};

// Voice Bot Tile
const VoiceBotTile = ({ name, description, image, href }) => {
  return (
    <a href={href} className="block  bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-48 ">
        <img src={image} alt={name} className="w-full h-full " />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </a>
  );
};



// Voice Bot Section
const VoiceBotSection = () => {
  const voiceBots = [
    {
      category: 'Healthcare',
      bots: [
        {
          name: 'Healthcare',
          description: 'Check availability, book appointments, send follow-up emails, and extract user information.',
          image: healthcare, // Correctly imported image
          href: '#',
        },
        
      ]
    },
    {
      category: 'Education',
      bots: [
        {
          name: 'English Examiner',
          description: 'Conduct interviews, analyze skills, send results, and follow up with users.',
          image: english,
          href: '#'
        },
        {
          name: 'Play School',
          description: 'Simplifies managing preschool interactions by handling appointment bookings, follow-ups via email and SMS, user information collection.',
          image: playschoool,
          href: '#'
        }
      ]
    },
    {
      category: 'Legal',
      bots: [
        {
          name: 'Legal',
          description: 'Handle client intake, schedule appointments, update status, and manage FAQs.',
          image: legal,
          href: '#'
        }
      ]
    },
    {
      category: 'Real Estate',
      bots: [
        {
          name: 'Real Estate 1',
          description: 'Check availability, book appointments, filter preferred properties in realtime, and send follow-up SMS.',
          image: realestate,
          href: '#'
        },
        {
          name: 'Real Estate 2',
          description: 'Check availability, book appointments and send follow-up SMS.',
          image: realestate,
          href: '#'
        }
      ]
    },
    {
      category: 'Car Dealers',
      bots: [
        {
          name: 'Buy a car',
          description: 'Qualify leads, schedule appointments, recommend cars, and assist with inquiries.',
          image: Buycar,
          href: '#'
        },
        {
          name: 'Sell a car',
          description: 'Qualify leads, schedule appointments, recommend cars, and assist with inquiries to sell a car.',
          image: sellcar,
          href: '#'
        }
      ]
    },
    {
      category: 'Hospitality',
      bots: [
        {
          name: 'Hotel',
          description: 'Booking and Reservation Management, Check-In and Check-Out Assistance, General Inquiry Handling, Event and Conference Management, Services and Amenities, Personalized Recommendations, Real-Time Notifications.',
          image: hotel,
          href: '#'
        },
        {
          name: 'Restaurant',
          description: 'Reservation Management, Order Taking and Pick-Up Scheduling, Menu Assistance, Event Bookings, Customer Support and FAQs, Real-Time Updates, Follow-Up.',
          image: restaurant,
          href: '#'
        }
      ]
    },
    {
      category: 'Fitness',
      bots: [
        {
          name: 'Fitness',
          description: 'Check availability, book appointments, send follow-up emails or SMS, extract user info, and enable call forwarding.',
          image: fitness,
          href: '#'
        }
      ]
    },
    {
      category: 'Retail',
      bots: [
        {
          name: 'Retail',
          description: 'Answering FAQs, providing product information, account management, order tracking, order assistance, product suggestions, and support for returns and refunds.',
          image: retail,
          href: '#'
        }
      ]
    },
    {
      category: 'Solar',
      bots: [
        {
          name: 'Solar',
          description: 'Check availability, book appointments, send follow-up emails or SMS, extract user info, and provide detailed product information.',
          image: solar,
          href: '#'
        }
      ]
    },
    {
      category: 'HR',
      bots: [
        {
          name: 'HR Interview Scheduling',
          description: 'Check availability, book appointments, send follow-up emails or SMS, and extract user info.',
          image: '/hr-scheduling.jpg',
          href: '#'
        },
        {
          name: 'HR Interview Conducting',
          description: 'Conduct interviews, analyze interview results, and send updates to HR or users.',
          image: '/hr-conducting.jpg',
          href: '#'
        }
      ]
    }
    
  ];

  return (
    <section className="py-12  md:px-0 px-7">
      <div className="container  mx-auto">
        {/* <h2 className="text-2xl text-center font-bold mb-8">Voice Bots</h2> */}
        {voiceBots.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold my-7 mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {category.bots.map((bot, botIndex) => (
                <VoiceBotTile
                  key={`${index}-${botIndex}`}
                  name={bot.name}
                  description={bot.description}
                  image={bot.image}
                  href={bot.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Voice Bots. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

// App
const App = () => {
  return (
    <div>
      <Header />
      <VoiceBotSection />
      <Footer />
    </div>
  );
};

export default App;
