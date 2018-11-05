import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, updateInfo } from '../actions/index.js'
import styled from 'styled-components'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faHome, faBuilding } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBuilding)



const FirstRow = styled.div`
background-color:#28464B;
width: 100%;
font-size:2em;
color: white;
text-align:center;
padding-top:2%;
overflow:auto;
height: 75px;

`




class StickyHeaderComp extends Component {

    render() {

        return (
            <StickyHeader

                // This is the sticky part of the header.
                header={
                    <div className="Header_root">

                        <FirstRow>
                            <button style={{
                                float: 'left', backgroundColor: 'transparent'

                            }}>
                                < FontAwesomeIcon style={{ color: 'white', alignItems: 'center' }} icon="home" />
                            </button>
                            Start!
                        </FirstRow>
                    </ div>
                }>
                <section>

                </section>
            </StickyHeader>


        )
    }
}
export default StickyHeaderComp;

