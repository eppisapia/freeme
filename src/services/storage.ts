import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

/** Function to save data in the storage
 * @param key Key name of the data
 * @param value Data
 */
export async function setToken(key: string, value: any): Promise<void> {
    await Storage.set({
        key: key,
        value: JSON.stringify(value)
    });
}

/** Function to get data of the storage
 * @param key Key name of the data
 */
export async function getToken(key: string): Promise<any> {
    const token: any = await Storage.get({ key: key });
    return JSON.parse(token.value);
}

/** Function to remove a key and its data from the storage
 * @param key Key name
 */
export async function removeToken(key: string): Promise<void> {
    await Storage.remove({
        key: key
    });
}