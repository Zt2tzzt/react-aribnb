import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
export { BASE_URL, TIMEOUT } from './config'

class ZTRequest {
	constructor(baseURL, timeout) {
		this.instance = axios.create({
			baseURL,
			timeout
		})

		// 也可以再 request 实例方法中，使用 promise 进行拦截。
		this.instance.interceptors.response.use(res => res.data, err => err)
	}

	request(config) {
		return this.instance.request(config)
	}

	get(config) {
		return this.request({ ...config, methods: 'get' })
	}

	post(config) {
		return this.request({ ...config, methods: 'post' })
	}
}

export default new ZTRequest(BASE_URL, TIMEOUT)