import ztRequest from '..'

export const getHomeGoodPriceData = () => ztRequest.get({
	url: 'home/goodprice'
})

export const getHomeHighScoreData = () => ztRequest.get({
	url: '/home/highscore'
})

export const getHomeDiscountData = () => ztRequest.get({
	url: '/home/discount'
})

export const getHomeHotRecommendData = () => ztRequest.get({
	url: '/home/hotrecommenddest'
})

export const getHomeLongforData = () => ztRequest.get({
	url: '/home/longfor'
})

export const getHomePlusData = () => ztRequest.get({
	url: '/home/plus'
})