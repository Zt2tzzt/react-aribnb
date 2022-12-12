import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services/features/home';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo: {},
		recommendInfo: {},
		longforInfo: {},
		plusInfo: {}
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload
		},
		changeDiscountInfoAction(state, { payload }) {
			state.discountInfo = payload
		},
		changeRecommendInfoAction(state, { payload }) {
			state.recommendInfo = payload
		},
		changeLongforInfoAction(state, { payload }) {
			state.longforInfo = payload
		},
		changePlusInfoAction(state, { payload }) {
			state.plusInfo = payload
		}
	}
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction } = homeSlice.actions

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
		console.log('HomeGoodPrice res:', res)
		dispatch(changeGoodPriceInfoAction(res))
	})
	getHomeHighScoreData().then(res => {
		console.log('HomeHighScore res:', res)
		dispatch(changeHighScoreInfoAction(res))
	})
	getHomeDiscountData().then(res => {
		console.log('HomeDiscount res:', res)
		dispatch(changeDiscountInfoAction(res))
	})
	getHomeHotRecommendData().then(res => {
		console.log('HomeRecommend res:', res)
		dispatch(changeRecommendInfoAction(res))
	})
	getHomeLongforData().then(res => {
		console.log('HomeLongfor res:', res)
		dispatch(changeLongforInfoAction(res))
	})
	getHomePlusData().then(res => {
		console.log('HomePlus res:', res)
		dispatch(changePlusInfoAction(res))
	})
})

export default homeSlice.reducer