'use client';

import React from 'react';
import LocalStorage from './LocalStorage';

export default function useLocalStorage<T>(key: string | null | undefined) {
    const update = React.useCallback((value: T) => LocalStorage.set(key, value), [key]);
    const remove = React.useCallback(() => LocalStorage.remove(key), [key]);
    const value = React.useMemo(() => LocalStorage.get<T>(key), [key, update, remove]);
    return { value, update, remove };
}
