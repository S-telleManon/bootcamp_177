import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogArticle from './BlogArticle';
import Header from './Header';
import Footer from './Footer';

//Get /api/blogarticles
const articles = [
  {
    id: 1,
    title: "Getting Started with JavaScript via api",
    content: "JavaScript is a versatile language used for web development...",
    author:"Nayar"
  },
  {
    id: 2,
    title: "Understanding CSS Flexbox via api ",
    content: "Flexbox is a layout model that allows responsive elements...",
    author:"Nayar"
  }

];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <input></input>
    <BlogArticle title={articles[0].title} author ={articles[0].author}/>
    <BlogArticle title={articles[1].title} author ={articles[0].author}/>
  {
    articles.map(function(singlearticle){
      return (<BlogArticle title = {singlearticle.title} author={singlearticle.author}></BlogArticle>)
    })
  }
    {
    articles.map(function(singlearticle){
      return (<BlogArticle key = {singlearticle.id} article = {singlearticle}></BlogArticle>)
    })
  }
    
    <Footer author="Abraham" year="2025"/>
    <Footer author="Estelle" year="2026"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
