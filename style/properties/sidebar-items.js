initSidebarItems({"enum":[["AppendableValue",""],["CSSWideKeyword",""],["DeclaredValue",""],["PropertyDeclaration",""],["PropertyDeclarationName",""],["PropertyDeclarationParseResult",""],["Shorthand",""]],"fn":[["append_declaration_value",""],["append_property_name",""],["append_serialization",""],["cascade","Performs the CSS cascade, computing new styles for an element from its parent style and optionally a cached related style. The arguments are:"],["cascade_with_cached_declarations","Fast path for the function below. Only computes new inherited styles."],["deduplicate_property_declarations","Only keep the last declaration for any given property. The input is in source order, output in reverse source order."],["get_writing_mode","Return a WritingMode bitflags from the relevant CSS properties."],["is_supported_property",""],["make_cascade_vec",""],["modify_border_style_for_inline_sides","Adjusts borders as appropriate to account for a fragment's status as the first or last fragment within the range of an element."],["modify_style_for_anonymous_table_object","Adjusts the display and position properties as appropriate for an anonymous table object."],["modify_style_for_inline_absolute_hypothetical_fragment","Adjusts the `clip` property so that an inline absolute hypothetical fragment doesn't clip its children."],["modify_style_for_input_text","Adjusts the `margin` property as necessary to account for the text of an `input` element."],["modify_style_for_outer_inline_block_fragment","Adjusts the `position` property as necessary for the outer fragment wrapper of an inline-block."],["modify_style_for_replaced_content","Alters the given style to accommodate replaced content. This is called in flow construction. It handles cases like `<div style=\"position: absolute\">foo bar baz</div>` (in which `foo`, `bar`, and `baz` must not be absolutely-positioned) and cases like `<sup>Foo</sup>` (in which the `vertical-align: top` style of `sup` must not propagate down into `Foo`)."],["modify_style_for_text","Adjusts the `position` and `padding` properties as necessary to account for text."],["parse_one_declaration",""],["parse_property_declaration_list",""],["parse_style_attribute",""],["substitute_variables__servo_overflow_clip_box",""],["substitute_variables__servo_overflow_clip_box_slow",""],["substitute_variables_backface_visibility",""],["substitute_variables_backface_visibility_slow",""],["substitute_variables_background_attachment",""],["substitute_variables_background_attachment_slow",""],["substitute_variables_background_clip",""],["substitute_variables_background_clip_slow",""],["substitute_variables_background_color",""],["substitute_variables_background_color_slow",""],["substitute_variables_background_image",""],["substitute_variables_background_image_slow",""],["substitute_variables_background_origin",""],["substitute_variables_background_origin_slow",""],["substitute_variables_background_position",""],["substitute_variables_background_position_slow",""],["substitute_variables_background_repeat",""],["substitute_variables_background_repeat_slow",""],["substitute_variables_background_size",""],["substitute_variables_background_size_slow",""],["substitute_variables_border_bottom_color",""],["substitute_variables_border_bottom_color_slow",""],["substitute_variables_border_bottom_left_radius",""],["substitute_variables_border_bottom_left_radius_slow",""],["substitute_variables_border_bottom_right_radius",""],["substitute_variables_border_bottom_right_radius_slow",""],["substitute_variables_border_bottom_style",""],["substitute_variables_border_bottom_style_slow",""],["substitute_variables_border_bottom_width",""],["substitute_variables_border_bottom_width_slow",""],["substitute_variables_border_collapse",""],["substitute_variables_border_collapse_slow",""],["substitute_variables_border_left_color",""],["substitute_variables_border_left_color_slow",""],["substitute_variables_border_left_style",""],["substitute_variables_border_left_style_slow",""],["substitute_variables_border_left_width",""],["substitute_variables_border_left_width_slow",""],["substitute_variables_border_right_color",""],["substitute_variables_border_right_color_slow",""],["substitute_variables_border_right_style",""],["substitute_variables_border_right_style_slow",""],["substitute_variables_border_right_width",""],["substitute_variables_border_right_width_slow",""],["substitute_variables_border_spacing",""],["substitute_variables_border_spacing_slow",""],["substitute_variables_border_top_color",""],["substitute_variables_border_top_color_slow",""],["substitute_variables_border_top_left_radius",""],["substitute_variables_border_top_left_radius_slow",""],["substitute_variables_border_top_right_radius",""],["substitute_variables_border_top_right_radius_slow",""],["substitute_variables_border_top_style",""],["substitute_variables_border_top_style_slow",""],["substitute_variables_border_top_width",""],["substitute_variables_border_top_width_slow",""],["substitute_variables_bottom",""],["substitute_variables_bottom_slow",""],["substitute_variables_box_shadow",""],["substitute_variables_box_shadow_slow",""],["substitute_variables_box_sizing",""],["substitute_variables_box_sizing_slow",""],["substitute_variables_caption_side",""],["substitute_variables_caption_side_slow",""],["substitute_variables_clear",""],["substitute_variables_clear_slow",""],["substitute_variables_clip",""],["substitute_variables_clip_slow",""],["substitute_variables_color",""],["substitute_variables_color_slow",""],["substitute_variables_column_count",""],["substitute_variables_column_count_slow",""],["substitute_variables_column_gap",""],["substitute_variables_column_gap_slow",""],["substitute_variables_column_width",""],["substitute_variables_column_width_slow",""],["substitute_variables_content",""],["substitute_variables_content_slow",""],["substitute_variables_counter_increment",""],["substitute_variables_counter_increment_slow",""],["substitute_variables_counter_reset",""],["substitute_variables_counter_reset_slow",""],["substitute_variables_cursor",""],["substitute_variables_cursor_slow",""],["substitute_variables_direction",""],["substitute_variables_direction_slow",""],["substitute_variables_display",""],["substitute_variables_display_slow",""],["substitute_variables_empty_cells",""],["substitute_variables_empty_cells_slow",""],["substitute_variables_filter",""],["substitute_variables_filter_slow",""],["substitute_variables_flex_basis",""],["substitute_variables_flex_basis_slow",""],["substitute_variables_flex_direction",""],["substitute_variables_flex_direction_slow",""],["substitute_variables_float",""],["substitute_variables_float_slow",""],["substitute_variables_font_family",""],["substitute_variables_font_family_slow",""],["substitute_variables_font_size",""],["substitute_variables_font_size_slow",""],["substitute_variables_font_stretch",""],["substitute_variables_font_stretch_slow",""],["substitute_variables_font_style",""],["substitute_variables_font_style_slow",""],["substitute_variables_font_variant",""],["substitute_variables_font_variant_slow",""],["substitute_variables_font_weight",""],["substitute_variables_font_weight_slow",""],["substitute_variables_height",""],["substitute_variables_height_slow",""],["substitute_variables_image_rendering",""],["substitute_variables_image_rendering_slow",""],["substitute_variables_left",""],["substitute_variables_left_slow",""],["substitute_variables_letter_spacing",""],["substitute_variables_letter_spacing_slow",""],["substitute_variables_line_height",""],["substitute_variables_line_height_slow",""],["substitute_variables_list_style_image",""],["substitute_variables_list_style_image_slow",""],["substitute_variables_list_style_position",""],["substitute_variables_list_style_position_slow",""],["substitute_variables_list_style_type",""],["substitute_variables_list_style_type_slow",""],["substitute_variables_margin_bottom",""],["substitute_variables_margin_bottom_slow",""],["substitute_variables_margin_left",""],["substitute_variables_margin_left_slow",""],["substitute_variables_margin_right",""],["substitute_variables_margin_right_slow",""],["substitute_variables_margin_top",""],["substitute_variables_margin_top_slow",""],["substitute_variables_max_height",""],["substitute_variables_max_height_slow",""],["substitute_variables_max_width",""],["substitute_variables_max_width_slow",""],["substitute_variables_min_height",""],["substitute_variables_min_height_slow",""],["substitute_variables_min_width",""],["substitute_variables_min_width_slow",""],["substitute_variables_mix_blend_mode",""],["substitute_variables_mix_blend_mode_slow",""],["substitute_variables_opacity",""],["substitute_variables_opacity_slow",""],["substitute_variables_order",""],["substitute_variables_order_slow",""],["substitute_variables_outline_color",""],["substitute_variables_outline_color_slow",""],["substitute_variables_outline_offset",""],["substitute_variables_outline_offset_slow",""],["substitute_variables_outline_style",""],["substitute_variables_outline_style_slow",""],["substitute_variables_outline_width",""],["substitute_variables_outline_width_slow",""],["substitute_variables_overflow_wrap",""],["substitute_variables_overflow_wrap_slow",""],["substitute_variables_overflow_x",""],["substitute_variables_overflow_x_slow",""],["substitute_variables_overflow_y",""],["substitute_variables_overflow_y_slow",""],["substitute_variables_padding_bottom",""],["substitute_variables_padding_bottom_slow",""],["substitute_variables_padding_left",""],["substitute_variables_padding_left_slow",""],["substitute_variables_padding_right",""],["substitute_variables_padding_right_slow",""],["substitute_variables_padding_top",""],["substitute_variables_padding_top_slow",""],["substitute_variables_perspective",""],["substitute_variables_perspective_origin",""],["substitute_variables_perspective_origin_slow",""],["substitute_variables_perspective_slow",""],["substitute_variables_pointer_events",""],["substitute_variables_pointer_events_slow",""],["substitute_variables_position",""],["substitute_variables_position_slow",""],["substitute_variables_quotes",""],["substitute_variables_quotes_slow",""],["substitute_variables_right",""],["substitute_variables_right_slow",""],["substitute_variables_table_layout",""],["substitute_variables_table_layout_slow",""],["substitute_variables_text_align",""],["substitute_variables_text_align_slow",""],["substitute_variables_text_decoration",""],["substitute_variables_text_decoration_slow",""],["substitute_variables_text_indent",""],["substitute_variables_text_indent_slow",""],["substitute_variables_text_justify",""],["substitute_variables_text_justify_slow",""],["substitute_variables_text_orientation",""],["substitute_variables_text_orientation_slow",""],["substitute_variables_text_overflow",""],["substitute_variables_text_overflow_slow",""],["substitute_variables_text_rendering",""],["substitute_variables_text_rendering_slow",""],["substitute_variables_text_shadow",""],["substitute_variables_text_shadow_slow",""],["substitute_variables_text_transform",""],["substitute_variables_text_transform_slow",""],["substitute_variables_top",""],["substitute_variables_top_slow",""],["substitute_variables_transform",""],["substitute_variables_transform_origin",""],["substitute_variables_transform_origin_slow",""],["substitute_variables_transform_slow",""],["substitute_variables_transform_style",""],["substitute_variables_transform_style_slow",""],["substitute_variables_transition_delay",""],["substitute_variables_transition_delay_slow",""],["substitute_variables_transition_duration",""],["substitute_variables_transition_duration_slow",""],["substitute_variables_transition_property",""],["substitute_variables_transition_property_slow",""],["substitute_variables_transition_timing_function",""],["substitute_variables_transition_timing_function_slow",""],["substitute_variables_unicode_bidi",""],["substitute_variables_unicode_bidi_slow",""],["substitute_variables_vertical_align",""],["substitute_variables_vertical_align_slow",""],["substitute_variables_visibility",""],["substitute_variables_visibility_slow",""],["substitute_variables_white_space",""],["substitute_variables_white_space_slow",""],["substitute_variables_width",""],["substitute_variables_width_slow",""],["substitute_variables_word_break",""],["substitute_variables_word_break_slow",""],["substitute_variables_word_spacing",""],["substitute_variables_word_spacing_slow",""],["substitute_variables_writing_mode",""],["substitute_variables_writing_mode_slow",""],["substitute_variables_z_index",""],["substitute_variables_z_index_slow",""]],"mod":[["longhands",""],["property_bit_field",""],["shorthands",""],["style_struct_traits",""],["style_structs",""]],"static":[["CASCADE_PROPERTY",""],["INITIAL_SERVO_VALUES",""]],"struct":[["INITIAL_SERVO_VALUES",""],["PropertyDeclarationBlock","Overridden declarations are skipped."],["PropertyDeclarationParser",""],["ServoComputedValues",""]],"trait":[["ComputedValues",""]],"type":[["CascadePropertyFn",""]]});