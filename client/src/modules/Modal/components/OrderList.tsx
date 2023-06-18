import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AppLoading from '../../../AppLoading';
import { RootState } from '../../../redux/store';
import { webCartProductList } from '../../../services/webCartProductList';
import { IOrderList } from '../interfaces/IOrderList';
import SummaryTable from '../../../UI/SummaryTable/SummaryTable';

const OrderList: FC<IOrderList> = ({ styles }) => {
    const cartList = useSelector((state: RootState) => state.cartSlice.productList);
    const idList = cartList.map((product) => product.id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data, isFetching, error } = webCartProductList.useFetchCartProductListQuery({
        idList,
        lang,
    });

    if (isFetching) return <AppLoading />;
    if (error) return <h1>Error!</h1>;

    return (
        <>
            {data && (
                <SummaryTable
                    list={data.map((product) => {
                        return {
                            id: product.id,
                            name: product.name,
                            code: product.code,
                            price: product.price,
                            count: cartList.find((p) => p.id === product.id)?.count as number,
                        };
                    })}
                />
            )}
        </>
    );
};

export default OrderList;
