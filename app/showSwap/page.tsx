'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";

export default function ShowSwap() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="bg-darkGreen">
            {
                <>
                    <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="MiniSafe" />
                    <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                        <div className="flex flex-col gap-6">
                            <h1 className={`${dmSerifText.className} text-lightGreen text-3xl`}>$839.29</h1>
                        </div>
                        <div className="w-full">
                            <div className="w-full p-6 bg-lightGreen rounded-xl flex gap-4 items-center justify-between">
                                <div className="flex gap-4 items-center">
                                    <Image src={'/chains/ethereum.svg'} alt="Ethereum" width={20} height={20} />
                                    <p className="text-xl text-darkGreen">Ethereum</p>
                                </div>
                                <p className={`text-lg text-darkGreen ${dmSerifText.className}`}>$38.38</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </main>
    );
}
