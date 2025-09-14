'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t, isRTL } = useLanguage()

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/workout', label: t('nav.workout') },
    { href: '#', label: t('nav.nutrition') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: 'https://blog.supercoach.me/', label: t('nav.blog'), external: true },
  ]

  const languages = [
    { code: 'en', label: 'English', hreflang: 'en' },
    { code: 'ar', label: 'اللغة العربية', hreflang: 'ar' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen)

  return (
    <>
      <nav className="fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md border-b border-gray-200" style={{ width: '95%', backgroundColor: '#e5e7e8', top: '20px', clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 15px), 0 15px)' }}>
        <div className="mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <div className="flex items-center justify-between" style={{ height: '70px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/supercoach-dark-logo.svg"
              alt="SuperCoach"
              width={90}
              height={20}
              className="h-5 w-auto"
            />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4" style={{ marginRight: '30px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`text-gray-700 hover:text-white hover:bg-gray-800 transition-all duration-200 font-medium px-3 py-2 rounded-md ${
                    pathname === link.href ? 'text-black font-black' : ''
                  }`}
                  style={{ fontSize: '0.84em' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2 py-1 text-gray-700 hover:text-supercoach-green transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'En' : 'ع'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

            </div>

            {/* CTA Button */}
            <Link
              href="https://app.supercoach.me/admin/#/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-supercoach-green text-supercoach-dark font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              style={{ fontSize: '0.84em' }}
            >
              {t('common.getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-supercoach-green transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`text-gray-700 hover:text-supercoach-green transition-colors duration-200 ${
                    pathname === link.href ? 'text-supercoach-green font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500">{t('nav.language')}:</span>
                  <select 
                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-white"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'ar')}
                  >
                    <option value="en">English</option>
                    <option value="ar">اللغة العربية</option>
                  </select>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href="https://app.supercoach.me/admin/#/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    
    {/* Language Dropdown - Outside nav to avoid clipping */}
    {isLanguageOpen && (
      <div className="fixed w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50" style={{ top: '140px', right: '5%' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => {
              setLanguage(lang.code as 'en' | 'ar')
              setIsLanguageOpen(false)
            }}
          >
            {lang.label}
          </button>
        ))}
      </div>
    )}
    </>
  )
}
