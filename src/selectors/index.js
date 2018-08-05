import { createSelector } from 'reselect';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filters;

export const filtratedArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (articles, filters) => {
    const {
      selection,
      period: { from, to }
    } = filters;

    const fromParse = Date.parse(String(from));
    const toParse = Date.parse(String(to));

    return articles.filter(article => {
      const published = Date.parse(String(article.date));

      return (
        (!selection.length || selection.includes(article.id)) &&
        (!fromParse ||
          !toParse ||
          (fromParse < published && published < toParse))
      );
    });
  }
);

// export function filtrateArticles({ articles, filters }) {
//   const {
//     selection,
//     period: { from, to }
//   } = filters;

//   const fromParse = Date.parse(String(from));
//   const toParse = Date.parse(String(to));

//   return articles.filter(article => {
//     const published = Date.parse(String(article.date));

//     return (
//       (!selection.length || selection.includes(article.id)) &&
//       (!fromParse || !toParse || (fromParse < published && published < toParse))
//     );
//   });
// }
