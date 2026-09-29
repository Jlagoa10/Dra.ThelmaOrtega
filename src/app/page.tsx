import { Contact } from '@/sections/Contact'
import { Environment } from '@/sections/Environment'
import { Faq } from '@/sections/Faq'
import { Gallery } from '@/sections/Gallery'
import { Hero } from '@/sections/Hero'
import { HowItWorks } from '@/sections/HowItWorks'
import { Location } from '@/sections/Location'
import { PostOp } from '@/sections/PostOp'
import { Profile } from '@/sections/Profile'
import { Specialties } from '@/sections/Specialties'
import { Support } from '@/sections/Support'

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Specialties />
      <PostOp />
      <Support />
      <HowItWorks />
      <Gallery />
      <Environment />
      <Faq />
      <Location />
      <Contact />
    </>
  )
}
