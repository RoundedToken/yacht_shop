import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { webCartProductList } from '../../../services/webCartProductList';
import Text from '../../Text/Text';
import { IOrderList } from '../interfaces/IOrderList';

const OrderList: FC<IOrderList> = ({ styles }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const idList = productList.map((product) => product.id);
    const totalCount = productList.reduce((pV, cV) => pV + cV.count, 0);
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data, isFetching, error } = webCartProductList.useFetchCartProductListQuery({
        idList,
        lang,
    });

    if (isFetching) return <h1>Loading...</h1>;
    if (error) return <h1>Error!</h1>;

    return (
        <table className={styles.orderList}>
            <thead>
                <tr>
                    <th></th>

                    <th>
                        <Text rus="Товар" eng="Product" est="Toode" />
                    </th>

                    <th>
                        <Text rus="Код" eng="Code" est="Kood" />
                    </th>

                    <th>
                        <Text rus="Цена" eng="Price" est="Hind" />
                    </th>

                    <th>
                        <Text rus="Кол-во" eng="Amount" est="Kogus" />
                    </th>

                    <th>
                        <Text rus="Всего" eng="Total" est="Kokku" />
                    </th>
                </tr>
            </thead>

            <tbody>
                {data &&
                    data.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>

                            <td>{product.name}</td>

                            <td>{product.code}</td>

                            <td>{productList[index].price.toFixed(2)}&nbsp; &euro;</td>

                            <td>{productList[index].count}</td>

                            <td>
                                {(productList[index].count * productList[index].price).toFixed(2)}
                                &nbsp; &euro;
                            </td>
                        </tr>
                    ))}
                <tr>
                    <td></td>

                    <td></td>

                    <td></td>

                    <td>
                        <Text rus="Итого:" eng="Total:" est="Kokku:" />
                    </td>

                    <td>{totalCount}</td>

                    <td>{totalSum.toFixed(2)}&nbsp;&euro;</td>
                </tr>
            </tbody>
        </table>
    );
};

export default OrderList;
