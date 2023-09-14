// Next-I18next.config.mjs

const debug = process.env.NODE_ENV === 'development';

const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
};

export { debug, i18n };
