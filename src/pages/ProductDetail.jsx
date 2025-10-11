import { useParams, useLocation } from 'react-router-dom';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import products from '../data/products.js';
import productosFemenino from '../data/productosFemenino.js';
import productosOF from '../data/productosOF.js';

function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();

    let product;

    if (location.pathname.startsWith('/femenino')) {
        product = productosFemenino.find((p) => p.id === parseInt(id));
    } else if (location.pathname.startsWith('/masculino')) {
        product = products.find((p) => p.id === parseInt(id));
    } else {
        product = productosOF.find((p) => p.id === parseInt(id));
    }

    return <ProductDetailTemplate product={product} />;
}

export default ProductDetail;