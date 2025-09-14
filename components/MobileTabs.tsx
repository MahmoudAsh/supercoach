'use client'

import { useState } from 'react'
import Image from 'next/image'

export function MobileTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Training Programs",
      description: "A clear training experience for both beginners & athletes",
      video: "/videos/New_Workout.mp4"
    },
    {
      title: "Nutrition\nMeals", 
      description: "Hyper-personalized & convenient meal plans for all",
      video: "/videos/New_Nutrition.mp4"
    },
    {
      title: "In-App\nMessaging",
      description: "Intuitive in-app messaging for communication & support", 
      video: "/videos/New_Chat.mp4"
    },
    {
      title: "Progress Tracking",
      description: "Powerful training, nutrition, & body measurements logging",
      video: "/videos/Progress.mp4"
    },
    {
      title: "Daily Task Reminders",
      description: "All-In-One Holistic Coaching Tools for Lasting Lifestyle",
      video: "/videos/Daily_Reminders.mp4"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-supercoach-dark">Make Your Clients Train</span>
            <br />
            <span className="text-supercoach-green">With You Forever!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Provide each trainee with a world-class personalized experience through the unrivaled SuperCoach trainee app
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Horizontal Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div 
              className="flex bg-gray-100 rounded-none overflow-hidden"
              style={{
                clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
              }}
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-8 py-6 font-bold text-sm uppercase transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-supercoach-green text-supercoach-dark'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{
                    clipPath: index === 0 
                      ? 'polygon(28px 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
                      : index === tabs.length - 1
                      ? 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)'
                      : 'none'
                  }}
                >
                  <div className="text-left">
                    <div className="font-bold text-lg leading-tight mb-2 uppercase">
                      {tab.title.includes('\n') 
                        ? tab.title.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < tab.title.split('\n').length - 1 && <br />}
                            </span>
                          ))
                        : tab.title.split(' ').length > 2 
                        ? (
                            <>
                              {tab.title.split(' ').slice(0, Math.ceil(tab.title.split(' ').length / 2)).join(' ')}
                              <br />
                              {tab.title.split(' ').slice(Math.ceil(tab.title.split(' ').length / 2)).join(' ')}
                            </>
                          )
                        : tab.title
                      }
                    </div>
                    <div className="text-sm font-normal leading-tight normal-case">
                      {tab.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full">
            <video
              key={activeTab}
              src={tabs[activeTab].video}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full h-auto"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
