import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {useDispatch, useSelector} from "react-redux";



function DeleteMembre(props) {
  const membreCanal = useSelector(state => state.membreCanal.membresCanal)
  const dispatch = useDispatch;
  let mCanal= {
    idCanal: props.idCanal,
    idMembre:props.idpersonne
  }

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>{ 
            // alert('Le membre est supprime');
            

              for(let i=0;i<=membreCanal.length;i++){
                 
                  //console.log (membreCanal[i]);
                  console.log(i,"cnal : ",mCanal,"mmbr : ",membreCanal[i]);
                  if(mCanal.idCanal== membreCanal[i].idCanal && mCanal.idMembre== membreCanal[i].idMembre ){
                    console.log(membreCanal);
                  }
                }
                  //return membresCanal.idCanal<4;
                  

                // }else{
                //   return membreCanal.idCanal==4  ;
                  
                // }
  
            }
             
          },
        
        
        {
          label: 'No',
          onClick: () => alert('Suppression annulee')
        }
      ]
    });
  };

  
  
   

  return (
    <div>
      <button onClick={submit}>Supprimer</button>
    </div>
  );
  
}
export default DeleteMembre;