import { getHomeGoodPriceData } from '@/services/features/home';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: []
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		}
	}
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
		console.log('getHomeGoodPrice res:', res)
		dispatch(changeGoodPriceInfoAction(res))
	})
})

export default homeSlice.reducer