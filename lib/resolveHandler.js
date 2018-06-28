module.exports = function(state){
	return new Promise(r => {
		if (!!state) {
			if (typeof state === 'undefined') return r(true)
			else if (state instanceof Promise) {
				state.then(e => r(e))
			}
		}
		else return r(false)
	})
}