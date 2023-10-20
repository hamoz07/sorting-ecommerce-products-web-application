import { Button, Form } from "react-bootstrap";
import Rating from "./Rating.jsx";
import { useEffect, useState } from "react";
import { cartState } from "../context/Context.jsx";
const Filters = ({ products }) => {
  // const [ByRating, setbyRating] = useState(4);
  const {
    filterSTATE: { sort, byStock, searchQuery, fastDeleviry, byRating },
    filterDispatcher,
  } = cartState();
  useEffect(() => {
    // Add dependencies to control when this effect should run
    console.log({ sort, byStock, searchQuery, fastDeleviry, byRating });
  }, [sort, byStock, searchQuery, fastDeleviry, byRating]);

  return (
    <>
      <div className="filters">
        <span className="title">Filter Products</span>
        <span>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() =>
              filterDispatcher({
                type: "GET_SPECIFIC_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() =>
              filterDispatcher({
                type: "GET_SPECIFIC_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() =>
              filterDispatcher({
                type: "CHECK_BY_STOCK",
              })
            }
            checked={byStock}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() =>
              filterDispatcher({
                type: "FAST_DELEVIRY",
              })
            }
            checked={fastDeleviry}
          />
        </span>
        <span>
          <label style={{ paddingRight: 10 }}>Rating: </label>
          <Rating
            rating={byRating}
            onClick={(i) =>
              filterDispatcher({
                type: "GET_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span>
        <Button
          variant="light"
          onClick={() =>
            filterDispatcher({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear Filters
        </Button>
      </div>
    </>
  );
};

export default Filters;
