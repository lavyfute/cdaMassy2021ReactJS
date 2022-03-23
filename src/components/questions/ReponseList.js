import Reponse from "./Reponse";

const ReponseList = ({list}) => {//props = {todos: [{}, {}]}
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    return (
        <div>
            <div>
                {list.map((reponse) => {
                    return <Reponse key={reponse.idAuteur.toString()} reponse={reponse} />
                })}
            </div>
            {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
        </div>
    )
}

export default ReponseList;