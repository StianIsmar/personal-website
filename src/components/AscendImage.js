import React, { Component } from 'react';
import ascendImg from '../ascend-NTNU.jpg';
import styled from 'styled-components'

const ImgDiv = styled.div`
background-color:#28464B;
display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;


flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
`

export default class AscendImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <ImgDiv>
                <img src={ascendImg} width="100%" height="10%" />
            </ImgDiv>
        )
    }
}