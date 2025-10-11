import BaseTemplate from './BaseTemplate';
import ProductCard from '../organisms/ProductCard';
import productosOF from '../../data/productosOF';

function HomeTemplate() {
    return (
        <BaseTemplate>
            <div className="container my-5">
                <h1>PRODUCTOS DESTACADOS</h1>
                <p>Bienvenidos a nuestro sitio web.</p>
                <div className="row">
                    {productosOF.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <ProductCard product={product} section="products" />
                        </div>
                    ))}
                </div>
            </div>
        </BaseTemplate>
    );
}

export default HomeTemplate;
