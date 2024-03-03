import sdk from 'node-appwrite';

export type PostAttributes = {
    userId: string;
    description: string;
    imagePublicIds: string[];
    placeId?: string | null;
};

export type Post = sdk.Models.Document & PostAttributes;
