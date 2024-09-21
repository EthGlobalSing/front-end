'use client';

import { Safe } from "../types/safe";
import { NoSafeErrorDisplay } from "./components/NoSafeErrorDisplay";
import { useEffect, useState } from 'react';
import { SafeDetectedDisplay } from "./components/SafeDetectedDisplay";
import { CircularProgress } from "@nextui-org/react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { NavBar } from "../components/NavBar";
import eruda from 'eruda'


interface SetupProps {

}

export default function ShowSetup({ }: SetupProps) {
    const [loading, setLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            eruda.init()
        }
    }, [])
    //const [safeWallets, setSafeWallets] = useState<Safe[]>();

    // [{
    //     chainId: 1,
    //     amountInUSD: 938,
    //     thresholds: 3,
    //     addresses: ["0xZJdhb28dJ", "0xZJdhb28dJ"]
    // }]

    return (<>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="Setup" />
        <main className={`p-10 bg-darkGreen min-h-screen`}>
            {loading ? <CircularProgress className='m-auto' color="default" aria-label="Loading..." /> :
                // <SafeDetectedDisplay safeWallets={safeWallets} />
                <DynamicWidget />
            }
            {/* <NoSafeErrorDisplay /> */}
        </main>
    </>);
}