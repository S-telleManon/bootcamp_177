import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WithJsx from './WithJSX';
import IloveJSx from './ilove';
import Sum from './sum';
import Name from './Object';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercise3';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
export default user


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <WithJsx></WithJsx>
   <IloveJSx/>
   <Sum/>
   <Name/>
   <UserFavoriteAnimals favAnimals={user.favAnimals} />
   <Exercise/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
