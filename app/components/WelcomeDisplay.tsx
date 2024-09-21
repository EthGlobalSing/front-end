import { Button, Link } from '@nextui-org/react';
import { dmSerifText } from '../shared/fonts';
import WebApp from '@twa-dev/sdk';

interface WelcomeDisplayProps {
    title: string;
}

export function WelcomeDisplay({ title }: WelcomeDisplayProps) {
    return (<div className='w-3/4 flex flex-col gap-12'>
        <h1 className={`${dmSerifText.className} text-lightGreen text-3xl `}>{title}</h1>
        <Link href='showSetup' className='w-full' onClick={() => { WebApp.HapticFeedback.impactOccurred('heavy'); }}><Button className='bg-lightGreen text-darkGreen font-bold w-full'>Start</Button></Link>
    </div>);
}