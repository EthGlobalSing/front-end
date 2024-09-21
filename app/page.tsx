'use client'

import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

import { NavBar } from './components/NavBar';
import { WelcomeDisplay } from './components/WelcomeDisplay';

import { useRouter } from 'next/navigation';
import { dmSerifText } from './shared/fonts';
import { getAuthToken } from '@dynamic-labs/sdk-react-core';

import {
  DynamicWidget,
  useTelegramLogin,
  useDynamicContext,
} from "./lib/dynamic";

interface UserData {
  username?: string;
}

export default function Home() {
  const { sdkHasLoaded, user } = useDynamicContext();
  const { telegramSignIn } = useTelegramLogin();

  const [userData, setUserData] = useState<UserData | null>(null)
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  useEffect(() => {
    // DYNAMIC WALLET CREATION / CONNECTION
    if (!sdkHasLoaded) return;

    const signIn = async () => {
      if (!user) {
        await telegramSignIn({ forceCreateUser: true });
      }
      setLoading(false);
    };

    signIn();
  }, [sdkHasLoaded]);

  return (
    <>
      <main className={`bg-darkGreen p-10 min-h-screen flex justify-center`}>
        {userData ? <WelcomeDisplay title={userData?.username ? `Hey ${userData?.username} 👋, welcome to MiniSafe.` : `Welcome to MiniSafe.`} />
          :
          <>
            <h2 className={`${dmSerifText.className} text-lightGreen text-3xl `}>An error occurred. Please try again.</h2>
            <DynamicWidget />
          </>
        }
      </main>
    </>
  );
}