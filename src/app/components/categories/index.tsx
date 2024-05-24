import { Title } from "@/components/ui/title";
import Image from "next/image";

export function Categories() {
    return (
        <section className="my-16 bg-[#F0F0F0] rounded-[20px] lg:rounded-[40px] py-6 lg:py-14">
            <Title className="text-center max-w-[246px] lg:max-w-max mx-auto">
                Browse by dress style
            </Title>

            <div className="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 max-w-[1111px] mx-auto gap-y-6 lg:gap-6 mt-8">
                <div className="relative rounded-[20px] h-72 bg-right w-full bg-no-repeat bg-white">
                    <p className="absolute font-semibold text-4xl top-6 left-8">Casual</p>
                    <Image className="rounded-[20px] w-full h-full object-cover" src="/images/home/casual.jpg" alt="" width={407} height={289} />
                </div>
                <div className="relative rounded-[20px] h-72  bg-white bg-right w-full bg-no-repeat col-span-2">
                    <p className="absolute font-semibold text-4xl top-6 left-8">Formal</p>
                    <Image className="rounded-[20px] w-full h-full object-cover" src="/images/home/formal.jpg" alt="" width={684} height={289} />
                </div>
                <div className="relative rounded-[20px] h-72  bg-white bg-right w-full bg-no-repeat col-span-2">
                    <p className="absolute font-semibold text-4xl top-6 left-8">Party</p>
                    <Image className="rounded-[20px] w-full h-full object-cover" src="/images/home/party.jpg" alt="" width={642} height={289} />
                </div>
                <div className="relative rounded-[20px] h-72  bg-white bg-right w-full bg-no-repeat">
                    <p className="absolute font-semibold text-4xl top-6 left-8">Gym</p>
                    <Image className="rounded-[20px] w-full h-full object-cover" src="/images/home/gym.png" alt="" width={359} height={289} />
                </div>
            </div>
        </section>
    )
}