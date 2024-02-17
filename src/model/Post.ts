import sdk from 'node-appwrite';

export type Post = sdk.Models.Document & {
    userId: string;
    description: string;
};
