import LocalStorage from './LocalStorage';

export default function useLocalStorage<T>(key: string | null | undefined) {
    const update = (value: T) => LocalStorage.set(key, value);
    const remove = () => LocalStorage.remove(key);
    const value = LocalStorage.get<T>(key);
    return { value, update, remove };
}
