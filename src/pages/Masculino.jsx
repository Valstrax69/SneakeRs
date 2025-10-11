import ProductListTemplate from '../components/templates/ProductListTemplate';
import products from '../data/products';

function Masculino() {
    return (
        <ProductListTemplate 
            title="PRODUCTOS MASCULINOS"
            description="Zapatillas para hombre"
            products={products}
            section="masculino"
        />
    );
}

export default Masculino;