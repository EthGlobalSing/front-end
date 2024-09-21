'use client'

import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { dmSerifText } from './shared/fonts';
import { NavBar } from './components/NavBar';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  return (
    <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
  );
}