import ProductListItem from '../components/ProductListItem'

const ProductList = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <ProductListItem key={item.id} item={item} />
        );
      })}
    </>
  );
}

export default ProductList