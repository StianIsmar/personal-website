import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { getColorFromAPI, fetchColor } from '../actions/SearchFormActions'

const BoxStyle = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
align-items: center;
color: ${props => props.color};
border: 2px solid ${props => props.color};

`

class BoxCon extends Component {
    render() {
        return (
            <div style={{
                color: `${this.props.color}`
            }}>
                <BoxStyle style={{
                    backgroundColor: `${this.props.color}`, color: 'white'
                }} onClick={this.props.getInfoFromColorAPI} >
                    Change Color
                </BoxStyle>
            </div>
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

        getInfoFromColorAPI: () => {
            dispatch(fetchColor())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxCon);
