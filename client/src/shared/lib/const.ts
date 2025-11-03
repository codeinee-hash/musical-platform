export const APP_ROUTES = {
    HOME: '/',
    MUSICS: '/musics',
    ALBUMS: '/albums',
} as const;

export const BASE_API_URL = process.env.API_BASE_URL || 'http://localhost:8000/';
