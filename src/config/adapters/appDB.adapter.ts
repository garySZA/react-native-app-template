import { AxiosAdapter } from './http';

export const appDBFetcher = new AxiosAdapter({
    baseUrl: 'base_url',
    params: {},
});
