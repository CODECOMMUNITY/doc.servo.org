initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_AnimationState",""],["_IMPL_DESERIALIZE_FOR_AnimationTickType",""],["_IMPL_DESERIALIZE_FOR_CompositorEvent",""],["_IMPL_DESERIALIZE_FOR_ConstellationControlMsg",""],["_IMPL_DESERIALIZE_FOR_ConstellationMsg",""],["_IMPL_DESERIALIZE_FOR_DocumentState",""],["_IMPL_DESERIALIZE_FOR_EventResult",""],["_IMPL_DESERIALIZE_FOR_IFrameLoadInfo",""],["_IMPL_DESERIALIZE_FOR_IFrameSandboxState",""],["_IMPL_DESERIALIZE_FOR_LayoutControlMsg",""],["_IMPL_DESERIALIZE_FOR_MouseButton",""],["_IMPL_DESERIALIZE_FOR_MouseEventType",""],["_IMPL_DESERIALIZE_FOR_MozBrowserErrorType",""],["_IMPL_DESERIALIZE_FOR_MozBrowserEvent",""],["_IMPL_DESERIALIZE_FOR_NewLayoutInfo",""],["_IMPL_DESERIALIZE_FOR_ScriptToCompositorMsg",""],["_IMPL_DESERIALIZE_FOR_TimerEvent",""],["_IMPL_DESERIALIZE_FOR_TimerEventId",""],["_IMPL_DESERIALIZE_FOR_TimerEventRequest",""],["_IMPL_DESERIALIZE_FOR_TimerSource",""],["_IMPL_DESERIALIZE_FOR_TouchEventType",""],["_IMPL_DESERIALIZE_FOR_TouchId",""],["_IMPL_DESERIALIZE_FOR_TouchpadPressurePhase",""],["_IMPL_SERIALIZE_FOR_AnimationState",""],["_IMPL_SERIALIZE_FOR_AnimationTickType",""],["_IMPL_SERIALIZE_FOR_CompositorEvent",""],["_IMPL_SERIALIZE_FOR_ConstellationControlMsg",""],["_IMPL_SERIALIZE_FOR_ConstellationMsg",""],["_IMPL_SERIALIZE_FOR_DocumentState",""],["_IMPL_SERIALIZE_FOR_EventResult",""],["_IMPL_SERIALIZE_FOR_IFrameLoadInfo",""],["_IMPL_SERIALIZE_FOR_IFrameSandboxState",""],["_IMPL_SERIALIZE_FOR_LayoutControlMsg",""],["_IMPL_SERIALIZE_FOR_MouseButton",""],["_IMPL_SERIALIZE_FOR_MouseEventType",""],["_IMPL_SERIALIZE_FOR_MozBrowserErrorType",""],["_IMPL_SERIALIZE_FOR_MozBrowserEvent",""],["_IMPL_SERIALIZE_FOR_NewLayoutInfo",""],["_IMPL_SERIALIZE_FOR_ScriptToCompositorMsg",""],["_IMPL_SERIALIZE_FOR_TimerEvent",""],["_IMPL_SERIALIZE_FOR_TimerEventId",""],["_IMPL_SERIALIZE_FOR_TimerEventRequest",""],["_IMPL_SERIALIZE_FOR_TimerSource",""],["_IMPL_SERIALIZE_FOR_TouchEventType",""],["_IMPL_SERIALIZE_FOR_TouchId",""],["_IMPL_SERIALIZE_FOR_TouchpadPressurePhase",""]],"enum":[["AnimationState","For a given pipeline, whether any animations are currently running and any animation callbacks are queued"],["AnimationTickType","Specifies whether the script or layout thread needs to be ticked for animation."],["CompositorEvent","Events from the compositor that the script thread needs to know about"],["ConstellationControlMsg","Messages sent from the constellation or layout to the script thread."],["ConstellationMsg","Messages to the constellation."],["DocumentState","Used to determine if a script has any pending asynchronous activity."],["EventResult","Whether a DOM event was prevented by web content"],["IFrameSandboxState","Whether the sandbox attribute is present for an iframe element"],["LayoutControlMsg","Messages sent to the layout thread from the constellation and/or compositor."],["LayoutMsg","Messages from the layout to the constellation."],["Milliseconds","Unit of measurement."],["MouseButton","The mouse button involved in the event."],["MouseEventType","The types of mouse events"],["MozBrowserErrorType","The different types of Browser error events"],["MozBrowserEvent","The events fired in a Browser API context (`<iframe mozbrowser>`)"],["Nanoseconds","Unit of measurement."],["ScriptMsg","Messages from the script to the constellation."],["ScriptToCompositorMsg","Messages sent from the script thread to the compositor"],["TimerSource","Describes the thread that requested the TimerEvent."],["TouchEventType","The type of input represented by a multi-touch event."],["TouchpadPressurePhase","Touchpad pressure phase for TouchpadPressureEvent."]],"fn":[["precise_time_ms","Returns the duration since an unspecified epoch measured in ms."],["precise_time_ns","Returns the duration since an unspecified epoch measured in ns."]],"mod":[["script_msg",""]],"struct":[["IFrameLoadInfo","Specifies the information required to load a URL in an iframe."],["InitialScriptState","Data needed to construct a script thread."],["NewLayoutInfo","The initial data associated with a newly-created framed pipeline."],["OpaqueScriptLayoutChannel","An opaque wrapper around script<->layout channels to avoid leaking message types into crates that don't need to know about them."],["TimerEvent","Notifies the script thread to fire due timers. TimerSource must be FromWindow when dispatched to ScriptThread and must be FromWorker when dispatched to a DedicatedGlobalWorkerScope"],["TimerEventId","The id to be used for a TimerEvent is defined by the corresponding TimerEventRequest."],["TimerEventRequest","Requests a TimerEvent-Message be sent after the given duration."],["TouchId","An opaque identifier for a touch point."],["UntrustedNodeAddress","The address of a node. Layout sends these back. They must be validated via `from_untrusted_node_address` before they can be used, because we do not trust layout."]],"trait":[["ScriptThreadFactory","This trait allows creating a `ScriptThread` without depending on the `script` crate."]],"type":[["MsDuration","Amount of milliseconds."],["NsDuration","Amount of nanoseconds."]]});