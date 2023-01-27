import { useProducts } from "../../hooks/useProducts";
import { ProductListGrid, ProductCard, ProductBuyButton } from "./styles";
import { formatCurrency } from "../../utils/formatNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

type ProductProps = {
  brand: string;
  description: string;
  id: Number;
  name: string;
  photo: string;
  price: string;
};

const ProductCards = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <p>Carregando...</p>;

  return products.products?.map((product: ProductProps, index: any) => (
    <ProductCard key={index}>
      <img src={product.photo} alt={product.name} />
      <div className="nameprice">
        <h2>{product.name}</h2>
        <p className="price">{formatCurrency(Number(product.price))}</p>
      </div>
      <p>{product.description}</p>
      <ProductBuyButton>
        <FontAwesomeIcon icon={faBagShopping} /> Comprar
      </ProductBuyButton>
    </ProductCard>
  ));
};

const ProductList = () => {
  return (
    <ProductListGrid>
      <ProductCards />
    </ProductListGrid>
  );
};

export default ProductList;
