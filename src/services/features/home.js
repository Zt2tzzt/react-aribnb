import ztRequest from '..'

export const getHomeGoodPriceData = () => ztRequest.get({
	url: 'home/goodprice'
})