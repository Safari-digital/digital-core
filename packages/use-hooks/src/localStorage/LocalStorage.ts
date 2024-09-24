import { safeParse } from '@safari-node/extended';

export default class LocalStorage {
    public static get<T>(key: string | null | undefined): T | null {
        const value = localStorage.getItem(key ?? '');
        return safeParse(value ?? '');
    }

    public static set(key: string | null | undefined, value: any): void {
        if (key) localStorage.setItem(key, JSON.stringify(value));
    }

    public static remove(...keys: Array<string | null | undefined>): void {
        for (const key of keys) localStorage.removeItem(key ?? '');
    }

    public static clear(): void {
        localStorage.clear();
    }
}
