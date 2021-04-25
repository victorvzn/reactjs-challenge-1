import { Button, Card, Row, Col } from 'react-bootstrap';

const ProductListItemDetail = ({ item }) => {
  return (
    <div className="ProductListItemDetail">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src={item.image}
                width="210"
                height="300"
                alt={item.title} />
            </Col>
            <Col>
              <h4>{item.title}</h4>
              <strong>Description:</strong>
              <p>{item.description}</p>
              <strong>Category:</strong>
              <p>{item.category}</p>

              <Button variant="success">
                <i className="las la-shopping-cart font-17"></i> Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductListItemDetail