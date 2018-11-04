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
