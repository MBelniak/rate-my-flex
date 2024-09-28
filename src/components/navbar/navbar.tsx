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
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { label: 'Posts', href: '/' },
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
];

export default function Navbar() {
    const pathName = usePathname();

    return (
        <NavbarContainer isBordered className={'text-white bg-neutral-950/40'}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">RATEMYFLEX</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">RATEMYFLEX</p>
                </NavbarBrand>
                <NavbarItem isActive={pathName === '/'}>
                    <Link color="foreground" href="/" className="p-2">
                        Posts
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <UserButton
                        userProfileMode={'navigation'}
                        userProfileUrl="/account"
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.href}
                            // size="lg"
                            color={
                                pathName === item.href
                                    ? 'warning'
                                    : 'foreground'
                            }
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NavbarContainer>
    );
}
