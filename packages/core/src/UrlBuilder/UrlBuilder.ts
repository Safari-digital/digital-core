import { trimSlashes } from '../String/extensions';

export default class UrlBuilder {
    /**
     * Builds a formatted url.
     */
    public static build = (...paths: Array<string>) => paths.map(str => trimSlashes(str)).join('/');

    /**
     * Builds a formatted query string.
     */
    public static buildParams = (obj?: Record<string, any> | null): string =>
        Object.keys(obj ?? [])
            .filter(x => obj?.[x] || (!obj?.[x] && (typeof obj?.[x] === 'number' || typeof obj?.[x] === 'boolean')))
            .map(key => `${key}=${obj?.[key]}`)
            .join('&');

    /**
     * Builds a formatted url with query string.
     */
    public static buildQuery = (url: string, query?: Record<string, any> | null): string => {
        const queryString = UrlBuilder.buildParams(query ?? {});
        return queryString.length > 0 ? `${url}?${queryString}` : url;
    };
}
