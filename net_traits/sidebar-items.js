initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_AsyncResponseTarget",""],["_IMPL_DESERIALIZE_FOR_CookieSource",""],["_IMPL_DESERIALIZE_FOR_CoreResourceMsg",""],["_IMPL_DESERIALIZE_FOR_CustomResponse",""],["_IMPL_DESERIALIZE_FOR_FetchResponseMsg",""],["_IMPL_DESERIALIZE_FOR_IncludeSubdomains",""],["_IMPL_DESERIALIZE_FOR_LoadConsumer",""],["_IMPL_DESERIALIZE_FOR_LoadContext",""],["_IMPL_DESERIALIZE_FOR_LoadData",""],["_IMPL_DESERIALIZE_FOR_LoadResponse",""],["_IMPL_DESERIALIZE_FOR_MessageData",""],["_IMPL_DESERIALIZE_FOR_Metadata",""],["_IMPL_DESERIALIZE_FOR_NetworkError",""],["_IMPL_DESERIALIZE_FOR_ProgressMsg",""],["_IMPL_DESERIALIZE_FOR_RequestSource",""],["_IMPL_DESERIALIZE_FOR_ResourceCORSData",""],["_IMPL_DESERIALIZE_FOR_ResourceId",""],["_IMPL_DESERIALIZE_FOR_ResourceThreads",""],["_IMPL_DESERIALIZE_FOR_ResponseAction",""],["_IMPL_DESERIALIZE_FOR_WebSocketCommunicate",""],["_IMPL_DESERIALIZE_FOR_WebSocketConnectData",""],["_IMPL_DESERIALIZE_FOR_WebSocketDomAction",""],["_IMPL_DESERIALIZE_FOR_WebSocketNetworkEvent",""],["_IMPL_SERIALIZE_FOR_AsyncResponseTarget",""],["_IMPL_SERIALIZE_FOR_CookieSource",""],["_IMPL_SERIALIZE_FOR_CoreResourceMsg",""],["_IMPL_SERIALIZE_FOR_CustomResponse",""],["_IMPL_SERIALIZE_FOR_FetchResponseMsg",""],["_IMPL_SERIALIZE_FOR_IncludeSubdomains",""],["_IMPL_SERIALIZE_FOR_LoadConsumer",""],["_IMPL_SERIALIZE_FOR_LoadContext",""],["_IMPL_SERIALIZE_FOR_LoadData",""],["_IMPL_SERIALIZE_FOR_LoadResponse",""],["_IMPL_SERIALIZE_FOR_MessageData",""],["_IMPL_SERIALIZE_FOR_Metadata",""],["_IMPL_SERIALIZE_FOR_NetworkError",""],["_IMPL_SERIALIZE_FOR_ProgressMsg",""],["_IMPL_SERIALIZE_FOR_RequestSource",""],["_IMPL_SERIALIZE_FOR_ResourceCORSData",""],["_IMPL_SERIALIZE_FOR_ResourceId",""],["_IMPL_SERIALIZE_FOR_ResourceThreads",""],["_IMPL_SERIALIZE_FOR_ResponseAction",""],["_IMPL_SERIALIZE_FOR_WebSocketCommunicate",""],["_IMPL_SERIALIZE_FOR_WebSocketConnectData",""],["_IMPL_SERIALIZE_FOR_WebSocketDomAction",""],["_IMPL_SERIALIZE_FOR_WebSocketNetworkEvent",""]],"enum":[["ConstellationMsg",""],["CookieSource","The creator of a given cookie"],["CoreResourceMsg",""],["FetchResponseMsg",""],["IncludeSubdomains",""],["LoadConsumer","A wrapper for a network load that can either be channel or event-based."],["LoadContext","A loading context, for context-specific sniffing, as defined in https://mimesniff.spec.whatwg.org/#context-specific-sniffing"],["MessageData",""],["NetworkError","Network errors that have to be exported out of the loaders"],["ProgressMsg","Messages sent in response to a `Load` message"],["RequestSource",""],["ResponseAction","Data for passing between threads/processes to indicate a particular action to take on a provided network listener."],["WebSocketDomAction",""],["WebSocketNetworkEvent",""]],"fn":[["load_whole_resource","Convenience function for synchronously loading a whole resource."],["trim_http_whitespace","Normalize `slice`, as defined by the Fetch Spec."],["unwrap_websocket_protocol","Defensively unwraps the protocol string from the response object's protocol"]],"mod":[["blob_url_store",""],["bluetooth_scanfilter",""],["bluetooth_thread",""],["filemanager_thread",""],["hosts",""],["image","Image handling."],["image_cache_thread",""],["net_error_list",""],["request",""],["response","The Response object resulting from a fetch operation"],["storage_thread",""]],"struct":[["AsyncResponseTarget","A target for async networking events. Commonly used to dispatch a runnable event to another thread storing the wrapped closure for later execution."],["CustomResponse",""],["LoadData",""],["LoadResponse","Message sent in response to `Load`.  Contains metadata, and a port for receiving the data."],["Metadata","Metadata about a loaded resource, such as is obtained from HTTP headers."],["PendingAsyncLoad","Initialized but unsent request. Encapsulates everything necessary to instruct the resource thread to make a new request. The `load` method *must* be called before destruction or the thread will panic."],["PendingLoadGuard",""],["ResourceCORSData",""],["ResourceId","An unique identifier to keep track of each load message in the resource handler"],["ResourceThreads",""],["WebSocketCommunicate",""],["WebSocketConnectData",""]],"trait":[["Action",""],["AsyncResponseListener","A listener for asynchronous network events. Cancelling the underlying request is unsupported."],["FetchResponseListener",""],["FetchTaskTarget",""],["IpcSend","Abstraction of the ability to send a particular type of message, used by net_traits::ResourceThreads to ease the use its IpcSender sub-fields XXX: If this trait will be used more in future, some auto derive might be appealing"],["LoadOrigin",""]],"type":[["CoreResourceThread","Handle to a resource thread"],["CustomResponseSender",""],["IpcSendResult",""]]});