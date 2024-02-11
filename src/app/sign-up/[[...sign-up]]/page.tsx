import { SignUp } from '@clerk/nextjs';
import '../index.scss';

export default function Page() {
    return (
        <div
            className={
                'flex flex-col gap-10 justify-center items-center min-h-[100svh] bg-background2'
            }
        >
            <div className="flex flex-col items-center gap-2">
                <h1 className="font-sans text-4xl uppercase">Rate my flex</h1>
                <p className="font-sans2 uppercase">Enjoy body</p>
            </div>
            <SignUp />
        </div>
    );
}
