import React, { useState } from 'react';
import styles from './Crimping.module.scss';
import Form from './components/Form';
import { webCrimpingApi } from '../../services/webCrimping';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SummaryTable from '../../UI/SummaryTable/SummaryTable';
import crimpingImg from '../../assets/images/crimpingImg.jpg';
import wireImg from '../../assets/images/tros.svg';
import { addToCart, setCount, toTrueCartUpdate } from '../../redux/cartSlice';
import Text from '../../UI/Text/Text';
import { eurFormatter } from '../../helpers/eurFormatter';
import addToCartImg from '../../assets/images/addToCart.svg';
import AppLoading from '../../AppLoading';

const Crimping = () => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const cartList = useSelector((state: RootState) => state.cartSlice.productList);
    const [update, { data, isFetching, error }] = webCrimpingApi.useLazyFetchCartProductListQuery();
    const dispatch = useDispatch();
    const [ropeCount, setRopeCount] = useState(1);

    const ropeCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0') setRopeCount(1);
        else if (value === '') setRopeCount(1);
        else if (/^[0-9][0-9]*$/.test(value)) setRopeCount(Number(value));
    };
    const decrementOnClick = () => {
        if (ropeCount > 1) setRopeCount((prev) => prev - 1);
    };
    const incrementOnClick = () => {
        if (ropeCount < 99) setRopeCount((prev) => prev + 1);
    };
    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        const diameter = e.target.diameter.value;
        //@ts-ignore
        const length = `${Number(e.target.meters.value)}.${e.target.centimeters.value}`;
        //@ts-ignore
        const end1 = e.target.end1.value;
        //@ts-ignore
        const end2 = e.target.end2.value;

        setRopeCount(1);
        update({ lang, diameter, length, end1, end2 });
    };
    const addToCartOnClick = () => {
        if (data) {
            data.forEach((product) => {
                cartList.map((v) => v.id).includes(product.id)
                    ? dispatch(
                          setCount({
                              id: product.id,
                              count: Number(
                                  (
                                      (cartList.find((v) => v.id === product.id)?.count as number) +
                                      product.count * ropeCount
                                  ).toFixed(2)
                              ),
                          })
                      )
                    : dispatch(
                          addToCart({
                              id: product.id,
                              count: Number(product.count.toFixed(2)) * ropeCount,
                              price: product.price,
                              brand: product.brand,
                          })
                      );
            });
            dispatch(toTrueCartUpdate());
            dispatch(webCrimpingApi.util.resetApiState());
        }
    };

    return (
        <div className={styles.rootContainer}>
            <div className={styles.crimpingImg}>{<img src={crimpingImg} alt="" />}</div>

            <div className={styles.description}>
                <div className={styles.descriptionTitle}>
                    <Text rus="Обжим тросов" eng="Rope crimping" est="Trossi pressimine" />
                </div>
                <div className={styles.descriptionContent}>
                    <Text
                        rus={`Выполняем услуги по обжиму тросов, изготовлению вант, лееров и подобных изделий. Магазин предлагает выбор тросов из нержавеющей стали толщиной от 2,5 до 8 мм и наконечники\u{00A0}— Ухо, Вилка, Вилка качающаяся, Т-терминал, Резьба правая, Резьба левая, Талреп, Талреп-качалка.
                Возможно использование материалов заказчика.
                При необходимости доставки заказа будет добавлена стоимость транспортных услуг:
                \u{2003}\u{2022} Пярнусский уезд от 20€;
                \u{2003}\u{2022} по Эстонии от 30€.`}
                        eng={`We provide services for cable crimping, manufacturing of shrouds, handrails and similar products. The store offers a selection of stainless steel cables with a thickness of 2.5 to 8 mm and tips\u{00A0}— Eye, Fork, Toggle, T-terminal, Thread right, Thread left, Turnbuckle, Turnbuckle-toggle.
                        It is possible to use customer's materials.
                        If it is necessary to deliver the order, the cost of transport services will be added:
                        \u{2003}\u{2022} Pärnus County from 20€;
                        \u{2003}\u{2022} in Estonia from 30€.`}
                        est={`Otsikute pressimine trossidele labimooduga 2.5 kuni 8 mm.
                        Kaupluses on valikus roostevabast terasest trossid paksusega 2,5 kuni 8 mm ja otstega\u{00A0}— Aas, Kahvel, Kahvel toggle, T-terminaal, Parempoolne niit, Vasak niit, Talrep, Talrep-toggle.
                        Samuti pressime kasutades kliendi materjale.
                        Vajadusel soidame kliendi juurde, sellel juhul lisandub transporditeenuse maksumus:
                        \u{2003}\u{2022} Parnumaa al. 20€;
                        \u{2003}\u{2022} Eestis al. 30€.`}
                    />
                </div>
                <div className={styles.descriptionBottom}>
                    <Text
                        rus="Опрессовка выполняется на машине WireTekhnik (Швеция)."
                        eng="Crimping is performed on a WireTekhnik machine (Sweden)."
                        est="Pressimine toimub WireTekhniku ​​masinal (Rootsi)."
                    />
                </div>
            </div>

            <div className={styles.wireContainer}>
                <div className={styles.wireContainerName}>
                    <Text rus="Трос" eng="Cable" est="Kaabel" />
                </div>

                <img src={wireImg} alt="" />

                <div className={styles.wireContainerValue}>
                    <Text rus="1 x 19" eng="1 x 19" est="1 x 19" />
                </div>
            </div>

            <div className={styles.blueContainer} />

            <Form styles={styles} onSubmit={formOnSubmit} />

            <div className={styles.breakLine1} />
            <div className={styles.breakLine2} />

            <div className={styles.submitContainer}>
                <button form="crimpingForm" className={styles.submit} type="submit">
                    <Text rus="Посчитать" eng="Count" est="Loendama" />
                </button>
            </div>

            <div className={styles.summaryTitle}>
                <Text rus="Расчет" eng="Calculation" est="Arvutus" />
            </div>

            {isFetching && (
                <>
                    <div className={styles.tableLoading}>
                        <AppLoading />
                    </div>
                </>
            )}
            {error && <h1>Error</h1>}
            {data && !error && !isFetching && (
                <>
                    <SummaryTable
                        list={data.map((product) => {
                            return {
                                id: product.id,
                                name: product.name,
                                code: product.code,
                                price: product.price,
                                count: product.count,
                            };
                        })}
                    />

                    <div className={styles.totalSum}>
                        <div className={styles.totalSumTitle}>
                            <Text rus="Сумма" eng="Sum" est="Summa" />
                        </div>

                        <div className={styles.totalSumValue}>
                            {eurFormatter.format(
                                data.reduce((prev, curr) => prev + curr.count * curr.price, 0) *
                                    ropeCount
                            )}
                        </div>

                        <div className={styles.countControl}>
                            <div className={styles.button} onClick={decrementOnClick}>
                                &minus;
                            </div>

                            <div className={styles.item}>
                                <input
                                    value={ropeCount}
                                    type="tel"
                                    maxLength={2}
                                    minLength={1}
                                    onChange={(e) => ropeCountOnChange(e)}
                                />
                            </div>

                            <div className={styles.button} onClick={incrementOnClick}>
                                +
                            </div>
                        </div>
                    </div>

                    <div onClick={addToCartOnClick} className={styles.addToCart}>
                        <div className={styles.addToCartButton}>
                            <button>
                                <img src={addToCartImg} alt="" />
                            </button>

                            <Text
                                rus={`Добавить\nв корзину`}
                                eng={`Add\nto cart`}
                                est={`Lisa\nostukorvi`}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Crimping;
