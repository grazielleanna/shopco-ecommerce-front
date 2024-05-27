'use client'

import { Title } from "@/components/ui/title";
import { LoadAndGetUser } from "../profile/data";
import { TailSpin } from "react-loader-spinner";

export function AccountWelcome() {
    const { data, isLoading, error } = LoadAndGetUser();

    return (
        <div>
            {isLoading ? (
                <TailSpin
                    visible={true}
                    height="40"
                    width="40"
                    color="#000"
                    radius="9"
                    ariaLabel="three-dots-loading"
                />
            ) : error ? (
                <p>Error to get data.</p>
            ) : (
                <>
                    <Title className="capitalize !text-2xl">
                        Welcome, <span className="underline underline-offset-2">{data?.name}</span>
                    </Title>
                </>
            )}

        </div>
    )
}