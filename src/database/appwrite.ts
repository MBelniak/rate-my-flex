import sdk from "node-appwrite";

export let client = new sdk.Client();
export let databases: sdk.Databases;

export const initDatabase = async () => {
  if (!process.env.APPWRITE_API_KEY) {
    throw new Error(
      "No APPWRITE_API_KEY env variable found. Cannot initialize database client.",
    );
  }
  if (!process.env.APPWRITE_DB_ID) {
    throw new Error(
      "Cannot find env variable APPWRITE_DB_ID. Database connection failed.",
    );
  }

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65c921945ac4b83d197d")
    .setKey(process.env.APPWRITE_API_KEY)
    .setSelfSigned();

  databases = new sdk.Databases(client);

  if (
    !(await isCollectionsInitialized(databases, process.env.APPWRITE_DB_ID))
  ) {
    await initializeCollections(databases, process.env.APPWRITE_DB_ID);
  }
};

const isCollectionsInitialized = async (
  databases: sdk.Databases,
  databaseId: string,
): Promise<boolean> => {
  try {
    await databases.getCollection(databaseId, "Posts");
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const initializeCollections = async (
  databases: sdk.Databases,
  databaseId: string,
) => {
  const database = await databases.get(databaseId);
  const postsCollection = await databases.createCollection(
    database.$id,
    "Posts",
    "Posts",
  );

  await databases.createStringAttribute(
    database.$id,
    postsCollection.$id,
    "id",
    255,
    true,
  );

  await databases.createStringAttribute(
    database.$id,
    postsCollection.$id,
    "userId",
    255,
    true,
  );

  const imagesCollection = await databases.createCollection(
    database.$id,
    "Images",
    "Images",
  );

  await databases.createStringAttribute(
    database.$id,
    imagesCollection.$id,
    "id",
    255,
    true,
  );

  await databases.createStringAttribute(
    database.$id,
    imagesCollection.$id,
    "publicId",
    255,
    true,
  );

  await databases.createStringAttribute(
    database.$id,
    imagesCollection.$id,
    "postId",
    255,
    true,
  );
};
