import { Client, Account,Databases} from 'appwrite';
export const client = new Client();
const DB_ID = '670612af0037fa6f511b';
 const COLLECTION_ID = '6706131e000de3668df8';
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6704da11001b0ae07dec');
export const account = new Account(client);
export {ID} from 'appwrite';
export const databases = new Databases(client);
export {DB_ID, COLLECTION_ID};
