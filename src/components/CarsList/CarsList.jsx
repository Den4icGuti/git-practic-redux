import CarsItem from "../CarsItem";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "../CarsList/CarsList.module.css";

const CarsList = ({ cars }) => {
  const filter = useSelector((state) => state.filter.filter);
  const normalize = filter.toLowerCase();

  const filteredNameCar = () => {
    return cars.filter((car) => car.title.toLowerCase().includes(normalize));
  };

  const visibleCar = filteredNameCar();

  return (
    <ul className={styles.carsList}>
      {visibleCar.map((car) => (
        <CarsItem className={styles.carsItem} key={car.id} {...car} />
      ))}
    </ul>
  );
};

CarsList.proptype = {
  id: PropTypes.string.isRequired,
  visibleCar: PropTypes.array.isRequired,
};

export default CarsList;
