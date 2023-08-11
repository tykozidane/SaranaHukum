import { Hero, List } from "@/components/find-lawyer";

export default function findLawyer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      <Hero/>
      <List/>
    </main>
  )
}
