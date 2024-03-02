import cloudinary from 'cloudinary';

export const uploadFileToCloudinary = async (
    file: File
): Promise<cloudinary.UploadApiResponse> => {
    const b64 = Buffer.from(await file.arrayBuffer()).toString('base64');
    let dataURI = 'data:' + file.type + ';base64,' + b64;
    return cloudinary.v2.uploader.upload(dataURI, {
        resource_type: 'auto',
        overwrite: false,
    });
};
