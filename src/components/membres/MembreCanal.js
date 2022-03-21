import React from "react";
import {useSelector} from "react-redux";
import Membres from "./Membres";
import {useParams} from "react-router-dom";

function MembreCanal(){
    const membresCanal = useSelector(state => state.membreCanal.membresCanal)

        return (
        <div>
            <h1> Liste des membres : </h1>
            {membresCanal.map((membreCanal)=>{
                if(membreCanal.idCanal==1){
                    return  <Membres key={membreCanal.idCanal} membreCanal={membreCanal}/>
                }
            })}
            
        </div>
    )
}
export default MembreCanal;