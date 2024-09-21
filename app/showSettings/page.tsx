'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { Button, CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";

export default function ShowSettings() {
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

    return (
        <main className="bg-darkGreen">

            <>
                <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="Settings" />
                <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                    <Button className="mb-8 bg-darkRed text-lightGreen" disabled>Revoke all access</Button>
                </div>
            </>

        </main>
    );
}
