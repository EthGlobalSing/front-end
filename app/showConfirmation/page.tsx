'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { Button, CircularProgress, Link } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";
import WebApp from "@twa-dev/sdk";
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import eruda from "eruda";

export default function ShowConfirmation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function SignMessage() {
    //     const { primaryWallet } = useDynamicContext();

    //     const signMessage = async () => {
    //         if (!primaryWallet) return;

    //         const signature = await primaryWallet.signMessage('example');

    //         console.log('signature', signature);
    //     };
    // }

    const [transaction, setTransaction] = useState({
        amountInUSD: 938.92,
        direction: 'out',
        chainId: 1,
        to: {
            username: 'pybast',
            address: "0xZJdhb28dJ"
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        eruda.init();
    }, []);

    return (
        <main className="bg-lightGreen">
            <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                <div className="w-full flex flex-col gap-4 justify-between">
                    <div>
                        <h1 className={`${dmSerifText.className} text-2xl`}>Confirm transaction?</h1>
                        <h2 className={`${dmSerifText.className} ${transaction.direction === 'out' ? 'text-lightRed' : 'text-mediumGreen'} text-3xl`}>{transaction.direction === 'out' ? '-' : '+'}${transaction.amountInUSD}</h2>
                    </div>
                    <div className="flex gap-2">
                        <h4>To</h4>
                        <div className="w-1/2 rounded-xl flex gap-4 items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <p className="text-md">@{transaction.to.username} on</p>
                                <Image src={'/chains/ethereum.svg'} alt="Ethereum" width={10} height={10} />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link className='w-full w-1/2' onClick={() => {
                            WebApp.HapticFeedback.impactOccurred('heavy');
                            // SignMessage();
                        }}><Button className='bg-darkGreen text-lightGreen font-bold w-full'>Send</Button></Link>
                        <Link href='/' className="text-darkGreen w-1/2 flex justify-center" onClick={() => { WebApp.HapticFeedback.impactOccurred('light'); }}>Back</Link>
                    </div>
                </div>
            </div>
        </main >
    );
}
