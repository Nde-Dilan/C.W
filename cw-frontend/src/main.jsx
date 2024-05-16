import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from '../components/Post.jsx'
import SearchBar from '../components/SearchBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <SearchBar/>
    <Post />
    </>
  </React.StrictMode>,
)
