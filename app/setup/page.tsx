'use client';

import { Safe } from "../types/safe";
import { ErrorDisplay } from "./components/ErrorDisplay";
import { useEffect, useState } from 'react';
import { SafeDetectedDisplay } from "./components/SafeDetectedDisplay";

export default function Setup() {
    const [safeWallets, setSafeWallets] = useState<Safe[]>([{
        chainId: 1,
        amountInUSD: 938,
        thresholds: 3,
        addresses: ["0xZJdhb28dJ", "0xZJdhb28dJ"]
    }]);

    return (<main className={`p-10 bg-darkGreen flex justify-center`}>
        {safeWallets ? <SafeDetectedDisplay safeWallets={safeWallets} /> : <ErrorDisplay />}</main>);
}