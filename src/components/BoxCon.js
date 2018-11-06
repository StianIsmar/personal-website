import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { loadColor } from '../actions/index.js'


const BoxStyle = styled.button`
width: 100%;
font-size:2em;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

class BoxCon extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: `${this.props.color}`
            }}>
                <BoxStyle onClick={this.props.changeColorButton} >
                    Change Color {this.props.color}
                </BoxStyle>
            </div >
        )
    }
}
function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        color: state.color
    }
}

function mapDispatchToProps(dispatch) {
    return {

        changeColorButton: () => {
            console.log('button pressed!')
            dispatch(loadColor())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCon);
