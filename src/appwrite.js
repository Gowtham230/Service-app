import { Client, Account,Databases} from 'appwrite';
export const client = new Client();
const DB_ID = '670f30740013420adf6a';
const COLLECTION_ID = '670f307f0003af7e4850';
const TASK_COLLECTION = "6711f8f0002300483dc0";
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('670f2fab0012320fbc75');
export const account = new Account(client);
export {ID,Permission} from 'appwrite';
export const databases = new Databases(client);
export {DB_ID, COLLECTION_ID,TASK_COLLECTION};
