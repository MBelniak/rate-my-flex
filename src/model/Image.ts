import sdk from 'node-appwrite';

export type Image = sdk.Models.Document & {
    postId: string;
    publicId: string;
};
