import { cartState } from "../context/Context";
import Filters from "./Filters.jsx";
import "./styles.css";
import SingleProduct from "./SingleProduct.jsx";
const Home = () => {
  const {
    state: { products },
    filterSTATE: { sort, byStock, searchQuery, fastDeleviry, byRating },
  } = cartState();
  let storedOnes = products;
  console.log(products);
  const controlProds = () => {

    if (sort) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
    }

    if (byRating) {
      storedOnes = storedOnes.filter(
        (prodRate) => prodRate.ratings >= byRating
      );
    }

    if (searchQuery) {
      storedOnes = storedOnes.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (!byStock) {
      storedOnes = storedOnes.filter((prod) => prod.inStock);
    }

    if (fastDeleviry) {
      storedOnes = storedOnes.filter((prod) => prod.fastDelivery);
    }

    if (sort && byRating) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter(
        (prodRate) => prodRate.ratings >= byRating
      );
    }

    if (sort && byRating && !byStock) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter(
        (prodRate) => prodRate.ratings >= byRating
      );
      storedOnes = storedOnes.filter((prod) => prod.inStock);
    }

    if (sort && byRating && !byStock && fastDeleviry && searchQuery) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter(
        (prodRate) => prodRate.ratings >= byRating
      );
      storedOnes = storedOnes.filter((prod) => prod.inStock);
      storedOnes = storedOnes.filter((prod) => prod.fastDelivery);
      storedOnes = storedOnes.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sort && byRating && !byStock && fastDeleviry) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter(
        (prodRate) => prodRate.ratings >= byRating
      );
      storedOnes = storedOnes.filter((prod) => prod.inStock);
      storedOnes = storedOnes.filter((prod) => prod.fastDelivery);
    }

    if (sort && fastDeleviry) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter((prod) => prod.fastDelivery);
    }

    if (sort && fastDeleviry && searchQuery) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter((prod) => prod.fastDelivery);
      storedOnes = storedOnes.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sort && searchQuery) {
      storedOnes = storedOnes.sort((t, r) =>
        sort === "lowToHigh" ? t.price - r.price : r.price - t.price
      );
      storedOnes = storedOnes.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return storedOnes;
  };

  return (
    <div className="home">
      <Filters products={products} />
      <div className="productHolder">
        {storedOnes.length > 0 ? controlProds().map((pro) => (
          <SingleProduct key={pro.id} products={pro} />
        )) : <p>no products found</p>}
      </div>
    </div>
  );
};

export default Home;
