import ztRequest from '..'

// skip（offset），size（limit)
export const getEntireRoomList = (offset = 0, limit = 20) => ztRequest.get({
	url: 'entire/list',
	params: {
		offset,
		limit
	}
})