import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeBanner } from "./components/banner";
import { NewArrivals } from "./components/new-arrivals";
import { TopSelling } from "./components/top-selling";
import { Categories } from "./components/categories";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <main className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-16">
        <NewArrivals />

        <hr className="my-16" />

        <TopSelling />

        <Categories />
      </main>
    </main>
  );
}
