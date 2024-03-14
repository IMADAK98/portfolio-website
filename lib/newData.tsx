import { useTranslations } from 'next-intl';

const useIntroMessages = () => {
    const t = useTranslations();

    return {
        hello: t('Intro.hello'),
        title: t('Intro.title'),
        passion:t('Intro.passion'),
        build: t('Intro.build'),
        focus: t('Intro.focus')
        // Add more messages as needed
    };
};

export default useIntroMessages;
