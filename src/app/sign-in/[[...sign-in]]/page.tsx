import { SignIn } from '@clerk/nextjs';
import { LoginPage } from '@/components/LoginPage';

export default function Page() {
    return (
        <LoginPage>
            <SignIn />
        </LoginPage>
    );
}
