import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/welcome' />
                    </Route>
                    <Route path="/welcome">
                        <Welcome/>
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductDetail/>
                    </Route>
                    <Route path="/products" exact>
                        <Products/>
                    </Route>

                </Switch>
            </main>
        </div>
    );
}

export default App;


// our-domain.com/welcome => Welcome component
// our-domain.com/products => Products component
// our-domain.com/product-detail/ANY_VALUE_OF_PRODUCT_ID  => ProductDetail component
