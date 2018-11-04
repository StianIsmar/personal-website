import React from 'react'
import Frontpage from './frontpage.js'
import store from '../reducers/todos.js'
import styled from 'styled-components'
import Grid from 'react-css-grid'


const StyledDiv = styled.div`

  background-color: blue;
  font-family: 'Roboto', sans-serif;
  color: white;

`
const App = () => (
  <StyledDiv >
    <Grid
      width={50}
      gap={0}
      style={{ backgroundColor: '#233237' }}>
      <div style={{ backgroundColor: '#984B43' }}></div>
      <div style={{ backgroundColor: '#233237', height: 2000 }}><Frontpage store={store} /></div>
      <div style={{ backgroundColor: '#984B43' }}>Column</div>
      <div style={{ backgroundColor: '#233237' }}>Column</div>
    </Grid>
  </StyledDiv >
)

export default App