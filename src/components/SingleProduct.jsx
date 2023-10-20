/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { cartState } from '../context/Context'

const SingleProduct = ({products}) => {
  const {state:{cart},dispatch}=cartState()
  return (<>
  {products ?
    <div className="product">
      <Card>
        <Card.Body>
            <Card.Title>{products?.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 20,paddingTop:20 }}>
              <span>{products?.price.split(".")[0]}EGP</span>
              {products?.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}
              <Rating rating={products?.ratings} />
            </Card.Subtitle>
             {cart.some((p) => p.id === products.id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: products,
                  })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: products,
                  })
                }
                disabled={!products.inStock}
              >
                {!products.inStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )} 
          </Card.Body>
      </Card>
    </div>:
    <p>no products found</p>}
    </>
  )
}

export default SingleProduct
