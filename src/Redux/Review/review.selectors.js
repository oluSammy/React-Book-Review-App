import { createSelector } from 'reselect';

const selectReviews = state => state.reviews;

export const selectReviewsSlice = createSelector(
    [selectReviews],
    reviews => reviews.reviews
);