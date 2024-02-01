function throttle(func: any, ms: number) {
	let isThrottle = false

	function wrapper() {
		console.log(isThrottle)
		if (isThrottle) {
			return
		}
		func.apply(this, arguments)
		isThrottle = true

		setTimeout(function () {
			isThrottle = false
		}, ms)
	}

	return wrapper
}

export default throttle
