export function trimSlashes(str: string) {
    return str.replace(new RegExp('^/|/$', 'g'), '');
}
