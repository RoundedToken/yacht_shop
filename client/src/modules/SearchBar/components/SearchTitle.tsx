import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { webSearchApi } from '../../../services/webSearch';
import Text from '../../../UI/Text/Text';
import { ISearchTitle } from '../interfaces/ISearchTitle';

const SearchTitle: FC<ISearchTitle> = ({ searchStr }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data, isFetching, error } = webSearchApi.useFetchProductListQuery({ lang, searchStr });

    if (isFetching) return null;

    if (error) return <h3>Error!</h3>;

    return (
        <>
            <Text rus="Поиск" eng="Search" est="Otsing" />
            <div>
                &emsp;'{searchStr}'&emsp;{`(${data?.length})`}
            </div>
        </>
    );
};

export default SearchTitle;
