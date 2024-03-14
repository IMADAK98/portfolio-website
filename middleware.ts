import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from "./i18nconfig";
export default createMiddleware({

    locales,
    defaultLocale,

    // localeDetection:false,
    localePrefix:"always"
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en)/:path*']
};
