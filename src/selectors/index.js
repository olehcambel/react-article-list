import { createSelector } from 'reselect';
import {mapToArr} from '../helpers'


const articlesGetter = state => state.articles.entities
const filtersGetter = state => state.filters;

const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

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

    return mapToArr(articles).filter(article => {
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

export const commentSelectorRepo = () => createSelector(
  commentsGetter,
  idGetter,
  (comments, id) => {
    return comments.get(id);
    // return comments.find(comment => id === comment.id);
  }
);

