import axios from 'axios';
export function incrementCounter() {
    return {
        type: 'INCREMENT',
    }
}

export function decrementCounter() {
    return {
        type: 'DEECREMENT'
    }
}
export function updateInfo(inputText) {
    console.log(inputText, "DETTE ER INPUTEN!")
    return {
        type: 'SHOWINFO',
        text: inputText
    }
}
export function loadColor() {
    return (dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            dispatch(changeColor("#" + response.data.new_color));
        })
    }
}
export function changeColor(color) {
    console.log('changeColor function called!!!!')
    return {
        type: 'CHANGE_COLOR',
        color: color
    }
}
