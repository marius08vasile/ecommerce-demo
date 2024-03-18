import { fetchProductsApi } from "@/api/products";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import Container from "./_layout/Container";
import { redirect } from "next/navigation";

const getProducts = async () => {
  const response = await fetchProductsApi({ serverUrl: true });
  return response;
}

const Home = async () => {
  const response = await getProducts();

  if (response.response_code === 500) redirect('/error');

  const products = response.data ? response.data as ProductModels.server.Product[] : [];
  return (
    <>
      <Header
        title="Shop demo"
        description="Browse our latest products"
      />
      <Container>
        <ProductList
          products={products}
        />
      </Container>
    </>
  );
}

export default Home;