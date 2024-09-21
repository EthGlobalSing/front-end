'use client'

import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

import { NavBar } from './components/NavBar';
import { WelcomeDisplay } from './components/WelcomeDisplay';

import { useRouter } from 'next/navigation';


interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const router = useRouter();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }

    if (true) // first use
      router.push('/showAssets');

  }, [])

  return (
    <>
      {isUserRegistered && <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <main className={`bg-darkGreen p-10 min-h-screen flex justify-center`}>
        <WelcomeDisplay title={userData?.username ? `Hey ${userData?.username} 👋, welcome to MiniSafe.` : `Welcome to MiniSafe.`} />
      </main>
    </>
  );
}