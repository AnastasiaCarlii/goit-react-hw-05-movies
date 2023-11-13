import Loader from 'components/Loader/Loader';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useFetchMovieReviews } from 'hooks';
import React from 'react';

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchMovieReviews();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, Sorry</p>}
      <ReviewsInfo reviews={reviews} />
    </>
  );
};

export default Reviews;
