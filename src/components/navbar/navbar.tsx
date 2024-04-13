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
import UploadModal from '@/app/home/(components)/UploadModal';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Add } from '@mui/icons-material';

const menuItems = [
    { label: 'Posts', href: '/' },
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
];

export default function Navbar() {
    const pathName = usePathname();

    const [open, setOpen] = React.useState(false);

    const handleUploadModalOpen = (): void => {
        setOpen(true)
    }

    const handleUploadModalClose = (): void => setOpen(false)


    return (
        <NavbarContainer isBordered className={'text-white bg-neutral-950/40'}>
            <UploadModal close={handleUploadModalClose} open={open} />
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
                    <Link color="foreground" href="/">
                        Posts
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                        <Tooltip title='Upload new post'>
                            <IconButton onClick={handleUploadModalOpen} aria-label="upload">
                                <Add />
                            </IconButton>
                        </Tooltip>
                        <UserButton
                            userProfileMode={'navigation'}
                            userProfileUrl="/account"
                        />
                    </Box>
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
