import { Title } from "@/components/ui/title";
import { RegisterForm } from "./components/form";

export default function RegisterPage(){
    return (
        <section className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-2 lg:py-16">
            <div>
                <Title className="text-center">
                    Register
                </Title>

                <RegisterForm />
            </div>
        </section>
    )
}