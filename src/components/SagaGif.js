import React, { Component } from 'react';
import sagaGif from '../saga-arm.gif';
import styled from 'styled-components'

const ImgDiv = styled.div`
color: white;
font-family: 'Montserrat', sans-serif;
font-size: 1 em;
background-color:#28464B;
display: flex;
flex-direction: column; 
    justify-content: center;
    align-items: center;
    overflow: hidden;


flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
`

export default class SagaGif extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <ImgDiv>
                <img src={sagaGif} width="70%" height="10%" />
                <div>Ascend NTNU Drone shell design</div>
            </ImgDiv>
        )
    }
}