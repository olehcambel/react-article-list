import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import articles from '../fixtures';
import ArticleList from './ArticleList';
import UserForm from './UserForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  render() {
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <div>
        <UserForm />
        <Select
          onChange={this.changeSelected}
          value={this.state.selection}
          options={options}
          // multi
        />
        <ArticleList articles={articles} defaultOpenId={articles[0].id} />
      </div>
    );
  }

  changeSelected(selection) {
    this.setState({ selection });
  }
}

export default App;
