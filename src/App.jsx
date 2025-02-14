import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import api from "./api";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  //Proje ilk yüklendiğinde api'den todoları al
  useEffect(() => {
    api.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          <span className="text-warning">REDUX</span> CRUD
        </h2>

        <Form />

        <List />
      </div>
    </div>
  );
};

export default App;
