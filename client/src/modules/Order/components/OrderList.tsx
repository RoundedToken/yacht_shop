import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { webCartProductList } from '../../../services/webCartProductList';
import { IOrderList } from '../interfaces/IOrderList';
import OrderListHeader from './OrderListHeader';
import OrderListItem from './OrderListItem';
import OrderListSummary from './OrderListSummary';

const OrderList: FC<IOrderList> = ({ styles }) => {
    const idList = useSelector((state: RootState) => state.cartSlice.productList).map(
        (product) => product.id
    );
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data, isFetching, error } = webCartProductList.useFetchCartProductListQuery({
        idList,
        lang,
    });

    if (isFetching) return <h1>Loading...</h1>;
    if (error) return <h1>Error!</h1>;

    return (
        <table className={styles.orderList}>
            <OrderListHeader />

            <tbody>
                {data &&
                    data.map((product, index) => (
                        <OrderListItem key={product.id} product={product} index={index} />
                    ))}

                <OrderListSummary />
            </tbody>
        </table>
    );
};

export default OrderList;
