import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IResponse } from '../interfaces/IResponse';
import OrderListHeader from './OrderListHeader';
import ResponseListItem from './ResponseListItem';
import ResponseSummary from './ResponseSummary';

const Response: FC<IResponse> = ({ styles, response }) => {
    return (
        <div className={styles.modalContent}>
            <div className={styles.title}>
                <Text
                    rus={`Ваш заказ №${response.orderId} принят в обработку`}
                    eng={`Your order №${response.orderId} has been processed`}
                    est={`Teie tellimus №${response.orderId} on töödeldud`}
                />
            </div>

            <table className={styles.orderList}>
                <OrderListHeader />

                <tbody>
                    {response.orderList.map((product, index) => (
                        <ResponseListItem key={product.id} product={product} index={index} />
                    ))}

                    <ResponseSummary productList={response.orderList} />
                </tbody>
            </table>
        </div>
    );
};

export default Response;
