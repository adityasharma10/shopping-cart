import React from 'react';
import ReactDom, {unmountComponentAtNode} from 'react-dom'
import App from '../App';

let container = null;

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("render without crashing",()=>{
  container = document.createElement("div");
  ReactDom.render(<App/>, container);
})
