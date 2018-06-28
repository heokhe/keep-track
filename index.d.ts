declare type keyName = string | number
declare type KT_handler = (newValue: any, oldValue: any, key: keyName, object: object) => ay
declare interface KT_Handlers {
	set?: KT_handler
	setted?: KT_handler
}
declare function keepTrack(target: object, handlers: KT_Handlers): ProxyConstructor
export = keepTrack