import React, {Component} from "react";
import { render } from "react-dom";
import articles from '../fixtures'
import Article from './Article'
import ArticleList from './ArticleList'

const App = () => (
  <div>
    <h1>Hello</h1>
    <ArticleList articles={articles} />
  </div>
);

export default App