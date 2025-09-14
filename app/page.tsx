import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle, 
  Play, 
  ChevronDown, 
  Send,
  Star,
  ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { DashboardSection } from '@/components/DashboardSection'
import { MobileTabs } from '@/components/MobileTabs'
import { HowItWorks } from '@/components/HowItWorks'
import { MissionSection } from '@/components/MissionSection'
import { BlogSection } from '@/components/BlogSection'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DashboardSection />
      <MobileTabs />
      <HowItWorks />
      <MissionSection />
      <BlogSection />
      <FAQ />
      <Footer />
    </main>
  )
}
