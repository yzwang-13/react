import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products page</h1>
            <ul>
                <li><Link to='/products/p1'>A book</Link></li>
                <li><Link to='/products/p2'>A dog</Link></li>
                <li><Link to='/products/p3'>A cat</Link></li>
                <li><Link to='/products/p4'>A chicken</Link></li>
                <li><Link to='/products/p5'>A carpet</Link></li>
                <li><Link to='/products/p6'>A boy</Link></li>
            </ul>
        </section>
    )
}

export default Products;
