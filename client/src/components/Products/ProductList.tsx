import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TProductListId } from '../../models/TProductListId';
import { setBrand } from '../../redux/navSlice';
import { RootState } from '../../redux/store';
import { routeConstants } from '../../routes/constants';
import { navProductListApi } from '../../services/navProductListService';

const ProductList = () => {
    const params = useParams<TProductListId>();
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const brand = useSelector((state: RootState) => state.navSlice.brand);
    const dispatch = useDispatch();

    const {
        data: productList,
        isFetching,
        error,
    } = navProductListApi.useFetchProductListQuery({
        subr: Number(params.productListId),
        brand: brand === 'notSelected' ? '' : brand,
        fw: '',
        inSubr: '',
        ip: '',
        lang: lang,
    });

    const navigate = useNavigate();
    const productListItemOnClick = (id: number) => {
        navigate(routeConstants.PRODUCT_ROUTE + `/${id}`);
    };

    useEffect(() => {
        return () => {
            dispatch(setBrand('notSelected'));
        };
    }, [dispatch]);

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {productList && !isFetching && (
                <table>
                    <thead>
                        <tr>
                            <th>Pic</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Code</th>
                            <th>Price, EUR</th>
                            <th>In stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product) => (
                            <tr key={product.id} onClick={() => productListItemOnClick(product.id)}>
                                <td>
                                    <img src={product.src} alt="" width={64} height={64} />
                                </td>
                                <td> {product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.code}</td>
                                <td>{product.price}</td>
                                <td>{product.inStock ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductList;
