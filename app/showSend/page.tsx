'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { CircularProgress, Input } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";

export default function ShowSend() {
    const [loading, setLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [safeWallets, setSafeWallets] = useState<Safe[]>([{
        chainId: 1,
        amountInUSD: 938,
        thresholds: 3,
        addresses: ["0xZJdhb28dJ", "0xZJdhb28dJ"]
    }]);

    // Simulate loading data
    useEffect(() => {
        const fetchData = async () => {
            // Simulate a fetch delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <main className="bg-darkGreen">
            {loading ? (
                <CircularProgress className='m-auto' color="default" aria-label="Loading..." />
            ) : (
                <>
                    <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="Send" />
                    <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                        <Input />
                    </div>
                </>
            )}
        </main>
    );
}
