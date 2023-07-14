import React from 'react';
import { createRoot } from 'react-dom';

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h1', {}, props.animal),
    React.createElement('h1', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Adopt Me!!'),
    React.createElement(Pet, {
      animal: 'Dog',
      name: 'Luna',
      breed: 'havanese',
    }),
    React.createElement(Pet, {
      animal: 'Parrot',
      name: 'totha',
      breed: 'green',
    }),
    React.createElement(Pet, {
      animal: 'Cat',
      name: 'kitty',
      breed: 'whiter',
    })
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
