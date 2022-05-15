import { useDeleteCarMutation } from "../../server/api";
import PropTypes from "prop-types";
import styles from "./CarsItem.module.css";

const CarsItem = ({ title, model, yearOfIssue, image, id }) => {
  const [deleteCar, { isLoading: isDeleting }] = useDeleteCarMutation();
  return (
    <li className={styles.carsItemCard} key={id}>
      <img src={image} alt={title} className={styles.img} />
      <p className={styles.descText}>Title: {title}</p>
      <p className={styles.descText}>Model: {model}</p>
      <p className={styles.descText}>Year of issue: {yearOfIssue}</p>

      <button
        className={styles.btnDel}
        onClick={() => deleteCar(id)}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
};

CarsItem.proptype = {
  CarsItem: PropTypes.node.isRequired,
};

export default CarsItem;
