import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faHome, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { relative } from 'path';
import { makeHeaderBig, makeHeaderSmall } from '../actions/SearchFormActions'

//import './assets/css/fonts.css';

library.add(faHome, faBuilding)



const FirstRow = styled.div`
font-family: 'Montserrat', sans-serif;
background-color:#28464B;
width: 100%;
font-size:2em;
color: white;
text-align:center;
padding-top:2%;
overflow:auto;
height: 75px;

`
//'${this.props.headerSize}
class StickyHeaderComp extends Component {

    render() {
        return (
            // This is the sticky part of the header.
            <div className="Header_root">
                <FirstRow style={{ height: `${this.props.headerSize}` }}>
                    <button style={{
                        float: 'left', backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0
                    }}>
                        <FontAwesomeIcon style={{ color: 'white', alignItems: 'center' }} icon="home" />
                    </button>
                    <b>MY PROJECTS</b>
                </FirstRow>
            </ div>



        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        headerSize: state.headerSize

    }
}

function mapDispatchToProps(dispatch) {
    return {

        upscaleHeader: () => {
            dispatch(makeHeaderBig())
        },
        downscaleHeader: () => {
            dispatch(makeHeaderSmall())

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StickyHeaderComp);

