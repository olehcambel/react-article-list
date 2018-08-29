import React from 'react';

const Context = React.createContext();

export const LocalizationProvider = props => {
  debugger;
  return (
    <Context.Provider
      value={{
        // locale: props.locale,
        translate: props.translate
        // currentLang: props.currentLang
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
          debugger;
          return (
            <Component
              {...props}
              // locale={context.locale}
              translate={context.translate}
            />
          );
        }}
      </Context.Consumer>
    );
  };
}
