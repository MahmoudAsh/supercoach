'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can I customize fitness & nutrition programs for individual client needs?",
      answer: "Yes, you can! You have the power to tailor any program according to user goals and specific preferences while making all kind of customizations along their journey"
    },
    {
      question: "Can I integrate existing client data into the dashboard?",
      answer: "You definitely can!"
    },
    {
      question: "Is the dashboard suitable for all types of fitness goals?",
      answer: "We do cover a wide spectrum of muscle building and weight loss focused programs whether in a bodyweight, resistance tools or gym machines format. However, there are definitely certain fitness styles that are yet to be covered."
    },
    {
      question: "How can clients access their programs and log their progress?",
      answer: "When you add a client, you send him or her an invitation to download a standalone trainee app through which they gain access to their assigned programs"
    },
    {
      question: "Is the platform compatible with other fitness tools and wearables?",
      answer: "We currently integrate with popular fitness apps like Apple Health and Google fit and are planning to roll out direct integrations with certain brands of smart watches soon!"
    },
    {
      question: "How do I get support if I have a question?",
      answer: "We prioritize providing exceptional support to our valued users. If you have any questions or need assistance, our dedicated support team is here to help."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-supercoach-dark">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 text-left flex items-center justify-between hover:text-supercoach-green transition-colors duration-200"
              >
                <h3 className="text-xl md:text-2xl font-bold text-supercoach-dark pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-supercoach-green transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-supercoach-green text-supercoach-dark font-bold text-xl px-16 py-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Try it for free
          </button>
        </div>
      </div>
    </section>
  )
}
