import React, {Component} from "react";
import articles from '../fixtures'
import ArticleList from './ArticleList'

const App = () => (
  <div>
    <h1>Hello</h1>
    <ArticleList articles={articles} />
  </div>
);

export default App