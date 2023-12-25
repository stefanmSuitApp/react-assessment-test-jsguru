import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Pages
          pages: { home: 'Home', imageLibrary: 'Image library' },
          layout: { footerText: '@2023, Made with ❤ by' },
          errors: { somethingWentWrong: 'Something went wrong!' },
          author: 'Stefan Matić',
          unknownAuthor: 'Unknown author',
          showMore: 'Show more',
          showLess: 'Show less',
          showPost: 'Show the post',
          showComments: 'Show comments',
          hideComments: 'Hide comments',
          noComments: 'There are no comments on this post',
          searchByAuthor: 'Search by an author',
          noPosts: 'There are no posts from author named like that',
          noPhotos: 'There are no photos',
          itemsPerPage: 'Items per page',
          imagesPerPage: 'Images per page',
          pageLowercase: 'page',
          pageUppercase: 'Page',
          of: 'of',
        },
      },
    },
  });

export default i18n;
