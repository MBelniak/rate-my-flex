import { SignIn } from '@clerk/nextjs';
import { LoginCard } from '@/components/LoginCard';

export default function Page() {
    return (
        <LoginCard>
            <SignIn />
        </LoginCard>
    );
}
