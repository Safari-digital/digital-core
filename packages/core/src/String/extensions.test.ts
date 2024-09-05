import { expect, test } from 'vitest';
import { trimSlashes } from './extensions';

test('String: trimSlashes(), Should remove surrounding slashes', () => {
    [
        { test: 'https://example.com/', result: 'https://example.com' },
        { test: '/auth/login', result: 'auth/login' },
        { test: '/auth/login/', result: 'auth/login' },
        { test: 'auth/login', result: 'auth/login' },
    ].forEach(({ test, result }) => expect(trimSlashes(test)).toBe(result));
});
