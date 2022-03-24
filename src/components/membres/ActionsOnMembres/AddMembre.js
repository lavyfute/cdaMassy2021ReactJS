import {useSelector,useDispatch} from "react-redux";
import { actionCreators } from "../../../redux/store";
import { useState } from "react";

function AddMembre(props){
    let membresCanal = useSelector(state => state.membreCanal.membresCanal)
    const [idPersonne, setIdPersonne] = useState(0)
    const dispatch = useDispatch()
    const onChangePersonne=(idPersonne)=>{
        console.log(idPersonne.target.value);
        setIdPersonne(idPersonne.target.value)
    }
    const OnAddMembre = () => {

        const membreCanal={
            idCanal: props.idCanal,
            idpersonne: idPersonne
        }
        console.log(dispatch(actionCreators.addMembre(membreCanal)))
        console.log(membreCanal);
        
        console.log(membresCanal);
    }
    return (
        <div>
            <form onSubmit={OnAddMembre}>
                <input type="number" onChange={onChangePersonne}/>
                <input type="submit"/>
            </form>
        </div>
    )

}
export default AddMembre;

