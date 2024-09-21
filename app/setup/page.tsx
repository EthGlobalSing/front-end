'use client';

import { Safe } from "../types/safe";
import { NoSafeErrorDisplay } from "./components/NoSafeErrorDisplay";
import { useEffect, useState } from 'react';
import { SafeDetectedDisplay } from "./components/SafeDetectedDisplay";
import { CircularProgress } from "@nextui-org/react";

interface SetupProps {

}

export default function Setup({ }: SetupProps) {


    const [loading, setLoading] = useState(false);
    //const [safeWallets, setSafeWallets] = useState<Safe[]>();

    // [{
    //     chainId: 1,
    //     amountInUSD: 938,
    //     thresholds: 3,
    //     addresses: ["0xZJdhb28dJ", "0xZJdhb28dJ"]
    // }]



    return (<main className={`p-10 bg-darkGreen min-h-screen`}>
        {loading ? <CircularProgress className='m-auto' color="default" aria-label="Loading..." /> :
            //<SafeDetectedDisplay safeWallets={safeWallets} />
            <></>
        }
        {/* <NoSafeErrorDisplay /> */}
    </main>);
}