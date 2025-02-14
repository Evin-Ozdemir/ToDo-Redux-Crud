import { useSelector } from "react-redux";
import Card from "./card";

const List = () => {
  // Bir reducer'da tutulan state'e abone olma
  // Reducer'da her state değiştiğinde güncel değerleri direk alır
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
