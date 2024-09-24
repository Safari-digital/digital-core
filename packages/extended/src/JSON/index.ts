import { safeParse } from './JSON';

export { safeParse };

Object.assign(JSON, {
    safeParse,
});

declare global {
    interface JSON {
        /**
         * Safely parses a JSON string.
         */
        safeParse<T>(str: string, callBack?: (str: string, err: Error) => void): T | null;
    }
}
