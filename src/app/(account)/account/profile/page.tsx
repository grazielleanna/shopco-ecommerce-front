import { Section } from "@/components/ui/section";
import { AccountProfileForm } from "./form";

export default function AccountProfilePage() {

    return (
        <Section>
            <p className="text-black/60 text-xl mb-4">Check your registration details below.</p>

           <AccountProfileForm />
        </Section>
    )
}