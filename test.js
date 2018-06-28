const keepTrack = require('.')

const t1 = {
	a: 0,
	b: 1,
	c: 2
}

const p_t1 = keepTrack(t1, {
	async set(n, o, k, t){
		if (k in t){
			console.log(`change done | ${k}: ${o} => ${n} \n`);
		} else {
			asyncFN().then(() => {
				console.log(`aborted because of assigning new key "${k}"`);
				console.log(`old value was: ${t[k]} \n`);
				return false
			})
		}
	},
})

const asyncFN = () => new Promise(r => {setTimeout(r, 1200)})

p_t1.a = 2
p_t1.d = 4