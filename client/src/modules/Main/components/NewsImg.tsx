import React from 'react';

const NewsImg = ({ styles, src }: { styles: { readonly [key: string]: string }; src: string }) => {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.mask} />
            <div className={styles.imgSymbol}>&#9679;</div>

            <img src={src} alt="" />
        </div>
    );
};

export default NewsImg;
