'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Play, ArrowRight } from 'lucide-react'

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const features = [
    {
      icon: '/images/program.png',
      title: 'Program Builder',
      description: 'Create custom workout programs in minutes'
    },
    {
      icon: '/images/progress.png',
      title: 'Progress Tracking',
      description: 'Monitor client progress with detailed analytics'
    },
    {
      icon: '/images/client.png',
      title: 'Client Management',
      description: 'Manage all your clients in one place'
    },
    {
      icon: '/images/payments.png',
      title: 'Payments',
      description: 'Handle billing and payments seamlessly'
    }
  ]

  const benefits = [
    'No Credit Card Required.',
    'Unlimited Number of Clients.',
    'Available on iOS, Android, and Web.'
  ]

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-supercoach-dark via-gray-900 to-supercoach-dark">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/supercoach-cover-poster-00001.jpg"
        >
          <source src="/videos/supercoach-cover-transcode.mp4" type="video/mp4" />
          <source src="/videos/supercoach-cover-transcode.webm" type="video/webm" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Custom Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#00000080',
            backgroundImage: 'linear-gradient(0deg, #a7f84040, #0000)',
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-between min-h-screen">
        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col justify-center" style={{ marginTop: '10%' }}>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl mb-8 leading-tight">
              <span className="text-white font-normal italic">BUILT FOR COACHES</span>
              <br />
              <span className="text-white font-normal italic">WHO WANT TO GROW,</span>
              <br />
              <span className="text-white font-bold italic">NOT STRUGGLE.</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Grow your personal training business by turning hours of fitness
              <br />
              program creation and client management into minutes
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <Link
                href="https://app.supercoach.me/admin/#/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-supercoach-green text-supercoach-dark font-bold text-base px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started for Free
              </Link>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <Image
                    src="/images/check-icon-white.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    className="flex-shrink-0"
                  />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Icons - Bottom of Hero */}
        <div style={{ marginBottom: '30px', width: '100%' }}>
          <div className="w-full flex flex-wrap justify-between gap-4">
            {features.map((feature, index) => (
              <Link
                key={index}
                href="https://app.supercoach.me/admin/#/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group bg-white bg-opacity-10 px-8 py-4 rounded-lg hover:bg-opacity-20 transition-all duration-300 cursor-pointer flex-1 min-w-0"
              >
                <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-white whitespace-nowrap uppercase">
                  {feature.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
