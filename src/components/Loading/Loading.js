import React from 'react';
import LoadingSVG from './assets/loading.gif'

const Loading = ({ isActive }) => {
    if(isActive){
        return (
            <img src={ LoadingSVG } />
        )
    } else return null
}

export default Loading;
