import { useGetCarsQuery } from "./server/api";
import Form from "./components/AddForm/AddForm";
import CarsList from "./components/CarsList";
import Filter from "./components/Filter";
import Container from "./components/Container";

function App() {
  const { data: cars = [], isFetching } = useGetCarsQuery();

  return (
    <Container>
      <div className="App">
        <Form />
        <Filter />
        {isFetching && <p className="isLoading">Loading....</p>}
        {cars.length <= 0 ? (
          <p className="emptyText">The list is still empty...</p>
        ) : (
          <CarsList cars={cars} />
        )}
      </div>
    </Container>
  );
}

export default App;
