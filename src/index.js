import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

export {default as Navbar} from './components/Navbar'
export {default as Feed} from './components/Feed.js'
export {default as ChannelDetail} from './components/ChannelDetail'
export {default as SearchFeed} from './components/SearchFeed.js'
export {default as VideoDetail} from './components/VideoDetail'
