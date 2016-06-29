initSidebarItems({"enum":[["Animation","State relating to an animation."],["KeyframesIterationState","This structure represents a keyframes animation current iteration state."],["KeyframesRunningState","This structure represents wether an animation is actually running."]],"fn":[["compute_style_for_animation_step",""],["maybe_start_animations",""],["start_transitions_if_applicable","Inserts transitions into the queue of running animations as applicable for the given style difference. This is called from the layout worker threads. Returns true if any animations were kicked off and false otherwise."],["update_style_for_animation","Updates a single animation and associated style based on the current time. If `damage` is provided, inserts the appropriate restyle damage."],["update_style_for_animation_frame","Updates a given computed style for a given animation frame. Returns a bool representing if the style was indeed updated."]],"struct":[["AnimationFrame","A single animation frame of a single property."],["KeyframesAnimationState","This structure represents the current keyframe animation state, i.e., the duration, the current and maximum iteration count, and the state (either playing or paused)."],["PropertyAnimation",""]],"trait":[["GetMod","Accesses an element of an array, \"wrapping around\" using modular arithmetic. This is needed to handle [repeatable lists][lists] of differing lengths."]]});