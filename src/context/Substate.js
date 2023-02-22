import React from "react";
import {Subcontext} from './Subcontext.js';
import { useState } from "react";
let subButton = document.getElementById('fav-button');

const Substate = (props) =>{
    
    const [channelName, setChannelNAme] = useState()
    const [subArray, setSubArray] = useState([])
    

    const storeName= (value)=>{
        setChannelNAme(value);
    }

    const remove = () =>{
        setChannelNAme(null)
    }

    const update = (value) =>{
        setSubArray([...subArray,value])
    }

    return (<Subcontext.Provider value={{subArray, update,channelName, storeName,remove}}>
        {props.children}
    </Subcontext.Provider>)
}

export {Substate}