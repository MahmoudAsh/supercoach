import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <>
      {/* Banner Section */}
      <section className="py-24 bg-gray-100 text-black relative">
        <div 
          style={{ 
            maxWidth: '90%', 
            margin: '0 auto', 
            width: '90%',
            clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
          }}
        >
          <div className="text-center">
            {/* Try it for free */}
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-8">
              TRY IT FOR FREE
            </p>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-black">
              JOIN US WHENEVER YOU'RE READY,<br />
              WHEREVER YOU ARE!
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Start Building Your Dream Business Today. We are rolling out our service early for a limited number of trainers
            </p>
            
            {/* CTA Button */}
            <Link
              href="https://app.supercoach.me/admin/#/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-supercoach-green text-white font-bold text-lg px-12 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-supercoach-dark text-white py-16 relative">
        <div 
          style={{ 
            maxWidth: '90%', 
            margin: '0 auto', 
            width: '90%',
            clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
          }}
        >
          <div className="text-center">
            {/* SuperCoach Logo and Branding */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                {/* S Logo */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
                  <span className="text-supercoach-dark font-black text-3xl">S</span>
                </div>
                {/* SuperCoach Text */}
                <h3 className="text-3xl font-bold text-white">SUPERCOACH</h3>
              </div>
              
              {/* Tagline */}
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Our technology has assisted thousands of customers in achieving their fitness goals, and now it is at your disposal to help you scale.
              </p>
            </div>

            {/* Copyright */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Copyright © 2024 SuperCoach. All Rights Reserved.
              </p>
              
              {/* Legal Links */}
              <div className="flex items-center justify-center space-x-4">
                <Link 
                  href="/privacypolicy" 
                  className="text-gray-400 hover:text-supercoach-green transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400">•</span>
                <Link 
                  href="/termsandconditions" 
                  className="text-gray-400 hover:text-supercoach-green transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
