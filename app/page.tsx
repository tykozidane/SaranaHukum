import { Hero, Lawyer, Step } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-malachite-100">
      <Hero/>
      <Step/>
      <Lawyer/>
    </main>
  )
}
