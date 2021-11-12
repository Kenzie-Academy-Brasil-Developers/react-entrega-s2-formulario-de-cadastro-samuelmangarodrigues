import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SingUp from "../singup";
import UserPage from "../userPage";
const Routes = () => {
  const [datas, setDatas] = useState([]);
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <SingUp datas={datas} setDatas={setDatas} />
        </Route>
        <Route path="/:id">
          <UserPage datas={datas} />
        </Route>
      </Switch>
    </main>
  );
};
export default Routes;
