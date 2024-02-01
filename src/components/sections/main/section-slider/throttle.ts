/* eslint-disable prefer-rest-params */
function throttle(func: any, ms: number) {
	let isThrottle = false

	function wrapper(this: any, ...args: any) {
		console.log(isThrottle)
		if (isThrottle) {
			return
		}
    func.call(this as any, args)
		// func.apply(this as Function, arguments)
		isThrottle = true

		setTimeout(function () {
			isThrottle = false
		}, ms)
	}

	return wrapper
}

export default throttle
