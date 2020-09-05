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
    
      
      
    
      var element = document.getElementById("33270391-e578-4a9a-99ad-20cab8a351af");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '33270391-e578-4a9a-99ad-20cab8a351af' but no matching script tag was found.")
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
                    
                  var docs_json = '{"eb2aa94e-6394-4d1c-a77c-600e7c52f99c":{"roots":{"references":[{"attributes":{},"id":"71850","type":"BasicTickFormatter"},{"attributes":{},"id":"71823","type":"SaveTool"},{"attributes":{"callback":null},"id":"71824","type":"HoverTool"},{"attributes":{},"id":"71801","type":"DataRange1d"},{"attributes":{},"id":"71822","type":"UndoTool"},{"attributes":{},"id":"71803","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71837","type":"Circle"},{"attributes":{},"id":"71852","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"71841","type":"Dash"},{"attributes":{},"id":"71856","type":"Selection"},{"attributes":{},"id":"71857","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71817"},{"id":"71818"},{"id":"71819"},{"id":"71820"},{"id":"71821"},{"id":"71822"},{"id":"71823"},{"id":"71824"}]},"id":"71827","type":"Toolbar"},{"attributes":{"source":{"id":"71836"}},"id":"71840","type":"CDSView"},{"attributes":{"children":[{"id":"71863"},{"id":"71861"}]},"id":"71864","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71854"},"selection_policy":{"id":"71855"}},"id":"71836","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71842"}},"id":"71844","type":"CDSView"},{"attributes":{"children":[[{"id":"71800"},0,0]]},"id":"71861","type":"GridBox"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"71852"},"ticker":{"id":"71814"}},"id":"71813","type":"LinearAxis"},{"attributes":{"data_source":{"id":"71836"},"glyph":{"id":"71837"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71838"},"selection_glyph":null,"view":{"id":"71840"}},"id":"71839","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71846","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71825","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"71842"},"glyph":{"id":"71841"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71844"}},"id":"71843","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"71856"},"selection_policy":{"id":"71857"}},"id":"71842","type":"ColumnDataSource"},{"attributes":{},"id":"71805","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"71845","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"71850"},"ticker":{"id":"71810"}},"id":"71809","type":"LinearAxis"},{"attributes":{},"id":"71810","type":"BasicTicker"},{"attributes":{"overlay":{"id":"71826"}},"id":"71821","type":"LassoSelectTool"},{"attributes":{},"id":"71807","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"71827"}],"tools":[{"id":"71817"},{"id":"71818"},{"id":"71819"},{"id":"71820"},{"id":"71821"},{"id":"71822"},{"id":"71823"},{"id":"71824"}]},"id":"71862","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"71809"},"ticker":null},"id":"71812","type":"Grid"},{"attributes":{"text":"mu"},"id":"71847","type":"Title"},{"attributes":{"toolbar":{"id":"71862"},"toolbar_location":"above"},"id":"71863","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71826","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"71813"},"dimension":1,"ticker":null},"id":"71816","type":"Grid"},{"attributes":{},"id":"71814","type":"BasicTicker"},{"attributes":{"below":[{"id":"71809"}],"center":[{"id":"71812"},{"id":"71816"}],"left":[{"id":"71813"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71839"},{"id":"71843"},{"id":"71845"},{"id":"71846"}],"title":{"id":"71847"},"toolbar":{"id":"71827"},"toolbar_location":null,"x_range":{"id":"71801"},"x_scale":{"id":"71805"},"y_range":{"id":"71803"},"y_scale":{"id":"71807"}},"id":"71800","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71838","type":"Circle"},{"attributes":{"overlay":{"id":"71825"}},"id":"71819","type":"BoxZoomTool"},{"attributes":{},"id":"71818","type":"PanTool"},{"attributes":{},"id":"71817","type":"ResetTool"},{"attributes":{},"id":"71854","type":"Selection"},{"attributes":{},"id":"71820","type":"WheelZoomTool"},{"attributes":{},"id":"71855","type":"UnionRenderers"}],"root_ids":["71864"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"eb2aa94e-6394-4d1c-a77c-600e7c52f99c","root_ids":["71864"],"roots":{"71864":"33270391-e578-4a9a-99ad-20cab8a351af"}}];
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