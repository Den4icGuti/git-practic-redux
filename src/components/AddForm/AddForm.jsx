import { useAddCarMutation } from "../../server/api";
import styles from "../AddForm/AddForm.module.css";

const Form = () => {
  const [addCar, { isLoading }] = useAddCarMutation();

  const OnHandleNewCar = (e) => {
    e.preventDefault();

    const newCar = {
      title: e.currentTarget.elements.title.value,
      model: e.currentTarget.elements.model.value,
      yearOfIssue: e.currentTarget.elements.yearOfIssue.value,
      img: e.target.elements.img.files,
    };
    const { title, model, yearOfIssue, img } = newCar;
    if (title.trim() === "") {
      alert("Enter the name of the machine");
      return;
    }
    if (model.trim() === "") {
      alert("Enter the model of the machine");
      return;
    }
    if (yearOfIssue.trim() <= 1950 || yearOfIssue === "") {
      alert("enter a valid year");
      return;
    }
    if (!img) {
      alert("error");
      return;
    }

    console.log(img.toString());

    console.log(newCar);
    addCar(newCar);
    e.currentTarget.reset();
  };

  return (
    <>
      {isLoading && <span>Loading....</span>}
      <form className={styles.addForm} onSubmit={OnHandleNewCar}>
        <h2 className="titleForm">ADD CAR</h2>
        <label>
          Car name
          <input type="text" name="title" />
        </label>
        <label>
          Model car
          <input type="text" name="model" />
        </label>
        <label>
          Year of issue
          <input type="text" name="yearOfIssue" />
        </label>
        <label>
          <input type="file" name="img" />
        </label>
        <button type="submit" className={styles.btnAdd}>
          Add car
        </button>
      </form>
    </>
  );
};

export default Form;
