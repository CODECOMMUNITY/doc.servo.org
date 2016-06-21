initSidebarItems({"constant":[["BUBBLE_ISIZES","Recompute intrinsic inline_sizes (minimum and preferred). Propagates down the flow tree because the computation is bottom-up."],["RECONSTRUCT_FLOW","The entire flow needs to be reconstructed."],["REFLOW","Recompute actual inline_sizes and block_sizes. Propagates up the flow tree because the computation is top-down."],["REFLOW_OUT_OF_FLOW","Recompute actual inline-sizes and block-sizes, only taking out-of-flow children into account. Propagates up the flow tree because the computation is top-down."],["REPAINT","Repaint the node itself. Currently unused; need to decide how this propagates."],["RESOLVE_GENERATED_CONTENT","Re-resolve generated content. Propagates up the flow tree because the computation is inorder."],["STORE_OVERFLOW","Recompute the overflow regions (bounding box of object and all descendants). Propagates down the flow tree because the computation is bottom-up."]],"fn":[["compute_damage",""]],"struct":[["RestyleDamage","Individual layout actions that may be necessary after restyling."]]});