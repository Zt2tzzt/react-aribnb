import { createSlice } from "@reduxjs/toolkit";
import detailInfo from '@/assets/data/initial-detial-info.json'

const detailSlice = createSlice({
	name: 'detail',
	initialState: {
		detailInfo
	},
	reducers: {
		changeDetailInfoAction(state, { payload }) {
			state.detailInfo = payload
		}
	}
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer