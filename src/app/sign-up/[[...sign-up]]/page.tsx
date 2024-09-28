import { SignUp } from '@clerk/nextjs';
import { LoginPage } from '@/components/LoginPage';

export default function Page() {
    return (
        <LoginPage>
            <SignUp />
        </LoginPage>
    );
}
