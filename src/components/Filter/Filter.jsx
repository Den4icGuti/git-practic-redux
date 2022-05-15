import { useDispatch, useSelector } from "react-redux";
import { searchByCar } from "../../redux/filterSlice";
import styles from "../Filter/Filter.module.css";

const Filter = () => {
  const getFilter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filterBox}>
      <h2>Search by car</h2>
      <label>
        Enter the name car
        <input
          type="text"
          value={getFilter}
          onChange={(e) => dispatch(searchByCar(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
