import { useDispatch } from "react-redux";
import { update } from "../redux/actions";
import api from "../api";

const Modal = ({ todo, close }) => {
  //Dispatch kurulumu
  const dispatch = useDispatch();

  // ! Form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki değeri al
    const newText = e.target[1].value;

    //nesnenin text değerini güncelle
    const updatedTodo = { ...todo, text: newText };

    //Reducer'a haber ver
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => dispatch(update(updatedTodo)))
      .catch(() => alert("Güncelleme işlemi başarısız oldu"));

    //modal'ı kapat
    close();
  };

  return (
    <div className="modal d-block bg-blur">
      <div className="modal-dialog modal-dialog-centered text-black">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <label>Yeni Başlık</label>
              <input
                type="text"
                className="form-control shadow mt-2"
                defaultValue={todo.text}
                autoFocus
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Vazgeç
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
