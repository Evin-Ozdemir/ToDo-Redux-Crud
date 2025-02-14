import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { create } from "../redux/actions";
import api from "../api";

const Form = () => {
  // useDispatch hooku bileşen içerisinde dispatch fonksiyonuna erişmemizi sağlar
  const dispatch = useDispatch();

  // ! Form Gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki metne eriş
    const text = e.target[0].value.trim();

    //input boşsa hata yolla
    if (!text) return alert("Input boş olamaz");

    //.todoReducer'a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // Api isteğini at
    api
      .post("todos", newTodo)
      .then(() => dispatch(create(newTodo)))
      .catch(() => alert("Silme işlemi başarısız"));

    // Formu sıfırla
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        placeholder="Örn:Redux Öğren"
        className="form-control"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default Form;
