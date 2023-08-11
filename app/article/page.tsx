import {Hero, List} from "@/components/article"

export default function article() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
        <Hero/>
        <List/>
      </main>
    )
  }