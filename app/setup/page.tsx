'use client';

import { Safe } from "../types/safe";
import { NoSafeErrorDisplay } from "./components/NoSafeErrorDisplay";
import { useEffect, useState } from 'react';
import { SafeDetectedDisplay } from "./components/SafeDetectedDisplay";
import { CircularProgress } from "@nextui-org/react";
import {
    DynamicWidget,
    useTelegramLogin,
    useDynamicContext,
} from "../lib/dynamic";
// import { DynamicWidget, useDynamicContext, useTelegramLogin } from "@dynamic-labs/sdk-react-core";

export default function Setup() {
    const { sdkHasLoaded, user } = useDynamicContext();
    const { telegramSignIn } = useTelegramLogin();

    const [loading, setLoading] = useState(false);
    const [safeWallets, setSafeWallets] = useState<Safe[]>();

    // [{
    //     chainId: 1,
    //     amountInUSD: 938,
    //     thresholds: 3,
    //     addresses: ["0xZJdhb28dJ", "0xZJdhb28dJ"]
    // }]

    useEffect(() => {
        if (!sdkHasLoaded) return;

        const signIn = async () => {
            if (!user) {
                await telegramSignIn({ forceCreateUser: true });
            }
            setLoading(false);
        };

        signIn();
    }, [sdkHasLoaded]);

    return (<main className={`p-10 bg-darkGreen min-h-screen`}>
        {loading ? <CircularProgress className='m-auto' color="default" aria-label="Loading..." /> :
            safeWallets ?
                <SafeDetectedDisplay safeWallets={safeWallets} /> :
                <DynamicWidget />
        }
        {/* <NoSafeErrorDisplay /> */}
    </main>);
}