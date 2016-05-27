(function() {var implementors = {};
implementors["collections"] = [];implementors["core"] = [];implementors["rustc_unicode"] = [];implementors["lazy_static"] = [];implementors["simd"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/struct.i32x4.html' title='simd::i32x4'>i32x4</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/struct.i16x8.html' title='simd::i16x8'>i16x8</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/struct.i8x16.html' title='simd::i8x16'>i8x16</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/struct.f32x4.html' title='simd::f32x4'>f32x4</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/sixty_four/struct.i64x2.html' title='simd::sixty_four::i64x2'>i64x2</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='simd/sixty_four/struct.f64x2.html' title='simd::sixty_four::f64x2'>f64x2</a>",];implementors["libc"] = [];implementors["void"] = [];implementors["time"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>",];implementors["num_bigint"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["libloading"] = [];implementors["tempfile"] = [];implementors["shared_library"] = [];implementors["string_cache"] = [];implementors["enum_primitive"] = [];implementors["tendril"] = [];implementors["glx"] = [];implementors["openssl"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='openssl/bn/struct.BigNum.html' title='openssl::bn::BigNum'>BigNum</a>",];implementors["wayland_sys"] = [];implementors["gleam"] = [];implementors["num_rational"] = ["impl&lt;T&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a, T&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>",];implementors["wayland_kbd"] = [];implementors["hyper"] = [];implementors["euclid"] = ["impl&lt;U, T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='euclid/length/struct.Length.html' title='euclid::length::Length'>Length</a>&lt;U, T&gt;","impl&lt;T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='euclid/point/struct.Point2D.html' title='euclid::point::Point2D'>Point2D</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='euclid/point/struct.Point3D.html' title='euclid::point::Point3D'>Point3D</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='euclid/point/struct.Point4D.html' title='euclid::point::Point4D'>Point4D</a>&lt;T&gt;",];implementors["app_units"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='app_units/struct.Au.html' title='app_units::Au'>Au</a>",];implementors["offscreen_gl_context"] = [];implementors["util"] = [];implementors["websocket"] = [];implementors["glutin"] = [];implementors["net_traits"] = [];implementors["gfx"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='gfx/text/glyph/struct.ByteIndex.html' title='gfx::text::glyph::ByteIndex'>ByteIndex</a>",];implementors["layout"] = ["impl <a class='trait' href='core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='layout/inline/struct.FragmentIndex.html' title='layout::inline::FragmentIndex'>FragmentIndex</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
