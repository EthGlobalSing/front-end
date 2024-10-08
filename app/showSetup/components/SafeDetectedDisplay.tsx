import { dmSerifText } from "@/app/shared/fonts";
import { Safe } from "@/app/types/safe";
import { Button, Link } from "@nextui-org/react";
import { CircleCheck } from 'lucide-react';
import Image from "next/image";

interface SafeDetectedDisplayProps {
    safeWallets: Safe[];
}

export function SafeDetectedDisplay({ safeWallets }: SafeDetectedDisplayProps) {
    return (<div className='w-3/4 min-h-screen flex flex-col gap-12 m-auto'>
        <div className="flex flex-col gap-6">
            <CircleCheck className="text-lightGreen" size={36} strokeWidth={1.5} />
            <h1 className={`${dmSerifText.className} text-lightGreen text-3xl`}>{safeWallets.length} Safe Wallet found.</h1>
        </div>
        <div>
            {safeWallets.map((safe) => {
                return <div className="w-full p-8 bg-darkGreen border-4 border-lightGreen rounded-xl flex gap-4 items-center">
                    <Image src={'/chains/ethereum.svg'} alt="" width={20} height={20} />
                    <p className="text-xl text-lightGreen">Ethereum</p>
                </div>;
            })}
        </div>
        <div className="flex gap-2">
            <Link href='showSetup' className='w-full'><Button className='bg-lightGreen text-darkGreen font-bold w-full'>Ok</Button></Link>
        </div>
    </div>);
}