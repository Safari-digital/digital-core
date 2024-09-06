import '@safari-node/core';

export default class LocalStorage {
    public static get<T>(key: string | null | undefined): T | null | undefined {
        const value = localStorage.getItem(key ?? '');
        return JSON.safeParse(value ?? '');
    }

    public static set(key: string | null | undefined, value: any): void {
        key && localStorage.setItem(key, JSON.stringify(value));
    }

    public static remove(...keys: Array<string | null | undefined>): void {
        for (const key of keys) localStorage.removeItem(key ?? '');
    }

    public static clear(): void {
        localStorage.clear();
    }
}
