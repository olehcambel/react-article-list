import React from 'react';

const Context = React.createContext();

export const LocalizationProvider = props => {
  return (
    <Context.Provider
      value={{
        translate: props.translate
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export function localizationConsumer(Component) {
  return function LocalizedComponent(props) {
    return (
      <Context.Consumer>
        {context => {
          return <Component {...props} translate={context.translate} />;
        }}
      </Context.Consumer>
    );
  };
}
