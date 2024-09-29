export function trimSlashes(str: string) {
    return str.replace(new RegExp('^/|/$', 'g'), '');
}

export function isEmpty(str: string) {
    return !str || str.length === 0;
}
