/**
 * Utility class, holds functions being used across the application.
 */

/**
 * Loading env variables
 */
export const APP_ENV = {
    API_ROUTES_ENDPOINT : process.env.API_ROUTES_ENDPOINT,
    APP_PROTOCOL : process.env.APP_PROTOCOL,
    APP_HOST : process.env.APP_HOST,
    APP_PORT : process.env.APP_PORT,
    SHOW_RECORDS_COUNT: process.env.SHOW_RECORDS_COUNT,
}

/**
 * Setting language direction to support arabic as well.
 */
export const LANG_DIRECTION = {
    LTR: 'ltr',
    RTL: 'rtl'
};