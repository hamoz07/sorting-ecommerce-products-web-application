// rb
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
// icons
import { FaShoppingCart } from "react-icons/fa";
// rrd
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    filterDispatcher,
  } = cartState();

  let cartCheck = location.pathname;

  console.log(cartCheck);

  return (
    <Navbar bg="dark" variant="light" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navToShoppingCart">
            shopping cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search a product"
            className="m-auto"
            onChange={(e) =>
              filterDispatcher({
                type: "SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={"end"}>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" size="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span> {prod.price.split(".")[0]} EGP</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
