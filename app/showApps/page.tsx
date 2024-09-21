'use client';

import { Safe } from "../types/safe";
import { useEffect, useState } from 'react';
import { CircularProgress, Divider } from "@nextui-org/react";
import Image from "next/image";
import { dmSerifText } from "../shared/fonts";
import { NavBar } from "../components/NavBar";

export default function ShowApps() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="bg-lightGreen">
            {
                <>
                    <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} windowName="MiniSafe" />
                    <div className='p-10 min-h-screen flex flex-col gap-12 items-center'>
                        <div className="w-full">
                            <div className="w-full p-6 flex gap-4 items-center justify-between">
                                <div className="flex gap-4 items-center">
                                    <Image src={'/chains/ethereum.svg'} alt="Ethereum" width={20} height={20} />
                                    <p className="text-xl text-darkGreen">Create an ENS</p>
                                </div>

                            </div>
                            <Divider />
                            <div className="w-full p-6 flex gap-4 items-center justify-between">
                                <div className="flex gap-4 items-center">
                                    <Image src={'/chains/ethereum.svg'} alt="Ethereum" width={20} height={20} />
                                    <p className="text-xl text-darkGreen"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </main>
    );
}
