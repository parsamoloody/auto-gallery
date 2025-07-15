import Hero from "@/components/Hero";
import Category from '@/components/Category'
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="main-h-screen">
      <Hero />
      <Category />
      <Services />
    </div>
  )
}
