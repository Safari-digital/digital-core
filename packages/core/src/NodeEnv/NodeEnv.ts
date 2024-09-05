export default class NodeEnv {
    // @ts-expect-error
    public static get = (key: string) => process?.env?.[key] ?? import.meta?.env?.[key];

    public static isDevelopment = () => this.get('NODE_ENV') === 'development';
    public static isProduction = () => this.get('NODE_ENV') === 'production';
    public static isTest = () => this.get('NODE_ENV') === 'test';

    public static validate = (keys: Array<string>) => {
        for (const key of keys) if (!this.get(key)) throw new Error(`Missing mandatory environment variable: ${key}`);
    };
}
