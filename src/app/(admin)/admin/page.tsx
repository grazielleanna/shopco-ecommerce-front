import { Input } from "@/components/ui/form/input";
import { Title } from "@/components/ui/title";
import { AdminLoginForm } from "./components/form";

export default function AdminPage() {


    return (
        <section className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-2 lg:py-16">
            <div>
                <Title className="text-center">
                    Administration
                </Title>

                <AdminLoginForm />
            </div>
        </section>
    )
}