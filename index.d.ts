declare type KT_handler = function(newValue, oldValue): void
declare interface KT_Handlers {
	set?: KT_handler
	setted?: KT_handler
}
declare function keepTrack(target: object, handlers: KT_Handlers): ProxyConstructor
export = keepTrack