export const loadState = () => {
    try {
        const serializedActiveBoardState = localStorage.getItem('activeBoard');
        if (serializedActiveBoardState === null) {
            return undefined;
        }
        return JSON.parse(serializedActiveBoardState)
    } catch (err) {
        return undefined;
    }
}

export const saveState = activeBoard => {
    try {
        const serializeActiveBoardState = JSON.stringify(activeBoard)
        localStorage.setItem('activeBoard', serializeActiveBoardState);
    } catch (err) {
        console.log(err)
    }
}
