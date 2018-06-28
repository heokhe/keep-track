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
	willSet(newValue, oldValue, keyName){
		console.log(`the key ${keyName} has changed from ${oldValue} to ${newValue}`)
	},
	didSet(){
		console.log('changed!')
	}
})
```
now we have the `proxified` object that is reactive. before a key change, the `willSet` event handler will be executed; after the change, the `didSet` handler will be executed with exactly same arguments.
### Validation
`willSet` handler function can return something. if the returned value is truthy (or `undefined`), change will be aborted.
```javascript
willSet(n, o, k){
	if (k === 'age' && n > 110){
		console.log('age cannot be more than 110')
		return false
	}
}
```
#### Async validations
for async operations, you can use __Promises__:
```javascript
willSet(n, o, k){
	someAsyncValidation(n).then(result => result.ok)
}
```
Or, do it in `async/await` way:
```javascript
async willSet(n, o, k){
	const {ok} = await someAsyncValidation(n)
	return ok
}
```
