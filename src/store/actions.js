/* eslint-disable semi */
/* eslint-disable prettier/prettier */

// Api call and dispatch
import {slicerAction} from './slicer'

export const fetchData = (category) => {
    return async (dispatch) => {
        const fetchCategory = async () => {
        const response = await fetch(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);
        const resData = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return resData;
        }

        dispatch(slicerAction.setIsLoading());
        try {
            const data = await fetchCategory(category);
            dispatch(slicerAction.setData({data}));
            dispatch(slicerAction.getPagination(0));
        } catch (error) {
            dispatch(slicerAction.setError(error.message));
        }
        dispatch(slicerAction.setIsLoading());
    }
}
