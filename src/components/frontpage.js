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
import AscendImage from './AscendImage.js'
import SagaGif from './SagaGif.js'



//https://coolors.co/931621-28464b-326771-2c8c99-42d9c8

const Wrapper = styled.div`
  overflow: scroll;
  font-family: 'Montserrat', sans-serif;
  font-size:1em;
  background-color:lightskyblue;
  text-align: center;

  opacity:0.8;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`

const AllColumnsStyle = styled.div`
  overflow: auto;
height:800%;
width: 100%;
`

const FirstRow = styled.div`
background-color:black;
width: 100%;
height:30px;
`
const ColumnOne = styled.div`
background-color:black ;
width:20%;
height: 500%;
text-align: center;


`
const ColumnTwo = styled.div`
background-color:#28464B ;
width:65%;
height: 500%;
text-align: center;
`
const ColumnThree = styled.div`
background-color: black;
width:15%;
height: 500%;
text-align: center;
display: inline-block;
padding: 2%;
`
const SearchStyle = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
align-items: center;
`
class Frontpage extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log("FRONTPAGE")
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log("FRONTPAGE")
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200;
    console.log(distanceY)

    if (distanceY > shrinkOn) {
      console.log(distanceY)

      //change to smaller
      //Call action that changes store!
      //this.downscaleHeader()
    } else {
      //change styling from store
      //this.mapDispatchToProps.upscaleHeader()
    }
  }
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
                  <AscendImage />
                  <SagaGif />
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
