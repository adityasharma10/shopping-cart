import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import{render} from '@testing-library/react'
import PostData from '../components/Form/PostData'

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

  it("renders heading correctly", ()=>{
    const{getByTestId}=render(<PostData/>)
    expect(getByTestId('heading')).toHaveTextContent('Add New Image')
  })

  it("renders title correctly",()=>{
    const{getByTestId}=render(<PostData/>)
    expect(getByTestId('title')).toHaveTextContent('')
  })
  
  it("renders image correctly",()=>{
    const{getByTestId}=renderWithRedux(<PostData/>)
    expect(getByTestId('image')).toHaveTextContent('')
  })

  it("renders button correctly",()=>{
    const{getByTestId}=render(<PostData/>)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })


  
