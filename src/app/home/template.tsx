import Navbar from '../../components/Navbar/navbar';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
