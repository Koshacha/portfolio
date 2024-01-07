import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/home.json')).default
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/home.json')).default
    }
  ]
};

export const defaultLocale = 'en';

export const {
  t,
  locale,
  locales,
  loading,
  addTranslations,
  loadTranslations,
  translations,
  setRoute,
  setLocale
} = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log('Loading translations...');

    await loading.toPromise();
    console.log('Updated translations', translations.get());
  }
});
