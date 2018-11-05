import React from 'react'
import Frontpage from './frontpage.js'
import store from '../reducers/todos.js'
import styled from 'styled-components'
import Layout from './Layout'


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
