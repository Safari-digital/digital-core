import React from 'react';

// TODO: Add an option to get value from an element.

/**
 * useClipboard hook
 * Add a value to the clipboard.
 * @returns A tuple containing copied value and a copy function.
 *
 * @example
 * ```tsx
 * const [copied, copy] = useClipboard();
 *
 * <button onClick={() => copy('Hello, World!')}>Copy</button>
 * {copied && <p>Copied: {copied}</p>}
 * ```
 */
export default function useClipboard() {
    const [state, setState] = React.useState<string | undefined>();

    const copy = React.useCallback(async (str: string) => {
        if (!navigator) return;

        try {
            await navigator.clipboard.writeText(str);
            setState(str);
        } catch (error) {
            setState(undefined);
        }
    }, []);

    return [state, copy] as const;
}
