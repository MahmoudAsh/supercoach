import Image from 'next/image'
import Link from 'next/link'

export function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div 
        className="container relative overflow-hidden p-16"
        style={{
          clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/goude.png"
            alt="Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        
        {/* Diagonal Light Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent transform -skew-y-2"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent transform skew-y-1"></div>
        </div>

        <div className="relative z-10 py-16">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left space-y-8">
              {/* Tagline */}
              <div className="space-y-2">
                <h2 className="text-2xl md:text-base lg:text-4xl font-light text-black italic leading-tight">
                  EMPOWERING COACHES,
                </h2>
                <h2 className="text-2xl md:text-base lg:text-4xl font-light text-black italic leading-tight">
                  TRANSFORMING LIVES:
                </h2>
              </div>

              {/* Mission Statement */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black italic text-black leading-tight">
                OUR MISSION AT SUPERCOACH
              </h3>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-black font-medium" style={{ lineHeight: '26px' }}>
                  OUR TECHNOLOGY IS READY TO EMPOWER COACHES AND FITNESS FACILITIES TO<br />
                  SCALE THEIR BUSINESS LIKE NEVER BEFORE.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link 
                  href="https://app.supercoach.me/admin/#/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  Get Started for Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
