/* eslint-disable prefer-rest-params */
function throttle(func: any, ms: number) {
	let isThrottle = false

	function wrapper(this: any, ...args: any) {
		if (isThrottle) {
			return
		}
		func.call(this as any, args)
		isThrottle = true

		setTimeout(function () {
			isThrottle = false
		}, ms)
	}

	return wrapper
}

export default throttle
