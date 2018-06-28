function keepTrack(target, handlers){
	function emit(type, ...args){
		const h1 = handlers[type]
		if (h1) return h1.apply(h1.prototype, args)
		else return undefined
	}

	return new Proxy(target, {
		get(obj, prop){
			return obj[prop]
		},
		set(obj, prop, value){
			const state = emit('set', value, obj[prop], prop, obj)
			if (!!state || typeof state === "undefined"){
				obj[prop] = value
				emit('setted', value, obj[prop], prop, obj)
			}
		}
	})
}

if (typeof module === 'object' && module.exports){
	module.exports = keepTrack
} else {
	window.keepTrack = keepTrack
}