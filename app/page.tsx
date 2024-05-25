import { Hero } from "@/components/custom/Hero";
import { ServicesWeOffer } from "@/components/custom/ServiceWeOffer";
// import { ShowCase } from "@/components/custom/ShowCase";
import { Statics } from "@/components/custom/Stratics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Hero />
      {/* <x /> */}
      <ServicesWeOffer />
      <Statics />
    </main>
  );
}
