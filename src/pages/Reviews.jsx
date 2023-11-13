import Loader from 'components/Loader/Loader';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useFetchMovieReviews } from 'hooks';
import React from 'react';

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchMovieReviews();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>something went wrong</p>}
      <ReviewsInfo reviews={reviews} />
    </>
  );
};

export default Reviews;
