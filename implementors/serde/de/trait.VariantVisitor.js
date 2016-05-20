(function() {var implementors = {};
implementors["serde"] = [];implementors["serde_json"] = ["impl&lt;Iter&gt; <a class='trait' href='serde/de/trait.VariantVisitor.html' title='serde::de::VariantVisitor'>VariantVisitor</a> for <a class='struct' href='serde_json/de/struct.Deserializer.html' title='serde_json::de::Deserializer'>Deserializer</a>&lt;Iter&gt; <span class='where'>where Iter: <a class='trait' href='core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=<a class='type' href='std/io/error/type.Result.html' title='std::io::error::Result'>Result</a>&lt;<a class='primitive' href='std/primitive.u8.html'>u8</a>&gt;&gt;</span>","impl&lt;'a&gt; <a class='trait' href='serde/de/trait.VariantVisitor.html' title='serde::de::VariantVisitor'>VariantVisitor</a> for <a class='struct' href='serde_json/value/struct.VariantDeserializer.html' title='serde_json::value::VariantDeserializer'>VariantDeserializer</a>&lt;'a&gt;",];implementors["bincode"] = ["impl&lt;'a, R: <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='serde/de/trait.VariantVisitor.html' title='serde::de::VariantVisitor'>VariantVisitor</a> for <a class='struct' href='bincode/serde/struct.Deserializer.html' title='bincode::serde::Deserializer'>Deserializer</a>&lt;'a, R&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
