import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import StickyHeaderComp from './StickyHeader';
import BoxCon from './BoxCon';
import { addText } from '../actions/SearchFormActions'



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
display: inline-block;


`
const SearchStyle = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
align-items: center;
`

class Frontpage extends Component {

  handleSubmit(event) {
    let input = this.refs.input;
    event.preventDefault();
    if (!input.value.trim()) {
      return
    }
    this.props.addInput(input.value);
    console.log(input.value, "FRONTOAGE INPUT VALUE")
    input.value = ''
  }
  render() {

    return (
      <Wrapper>
        <StickyHeaderComp />
        <AllColumnsStyle>
          <Grid columns={12}>
            <Grid.Row >
              <ColumnOne style={{
                backgroundColor: `${this.props.color}`
              }}>
                <Grid.Column >
                </Grid.Column>
              </ColumnOne>

              <ColumnTwo>
                <Grid.Column>
                  Hardcoded
                  {this.props.text}

                </Grid.Column>
              </ColumnTwo>

              <ColumnThree>
                <Grid.Column>
                  <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                      <input ref="input" />
                      <SearchStyle type="submit">
                        Add Todoo
                      </SearchStyle>
                    </form>
                    {this.props.info}
                    <BoxCon />
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
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    text: state.text
  }
}

function mapDispatchToProps(dispatch) {
  return {

    addInput: (text) => {
      dispatch(addText(text))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
//Map from state to props:
