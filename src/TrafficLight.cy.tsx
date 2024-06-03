import React from 'react'
import TrafficLight from './TrafficLight'

describe('<TrafficLight />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TrafficLight />)
  })
})