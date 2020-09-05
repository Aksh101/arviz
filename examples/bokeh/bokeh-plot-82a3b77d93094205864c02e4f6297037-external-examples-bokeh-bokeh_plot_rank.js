(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("6cd60225-72a8-4cec-ad9d-34adafeb0662");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6cd60225-72a8-4cec-ad9d-34adafeb0662' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"db65e8e8-66e6-4ea7-8c5e-2977b006cab1":{"roots":{"references":[{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94025"},"selection_policy":{"id":"94026"}},"id":"93978","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93984"}},"id":"93988","type":"CDSView"},{"attributes":{"toolbar":{"id":"94037"},"toolbar_location":"above"},"id":"94038","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94029"},"selection_policy":{"id":"94030"}},"id":"93990","type":"ColumnDataSource"},{"attributes":{},"id":"94027","type":"Selection"},{"attributes":{"data_source":{"id":"93978"},"glyph":{"id":"93979"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93980"},"selection_glyph":null,"view":{"id":"93982"}},"id":"93981","type":"GlyphRenderer"},{"attributes":{},"id":"94024","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94014"},"selection_policy":{"id":"94015"}},"id":"93962","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93991","type":"VBar"},{"attributes":{"axis":{"id":"93927"},"dimension":1,"ticker":null},"id":"93930","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93985","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93992","type":"VBar"},{"attributes":{},"id":"93898","type":"PanTool"},{"attributes":{"overlay":{"id":"93939"}},"id":"93933","type":"BoxZoomTool"},{"attributes":{},"id":"94013","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94031"},"selection_policy":{"id":"94032"}},"id":"93996","type":"ColumnDataSource"},{"attributes":{},"id":"94012","type":"Selection"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"93967","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94027"},"selection_policy":{"id":"94028"}},"id":"93984","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93970","type":"VBar"},{"attributes":{},"id":"93897","type":"ResetTool"},{"attributes":{"data_source":{"id":"93962"},"glyph":{"id":"93963"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93964"},"selection_glyph":null,"view":{"id":"93966"}},"id":"93965","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93996"},"glyph":{"id":"93997"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93998"},"selection_glyph":null,"view":{"id":"94000"}},"id":"93999","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"93906"}},"id":"93901","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93963","type":"VBar"},{"attributes":{},"id":"94029","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"93989","type":"Span"},{"attributes":{},"id":"94030","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94022"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"93924"}},"id":"93923","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93986","type":"VBar"},{"attributes":{},"id":"94026","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93969","type":"VBar"},{"attributes":{},"id":"94025","type":"Selection"},{"attributes":{"data_source":{"id":"93984"},"glyph":{"id":"93985"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93986"},"selection_glyph":null,"view":{"id":"93988"}},"id":"93987","type":"GlyphRenderer"},{"attributes":{},"id":"94028","type":"UnionRenderers"},{"attributes":{"children":[{"id":"94038"},{"id":"94036"}]},"id":"94039","type":"Column"},{"attributes":{},"id":"93890","type":"BasicTicker"},{"attributes":{},"id":"93936","type":"UndoTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"93906","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93964","type":"VBar"},{"attributes":{},"id":"93921","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93997","type":"VBar"},{"attributes":{"overlay":{"id":"93940"}},"id":"93935","type":"LassoSelectTool"},{"attributes":{},"id":"94017","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93951","type":"VBar"},{"attributes":{"source":{"id":"93968"}},"id":"93972","type":"CDSView"},{"attributes":{},"id":"94009","type":"BasicTickFormatter"},{"attributes":{},"id":"94016","type":"Selection"},{"attributes":{},"id":"93934","type":"WheelZoomTool"},{"attributes":{},"id":"93937","type":"SaveTool"},{"attributes":{"axis":{"id":"93893"},"dimension":1,"ticker":null},"id":"93896","type":"Grid"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"93961","type":"Span"},{"attributes":{"source":{"id":"93962"}},"id":"93966","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94016"},"selection_policy":{"id":"94017"}},"id":"93968","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93968"},"glyph":{"id":"93969"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93970"},"selection_glyph":null,"view":{"id":"93972"}},"id":"93971","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"93938","type":"HoverTool"},{"attributes":{},"id":"94007","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3]},"id":"94002","type":"FixedTicker"},{"attributes":{},"id":"93881","type":"DataRange1d"},{"attributes":{},"id":"94015","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94007"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"93890"}},"id":"93889","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93998","type":"VBar"},{"attributes":{},"id":"94014","type":"Selection"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94009"},"ticker":{"id":"93974"}},"id":"93893","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93931"},{"id":"93932"},{"id":"93933"},{"id":"93934"},{"id":"93935"},{"id":"93936"},{"id":"93937"},{"id":"93938"}]},"id":"93941","type":"Toolbar"},{"attributes":{"axis":{"id":"93889"},"ticker":null},"id":"93892","type":"Grid"},{"attributes":{"source":{"id":"93996"}},"id":"94000","type":"CDSView"},{"attributes":{},"id":"93903","type":"SaveTool"},{"attributes":{},"id":"93885","type":"LinearScale"},{"attributes":{"source":{"id":"93950"}},"id":"93954","type":"CDSView"},{"attributes":{"children":[[{"id":"93880"},0,0],[{"id":"93916"},0,1]]},"id":"94036","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93980","type":"VBar"},{"attributes":{},"id":"94031","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"94001","type":"Span"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"93955","type":"Span"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"93973","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94012"},"selection_policy":{"id":"94013"}},"id":"93956","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93957","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93979","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93952","type":"VBar"},{"attributes":{},"id":"94011","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"93983","type":"Span"},{"attributes":{"source":{"id":"93956"}},"id":"93960","type":"CDSView"},{"attributes":{"source":{"id":"93978"}},"id":"93982","type":"CDSView"},{"attributes":{},"id":"93883","type":"DataRange1d"},{"attributes":{},"id":"94022","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"93905"}},"id":"93899","type":"BoxZoomTool"},{"attributes":{"text":"tau"},"id":"93976","type":"Title"},{"attributes":{},"id":"93924","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94010"},"selection_policy":{"id":"94011"}},"id":"93950","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93897"},{"id":"93898"},{"id":"93899"},{"id":"93900"},{"id":"93901"},{"id":"93902"},{"id":"93903"},{"id":"93904"}]},"id":"93907","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"93907"},{"id":"93941"}],"tools":[{"id":"93897"},{"id":"93898"},{"id":"93899"},{"id":"93900"},{"id":"93901"},{"id":"93902"},{"id":"93903"},{"id":"93904"},{"id":"93931"},{"id":"93932"},{"id":"93933"},{"id":"93934"},{"id":"93935"},{"id":"93936"},{"id":"93937"},{"id":"93938"}]},"id":"94037","type":"ProxyToolbar"},{"attributes":{},"id":"93887","type":"LinearScale"},{"attributes":{"below":[{"id":"93923"}],"center":[{"id":"93926"},{"id":"93930"},{"id":"93983"},{"id":"93989"},{"id":"93995"},{"id":"94001"}],"left":[{"id":"93927"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"93981"},{"id":"93987"},{"id":"93993"},{"id":"93999"}],"title":{"id":"94004"},"toolbar":{"id":"93941"},"toolbar_location":null,"x_range":{"id":"93881"},"x_scale":{"id":"93919"},"y_range":{"id":"93883"},"y_scale":{"id":"93921"}},"id":"93916","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"93932","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"93905","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"93923"},"ticker":null},"id":"93926","type":"Grid"},{"attributes":{},"id":"93902","type":"UndoTool"},{"attributes":{"source":{"id":"93990"}},"id":"93994","type":"CDSView"},{"attributes":{},"id":"94032","type":"UnionRenderers"},{"attributes":{},"id":"93931","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"93995","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93958","type":"VBar"},{"attributes":{},"id":"93900","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"93950"},"glyph":{"id":"93951"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93952"},"selection_glyph":null,"view":{"id":"93954"}},"id":"93953","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93956"},"glyph":{"id":"93957"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93958"},"selection_glyph":null,"view":{"id":"93960"}},"id":"93959","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93990"},"glyph":{"id":"93991"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93992"},"selection_glyph":null,"view":{"id":"93994"}},"id":"93993","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"93974","type":"FixedTicker"},{"attributes":{"below":[{"id":"93889"}],"center":[{"id":"93892"},{"id":"93896"},{"id":"93955"},{"id":"93961"},{"id":"93967"},{"id":"93973"}],"left":[{"id":"93893"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"93953"},{"id":"93959"},{"id":"93965"},{"id":"93971"}],"title":{"id":"93976"},"toolbar":{"id":"93907"},"toolbar_location":null,"x_range":{"id":"93881"},"x_scale":{"id":"93885"},"y_range":{"id":"93883"},"y_scale":{"id":"93887"}},"id":"93880","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"93904","type":"HoverTool"},{"attributes":{},"id":"94010","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"93940","type":"PolyAnnotation"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94024"},"ticker":{"id":"94002"}},"id":"93927","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"94004","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"93939","type":"BoxAnnotation"},{"attributes":{},"id":"93919","type":"LinearScale"}],"root_ids":["94039"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"db65e8e8-66e6-4ea7-8c5e-2977b006cab1","root_ids":["94039"],"roots":{"94039":"6cd60225-72a8-4cec-ad9d-34adafeb0662"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();