import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, updateInfo } from '../actions/index.js'
import styled from 'styled-components'
import Logo from '../../public/filmguru-logo.jpg'

const StyledDiv = styled.div`
  align-self: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size:80;
`
const Styledh1 = styled.h1`
  align-self: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size:120;
`


class Frontpage extends Component {
  handleSubmit(event) {
    let input = this.refs.input;
    event.preventDefault();
    if (!input.value.trim()) {
      return
    }
    this.props.addInput(input.value);
    input.value = ''
  }
  render() {

    return (
      <StyledDiv>
        <StyledDiv > This is the counter: </StyledDiv>
        <StyledDiv style={{ fontSize: 40 }}>Count: {this.props.count} </StyledDiv>
        <button onClick={this.props.onIncrementClick} style={{ fontSize: 40, margin: 20 }}> increment</button>
        <p></p>
        <button onClick={this.props.onDecrementClick} style={{ fontSize: 40, margin: 20 }}> decrement</button>
        <p></p>
        <button onClick={this.props.onClickShow} style={{ fontSize: 40, margin: 20 }}> Show info</button>
        <p></p>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input ref="input" />
            <button type="submit">
              Add Todo
                    </button>
          </form>
        </div>
        <StyledDiv style={{ color: 'white', fontSize: 40 }}>User input:</StyledDiv>
        <p></p>
        <StyledDiv style={{ color: 'white', fontSize: 12 }}>{this.props.info} </StyledDiv>
      </StyledDiv >
    )
  }
}
//Map from state to props:
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.count,
    info: state.info
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      dispatch(incrementCounter())
    },
    onDecrementClick: () => {
      dispatch(decrementCounter())
    },
    addInput: (text) => {
      dispatch(updateInfo(text))
    }

  }
}

// Connect the function to the state: Creating a new comp and
// wrapping ours in it
export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);

