import React from "react";
import "./index.css";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export const HeaderName = () => {
  return (
  <div className="headera">
<img src="https://thinakkural.lk/img/logo.d74919e5.jpg" alt="" /></div>
  );
};
export const NavName= () => {
  return (
    <nav>

             <a class="mc-6" href="#">
            Politics 
            </a> 
              <a class="mc-6" href="#">
            Economy 
            </a> 
             <a class="mc-6" href="#">
            Lifestyle 
            </a> 
              <a class="mc-7" href="#">
            Astrology 
            </a> 
             <a class="mc-8" href="#">
            Medicine 
            </a> 
             <Link to="/sports-news">
            Sports
            </Link>
 
    </nav>
  );
};

