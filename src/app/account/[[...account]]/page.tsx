'use client';
import { UserProfile } from '@clerk/nextjs';
import { AboutYouPage } from '@/app/account/[[...account]]/(components)/AboutYou/AboutYouPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';
import { palette } from '../../../../palette';

const UserProfilePage = () => (
    <section className={'p-4'}>
        <UserProfile
            path="/account"
            routing="path"
            appearance={{
                elements: {
                    rootBox: {
                        maxWidth: '1000px',
                        marginInline: 'auto',
                    },
                    profileSectionPrimaryButton: {
                        '&:hover': {
                            backgroundColor: palette.secondaryBackgroundHover,
                        },
                    },
                },
            }}
        >
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
