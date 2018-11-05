import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, updateInfo } from '../actions/index.js'
import styled from 'styled-components'
import Logo from '../filmguru-logo2.jpg'
import Horsepic from '../horse.jpg'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Segment, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const StyledDiv = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size:20;
`
const FlexWrapper = styled.div`
flex:1;
width: 80%;
`
const HDiv = styled.div`
    padding: 0;
    margin: 0;
    background-color: #4553F4;
    font-size: 2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
`
const ImgStyle = styled.img`
max-width:100%;
max-height:100%;
float: left;
`
const SearchFields = styled.div`
height:100%;
width:72%;
`
class Layout extends Component {
    render() {
        return (
            <div>
                <p>The following grid has vertical gutters.</p>

                <Grid columns={2} padded='vertically'>
                    <Grid.Column>
                        Hello
                        </Grid.Column>
                    <Grid.Column>
                        hello
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}


export default Layout;