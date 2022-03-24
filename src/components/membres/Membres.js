import React from "react";
import Membre from "./Membre";
import {useSelector} from "react-redux";
import DeleteMembre from "./ActionsOnMembres/DeleteMembre";

function Membres(props){
    const membres = useSelector(state => state.membre.personnes)

    return (
        <div>
            {membres.map((membre) => {
                if(props.membreCanal.idMembre == membre.idpersonne){
                    return  <Membre key={membre.idpersonne} membre={membre}/>
                }
               

            })
            
            }
            <DeleteMembre idCanal={props.membreCanal.idCanal} idpersonne= {props.membreCanal.idMembre}/>
            
            
        </div>
    )
}
export default Membres;

