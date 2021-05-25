import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import ListData from '../components/Form/listData'

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

it("renders heading correctly", () => {
  const { getByTestId } = render(<ListData />)
  expect(getByTestId('heading')).toHaveTextContent("Gallerio-Art")
})

it("renders button correctly", () => {
  const { getByTestId } = render(<ListData />)
  expect(getByTestId('button')).toHaveTextContent("Submit")
})




