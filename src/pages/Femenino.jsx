import ProductListTemplate from '../components/templates/ProductListTemplate';
import productosFemenino from '../data/productosFemenino.js';

function Femenino() {
    return (
        <ProductListTemplate 
            title="PRODUCTOS FEMENINOS"
            description="Descubre nuestra selección exclusiva para mujeres."
            products={productosFemenino}
            section="femenino"
        />
    );
}

export default Femenino;