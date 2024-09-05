import { trimSlashes } from './extensions';

export {};

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
    }
}
