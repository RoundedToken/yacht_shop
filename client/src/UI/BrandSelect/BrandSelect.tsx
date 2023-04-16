import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IBrandSelect } from './IBrandSelect';
import { setBrand } from '../../redux/navSlice';
import { navBrandsApi } from '../../services/navBrandsService';

const BrandSelect: FC<IBrandSelect> = ({ id }) => {
    const { data: brands, isFetching, error } = navBrandsApi.useFetchBrandsQuery(id);
    const dispatch = useDispatch();

    const brandSelectOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectBrand = e.target.value;
        dispatch(setBrand(selectBrand));
    };

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {brands && !isFetching && (
                <div>
                    <label>No Brand</label>
                    <input
                        type="radio"
                        name="brandSelect"
                        value="notSelected"
                        onChange={brandSelectOnChange}
                    />

                    {brands.map((brand, i) => (
                        <div key={brand.brand + i}>
                            <label key={i}>{brand.brand}</label>
                            <input
                                onChange={brandSelectOnChange}
                                type="radio"
                                key={brand.brand}
                                value={brand.brand}
                                name="brandSelect"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrandSelect;
