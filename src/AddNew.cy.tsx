import React from 'react'
import AddNew from './AddNew'

describe('<AddNew />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddNew />)
  })
})