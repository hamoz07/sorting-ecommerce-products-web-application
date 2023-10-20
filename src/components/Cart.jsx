import {
  Button,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { cartState } from "../context/Context";
import Rating from "./Rating";
import { useEffect, useState } from "react";

const Cart = () => {
  let {
    state: { cart, products },
    dispatch,
  } = cartState();
  const [price, setPrice] = useState();

  // useEffect(() => {
  //   // Initialize cart from local storage if available
  //   const storedCart = JSON.parse(localStorage.getItem("cart"));
  //   if (storedCart) {
  //     dispatch({ type: "INITIALIZE_CART", payload: storedCart });
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    setPrice(cart.reduce((a, c) => a + +c.price * c.qty, 0));
    
  }, [cart]);

  // const removeFromCart = (productId) => {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: productId,
  //   });
  // };

  return (
    <div className="home">
      {/* <div className="productsHandler"> */}

      
      <div className="productContainer">
        <ListGroup>
          {cart.length !== 0 ? (
            cart.map((product) => {
              return (
                <ListGroupItem key={product.id}>
                  <Row>
                    <Col md={2}>{product.name}</Col>
                    <Col md={2}>{product.price}</Col>
                    <Col md={2}>
                      {product.fastDelivery
                        ? "fast delivery"
                        : "4 days delivery"}
                    </Col>
                    <Col md={2}>
                      <Rating rating={product.ratings} />
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={product.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: product.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(product.inStock).keys()].map((opt) => (
                          <option key={opt + 1}>{opt + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          });
                          // removeFromCart(product.id);
                        }}
                      >
                        Remove from Cart
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })
          ) : (
            <ListGroupItem>
              <Row>
                <Col md={12}>{"your cart is empty"}</Col>
              </Row>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
      {/* </div> */}
      <div className="filter-holder">
        <div className="filters summary">
          <span className="title">Subtotal: ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total:{price} EGP
          </span>
          <Button type="button" disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
