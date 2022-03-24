import React from "react";
import {useSelector} from "react-redux";
import { useParams } from "react-router";
import AddMembre from "./ActionsOnMembres/AddMembre";
import Membres from "./Membres";


function MembreCanal(){
    let params = useParams();
    const membresCanal = useSelector(state => state.membreCanal.membresCanal)

        return (
        <div>
            {console.log(params)}
            <h1> Liste des membres : </h1>
            {membresCanal.map((membreCanal,index)=>{
                if(membreCanal.idCanal==params.idCanal){
                    return  <Membres key={index} membreCanal={membreCanal}/>
                    
                }
            })}
            
            <AddMembre idCanal={params.idCanal}/>            
        </div>
    )
}
export default MembreCanal;