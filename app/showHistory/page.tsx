'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";

export default function ShowHistory() {
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [transactions, setTransactions] = useState([{
        amountInUSD: 938.92,
        direction: 'out',
        chainId: 1,
        to: {
            username: 'pybast',
            address: "0xZJdhb28dJ"
        }
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
                <div className="min-h-screen p-10">
                    <CircularProgress className='m-auto' color="default" aria-label="Loading..." />
                </div>
            ) : (
                <>
                    <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="History" />
                    <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                        <div className="w-full">
                            {transactions.map((tx, index) => (
                                <div key={index} className="w-full p-6 bg-lightGreen rounded-xl flex gap-4 items-center justify-between">
                                    <div className="flex gap-4 items-center">

                                        <p className="text-xl text-darkGreen">{'@' + transactions[0].to.username}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <p className={`text-lg text-${transactions[0].direction === 'out' ? 'mediumRed' : 'darkRed'} ${dmSerifText.className}`}>{transactions[0].direction === 'out' ? '-' : '+'}${transactions[0].amountInUSD}</p>
                                        <Image src={'/chains/ethereum.svg'} alt="Ethereum" width={10} height={10} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
