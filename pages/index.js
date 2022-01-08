import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "netlify-identity-widget";

export default function Home({ products }) {
  return (
    <>
      <Header />
      <Container>
        {products.map((product, idx) => (
          <ProductCard
            imgUrl={product.attributes.image.data.attributes.formats.small.url}
            title={product.attributes.name}
            description={product.attributes.description}
            weight={product.attributes.weight}
            price={product.attributes.price}
            marginBottom={9}
            key={idx}
          />
        ))}
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://orderjam.herokuapp.com/api/products?populate=*"
  );
  const { data } = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
