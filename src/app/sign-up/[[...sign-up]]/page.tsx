import { SignUp } from '@clerk/nextjs';
import { LoginCard } from '@/components/LoginCard';

export default function Page() {
    return (
        <LoginCard>
            <SignUp />
        </LoginCard>
    );
}
