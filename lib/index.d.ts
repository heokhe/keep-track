declare type keyName = string | number
declare type KT_handler = (newValue: any, oldValue: any, key: keyName, object: object) => any
declare interface KT_Handlers {
	willSet?: KT_handler
	didSet?: KT_handler
}
declare function keepTrack(target: object, handlers: KT_Handlers): ProxyConstructor
export = keepTrack