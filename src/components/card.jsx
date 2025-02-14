import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./modal";
import { remove, toggle } from "../redux/actions";
import api from "../api";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // ! Sil
  const handleDelete = () => {
    //Api'a silme isteği at
    api
      .delete(`/todos/${todo.id}`)
      //Api isteği başarılı olursa Reducer'a silme olayını haber ver
      .then(() => {
        dispatch(remove(todo.id));
      })
      //Api isteği başarısız olursa bildirim gönder
      .catch((err) => alert("işlem başarısız"));
  };

  // ! isDone değiştir
  const handleStatus = () => {
    api
      .patch(`/todos/${todo.id}`, { isDone: !todo.isDone })
      .then(() => dispatch(toggle(todo)))
      .catch(() => alert("üzgünüz bir sorun oluştu"));
  };

  return (
    <div className="border rounded my-5 p-4 shadow-lg">
      <h5>{todo.text}</h5>
      <h6>{new Date(todo.createdAt).toLocaleDateString()}</h6>
      <h6>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Düzenle
      </button>

      <button className="btn btn-success mx-3" onClick={handleStatus}>
        {todo.isDone ? "Geri Al" : "Tamamla"}
      </button>

      <button className="btn btn-danger" onClick={handleDelete}>
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
