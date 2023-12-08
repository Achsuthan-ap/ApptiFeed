import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBody from './components/HomeBody';
import { HeaderName, NavName } from './components/Header';
import { FooterName } from './components/Footer';
import { SpecialNews } from './components/SpecialNews';
import NewsDetail from './components/NewsDetail';
import Sports from './components/Sports';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <HeaderName />
          <NavName />
          <main className="col-md-6 ms-sm-auto col-lg-9 px-md-4">
            <Routes>
           
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/" element={<HomeBody />} />
              <Route path="/sports-news" element={<Sports />} />
            </Routes>
            <article>{/* Your article content goes here */}</article>
          </main>
          <aside className="col-md-6 ms-sm-auto col-lg-3">
            <SpecialNews />
          </aside>
        </div>
      </div>
      <FooterName />
    </Router>
  );
}

export default App;
