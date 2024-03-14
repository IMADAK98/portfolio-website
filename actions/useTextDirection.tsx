import {isRtlLang} from 'rtl-detect';
import {useLocale} from 'next-intl';
import {Locale} from '@/i18nconfig'

export default function useTextDirection(locale:Locale) {
    const defaultLocale:Locale = useLocale() as "en" | "ar";
    if (!locale) {
        locale  = defaultLocale;
    }
    return isRtlLang(locale) ? 'rtl' : 'ltr';
}