import { useHistory, useParams, Redirect } from "react-router-dom";
import { GiTrophy } from "react-icons/gi";
import { Cont } from "./styles";

const UserPage = ({ datas }) => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <>
      {datas.length !== 0 ? (
        <Cont>
          <h1>Seja muito bem vindo {id} !!</h1>
          <GiTrophy size={250} color="cyan" />
          <button onClick={() => history.push("/")}>Voltar</button>
        </Cont>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
export default UserPage;
