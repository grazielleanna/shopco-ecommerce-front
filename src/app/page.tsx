import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeBanner } from "./components/banner";
import { NewArrivals } from "./components/new-arrivals";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <main className="w-full max-w-screen-xl mx-auto py-16">
        <NewArrivals />
      </main>
    </main>
  );
}
