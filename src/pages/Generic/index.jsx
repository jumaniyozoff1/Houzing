import React from "react";
import { useLocation } from "react-router-dom";

const Generic = ()=>{
    const Location = useLocation()
    return(
        <div>Generic {Location.pathname}</div>
    )
}
export default Generic