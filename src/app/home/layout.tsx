import { ReactNode } from 'react';
import Navbar from '@/components/navbar/navbar';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
