import React from 'react';
import Product from '../../components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/product/slice';
import { selectProduct } from '../../redux/product/selectors';

const Products = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const dispatch = useDispatch();
    const items = useSelector(selectProduct);

    const getProducts = () => {
        setIsLoading(true);
        try {
            dispatch(
                fetchProducts(),
            );
        }
        catch (error) {
            console.log('ERROR', error);
        }
        setIsLoading(false);
    }

    React.useEffect(() => {
        getProducts();
    }, []);

    return (
        <ul className="popular-items-list">
            {items.map((item) => <li key={item.productId}><Product {...item} /></li>)}
        </ul>

    )
}

export default Products;