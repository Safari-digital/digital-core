export function joinTruthy<T>(array: Array<T>, separator: string = '') {
    return array.filter(Boolean).join(separator);
}
