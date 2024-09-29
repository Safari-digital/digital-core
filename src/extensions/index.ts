import { joinTruthy } from './Array';
import { safeParse } from './JSON';
import { trimSlashes } from './String';

Object.assign(Array.prototype, {
    joinTruthy(this: Array<any>, separator: string = '') {
        return joinTruthy(this);
    },
});

declare global {
    interface Array<T> {
        /**
         * Joins only truthy values from the array.
         */
        joinTruthy(separator?: string): string;
    }
}

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

Object.assign(String.prototype, {
    trimSlashes(this: string) {
        return trimSlashes(this);
    },
});

declare global {
    interface String {
        /**
         * Removes slashes from the beginning and end of the string.
         */
        trimSlashes(): string;

        /**
         * Checks if the string is empty.
         */
        isEmpty(): boolean;
    }
}