import dateFormat from "./datetime";
import { APP_ENV, LANG_DIRECTION } from './constants';

/**
 * Helper class, having functions for the application.
 * @param {*} date 
 * @returns 
 */

/**
 * format date
 * @param {*} date 
 * @returns 
 */
const format = (date) => {
    if (!date)
        return '-';
    const newDate = new Date(date);
    return dateFormat(newDate, "fullDate");
}

export const isProduction = () => process?.env?.NODE_ENV === 'production';

/**
 * Construct url
 * @param {*} relativeUrl 
 * @returns 
 */
export const createURL = (relativeUrl) => `${APP_ENV.APP_PROTOCOL}://${APP_ENV.APP_HOST}${!!APP_ENV.APP_PORT ? `:${APP_ENV.APP_PORT}`:''}/${relativeUrl}`;

export default format;

/**
 * function returns language direction
 * @param {*} locale 
 * @returns 
 */
export const getLanguageDirection = locale => {
    if (!locale)
        return LANG_DIRECTION.LTR;

    const localeItems = locale.split("-");
    const localLanguage = localeItems[0];
    if (!localLanguage)
        return LANG_DIRECTION.LTR;

    const rltLanguages = process.env.RTL_LANGUAGE_CODES || 'ar,ku,ur,fa,he';
    const rtlLanguagesItems = rltLanguages.split(",");
    if (rtlLanguagesItems.includes(localLanguage))
        return LANG_DIRECTION.RTL;
    return LANG_DIRECTION.LTR;
}

/**
 * retrieve message from the props
 * @param {*} props 
 * @returns 
 */
export const getMessageContent = (props) =>{
    try{
        return props?.__NEXT_DATA__?.props?.pageProps?.messages?.content;
    }
    catch(e) {
        console.log("@getMessageContent : An error has occured on processing data.", JSON.stringify(e))
        return {}
    }
}

/**
 * handle the formating of the page name
 * @param {*} pageName 
 * @returns 
 */
export const formatPageName = (pageName) => !pageName?pageName : pageName.replace("/", "_");

/**
 * get the page name of the request
 * @param {*} props 
 * @returns 
 */
export const getPageName = (props) =>{
    try{
        const pageName = props?.__NEXT_DATA__?.page;
        return formatPageName(pageName);
    }
    catch(e) {
        console.log("@getPageName : An error has occured on processing data.", JSON.stringify(e))
        return "_";
    }
}
