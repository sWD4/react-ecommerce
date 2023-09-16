import NavBar from "../navbar/Navbar";
import ProductDetail from "../productlist/components/ProductDetail";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
               <ProductDetail></ProductDetail>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;