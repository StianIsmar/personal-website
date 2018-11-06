import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, updateInfo, loadColor } from '../actions/index.js'
import styled from 'styled-components'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import StickyHeaderComp from './StickyHeader';
import BoxCon from './BoxCon';
import store from '../reducers/todos.js'



//https://coolors.co/931621-28464b-326771-2c8c99-42d9c8

const Wrapper = styled.div`
    position:absolute;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size:2em;
  width:100%;
  height:200%;
  background-color:lightskyblue;
  text-align: center;
  overflow-y: scroll;

`

const AllColumnsStyle = styled.div`
  overflow: auto;
  padding-top: 6%;
height:800%;

`

const FirstRow = styled.div`
background-color:#28464B;
width: 100%;
height:30px;
`
const ColumnOne = styled.div`
background-color:#2C8C99 ;
width:20%;
height: 400%;
text-align: center;


`
const ColumnTwo = styled.div`
background-color:#28464B ;
width:60%;
height: 400%;
text-align: center;




`
const ColumnThree = styled.div`
background-color: #931621;
width:20%;
height: 400%;
text-align: center;

`
const ColumnStyle1 = styled.div`
background-color: red;
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
      <Wrapper>
        <StickyHeaderComp />
        <AllColumnsStyle>
          <Grid columns={12}>
            <Grid.Row >
              <ColumnOne>
                <Grid.Column >
                  <div style={{ fontSize: 20 }}>Count: {this.props.count} </div>
                  <button onClick={this.props.onIncrementClick} style={{ fontSize: 20 }}> increment</button>
                </Grid.Column>
              </ColumnOne>

              <ColumnTwo>
                <Grid.Column>
                  <button onClick={this.props.onDecrementClick} style={{ fontSize: 20 }}> decrement</button>
                </Grid.Column>
              </ColumnTwo>

              <ColumnThree>
                <Grid.Column>
                  <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                      <input ref="input" />
                      <button type="submit">
                        Add Todoo
                    </button>
                    </form>
                    {this.props.info}
                    <BoxCon store={store} />
                  </div>
                </Grid.Column>
              </ColumnThree>
            </Grid.Row>
          </Grid>
        </AllColumnsStyle>
      </Wrapper >




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

