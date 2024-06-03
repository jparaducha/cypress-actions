import React from 'react'
import Tile from './Tile'

describe('<Tile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tile />)
  })
})