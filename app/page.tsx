import HeroSection from '@/components/HeroSection'
import WhyUs from '@/components/WhyUs'
import AgeSupport from '@/components/AgeSupport'
import ScheduleTuition from '@/components/ScheduleTuition'
import ParentTestimonials from '@/components/ParentTestimonials'
import Activities from '@/components/Activities'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <AgeSupport />
      <ScheduleTuition />
      <ParentTestimonials />
      <Activities />
      <CTASection />
    </div>
  )
}