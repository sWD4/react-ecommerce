import NavBar from "../navbar/Navbar";
import ProductList from "../productlist/components/ProductList";
function Home(){
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}
export default Home;