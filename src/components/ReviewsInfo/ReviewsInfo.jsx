import React from 'react';
import styles from './ReviewsInfo.module.css';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <div className={styles.movieInfoContainer}>
      <ul className={styles.reviewList}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li className={styles.reviewListItem} key={id}>
              <h1 className={styles.reviewTitle}>{author}</h1>
              <p className={styles.reviewText}>{content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, we do not have any reviews to this movie yet.</p>
        )}
      </ul>
    </div>
  );
};
