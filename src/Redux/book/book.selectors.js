import { createSelector } from 'reselect';

const selectBook = state => state.book;

export const selectBookSlice = createSelector(
    [selectBook],
    book => book.books
);
