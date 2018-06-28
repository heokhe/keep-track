# keep-track
The perfect, event-driven thing for keeping track of objects, on top of Proxy API
## Installation
Install keep-track via __npm__ (or __yarn__ if you prefer):
```sh
npm install keep-track # or `yarn add keep-track`
```
## Usage
Take a look at following code:
```javascript
const keepTrack = require('keep-track')
let target = {
	a: 1,
	b: 5,
	d: 12,
	r: null
}

let proxified = keepTrack(target, {
	// here come event handlers
	set(newValue, oldValue, keyName){
		console.log(`the key ${keyName} has changed from ${oldValue} to ${newValue}`)
	},
	setted(){
		console.log('changed!')
	}
})
```
now we have the `proxified` object that is reactive. before a key change, the `set` event handler will be executed; after the change, the `setted` handler will be executed with exactly same arguments.
### Aborting changes
`set` handler function is able to return something. if the returned value is truthy (or `undefined`), change will be aborted.
```javascript
set(n, o, k){
	if (key === 'age' && n > 110){
		console.log('age cannot be more than 100')
		return false // or null
	}
}
```
note that __the operation in `set` handler should be synchronous.__