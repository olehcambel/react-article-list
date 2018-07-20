import React, { Component } from 'react';

import Article from './Article';

export default function ArticleList({ articles }) {
  const articleElements = articles.slice().map(article => (
    <li key={article.id}>
      <Article article={article} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
}
