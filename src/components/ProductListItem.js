import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const fetchCacheCart = () => {
  // return JSON.parse(localStorage.getItem('lastCacheCart') || '[]');
// }

// const saveCacheCart = (items) => {
  // const strCache = JSON.stringify(items);
  // localStorage.setItem('lastCacheCart', strCache);
// }
 
const handleAddToCart = (item) => {
  console.log('TODO: save cache cart items');
  // const cacheCart = fetchCacheCart();
  // cacheCart.push(item);
  // saveCacheCart(cacheCart);
}

const ProductListItem = ({ item }) => {
  return (
    
      <Card>
        <Link to={`/products/${item.id}`}>
        <Card.Img
          variant="top"
          src={item.image}
          width="210"
          height="300"
          alt={item.title} />
        </Link>
        <Card.Body>
          <Link to={`/products/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
        </Card.Body>
        <Card.Footer>
          <Row className="align-items-center">
            <Col><strong>{item.price}</strong></Col>
            <Col className="text-right">
              <Button variant="success" onClick={handleAddToCart(item)}>
                <i className="las la-shopping-cart font-17"></i> Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    
  )
}

export default ProductListItem