import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Banner() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-head-title mb-8 leading-tight">
            <span className="text-black">Make Your Clients Train</span>
            <br />
            <span className="text-supercoach-green">With You Forever!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Start Building Your Dream Business Today.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
            We are rolling out our service early for a limited number of trainers
          </p>
          
          <Link
            href="https://app.supercoach.me/admin/#/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-supercoach-green text-supercoach-dark font-bold text-xl px-16 py-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 group"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Our technology has assisted thousands of customers in achieving their fitness goals, and now it is at your disposal to help you scale.
          </p>
        </div>
      </div>
    </section>
  )
}
