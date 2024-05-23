import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeBanner } from "./components/banner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
        {/* <Button>
        Shop now
      </Button>
      <Button outlined>
        View all
      </Button> */}
    </main>
  );
}
