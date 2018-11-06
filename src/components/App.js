import React from 'react'
import Frontpage from './frontpage.js'
import styled from 'styled-components'
import configureStore from '../store/configureStore'


const store = configureStore()



const StyledDiv = styled.div`

  background-color: blue;
  font-family: 'Roboto', sans-serif;
  color: white;

`
const App = () => (
  <div>
    <Frontpage store={store} />
  </div>

)

export default App

//<Frontpage store={store} />
