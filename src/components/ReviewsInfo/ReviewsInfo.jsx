import React from 'react';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h1>{author}</h1>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>no review </p>
      )}
    </ul>
  );
};
