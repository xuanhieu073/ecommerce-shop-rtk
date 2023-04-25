import Hero from '@components/Hero';
import Product from '@components/Product';
import { useGetProductsQuery } from '@services/product';

function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}

function Products() {
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) return <div>loading...</div>;
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0">
          {products!.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
