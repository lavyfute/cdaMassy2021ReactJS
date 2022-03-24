import React from "react";
import Canal from "./Canal";
import {useSelector} from "react-redux";

function Canaux(){
    const canaux = useSelector(state => state.canal.canaux)
    return (
        <div>
            <h1> Liste des canaux </h1>
            {canaux.map((canal) => {
                    return <Canal key={canal.idCanal} canal={canal} />
                })}
        </div>
    )
}
export default Canaux;