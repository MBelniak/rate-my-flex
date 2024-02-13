'use client';

import React from 'react';
import { UserButton } from '@clerk/nextjs';
import {
  Navbar as NavbarContainer,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/app/[components]/Logo';

const menuItems = [
  { label: 'Posts', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <NavbarContainer disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarItem isActive={pathName === '/'}>
          <Link color="foreground" href="/">
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color={pathName === item.href ? 'warning' : 'foreground'}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
}