'use client';

import React from 'react';
import LocalStorage from './LocalStorage';

export default function useLocalStorage<T>(key: string | null | undefined) {
    const [value, setValue] = React.useState<T | null | undefined>();

    React.useEffect(() => {
        const value = LocalStorage.get<T>(key);
        setValue(value);
    }, [key]);

    const update = React.useCallback(
        (value: T) => {
            LocalStorage.set(key, value);
            setValue(value);
        },
        [key],
    );

    const remove = React.useCallback(() => {
        LocalStorage.remove(key);
        setValue(undefined);
    }, [key]);

    return { value, update, remove };
}
