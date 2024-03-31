'use client';
import { UserProfile } from '@clerk/nextjs';
import { AboutYouPage } from '@/app/account/[[...account]]/(components)/AboutYou/AboutYouPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';

const UserProfilePage = () => (
    <section className={'p-4'}>
        <UserProfile path="/account" routing="path">
            <UserProfile.Page
                label="About you"
                labelIcon={<FontAwesomeIcon icon={faDumbbell} />}
                url="about-you"
            >
                <AboutYouPage />
            </UserProfile.Page>
        </UserProfile>
    </section>
);

export default UserProfilePage;
