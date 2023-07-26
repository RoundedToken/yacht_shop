import React from 'react';

const NewsItem = ({
    styles,
    title,
    content,
    date,
}: {
    styles: { readonly [key: string]: string };
    title: string;
    content: string;
    date?: string;
}) => {
    const newsDate = date ? new Date(date) : null;

    return (
        <div className={styles.newsItem}>
            <div className={styles.newsTitle}>{title}</div>

            <div className={styles.newsContent}>{content}</div>

            {newsDate && (
                <div className={styles.newsDate}>
                    {newsDate.toLocaleDateString('en', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    })}
                </div>
            )}
        </div>
    );
};

export default NewsItem;
