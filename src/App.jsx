import ProductCard from './ProductCard';

export default function App() {
  const products = [
    { id: 1, name: 'Mechanical Keyboard', price: 120, image: '/keyboard.jpg' },
    { id: 2, name: 'Wireless Mouse', price: 45, image: '/mouse.jpg' },
    { id: 3, name: 'Desk Mat', price: 25, image: '/desk_mat.jpg' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            price={product.price}
            image={product.image} 
          />
        ))}
      </div>
    </div>
  );
}