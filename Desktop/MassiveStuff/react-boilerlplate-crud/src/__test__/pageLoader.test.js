import React from 'react';
import ReactDom from 'react-dom'
import PageLoader from '../Loader/pageLoader';

let container = null;

beforeEach(() =>{
  container = document.createElement("div")
  document.body.appendChild(container);
})

afterEach(() =>{
  unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(<PageLoader/>,div);
})

it("image render without crashing",()=>{
    const img = document.createElement("img");
    ReactDom.render(<PageLoader/>,img);
  })
  
