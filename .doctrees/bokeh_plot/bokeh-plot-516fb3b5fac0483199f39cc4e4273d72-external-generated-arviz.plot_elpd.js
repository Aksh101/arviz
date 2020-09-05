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
    
      
      
    
      var element = document.getElementById("9002b3b8-3451-4f79-abc5-bd1ebb5048b6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9002b3b8-3451-4f79-abc5-bd1ebb5048b6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"88305e0e-6cfd-4e80-bf16-d0a6476efe6b":{"roots":{"references":[{"attributes":{"formatter":{"id":"104045"},"ticker":{"id":"104012"}},"id":"104011","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"104049"},"selection_policy":{"id":"104050"}},"id":"104039","type":"ColumnDataSource"},{"attributes":{},"id":"104016","type":"BasicTicker"},{"attributes":{},"id":"104012","type":"BasicTicker"},{"attributes":{"axis":{"id":"104015"},"dimension":1,"ticker":null},"id":"104018","type":"Grid"},{"attributes":{},"id":"104005","type":"DataRange1d"},{"attributes":{"below":[{"id":"104011"}],"center":[{"id":"104014"},{"id":"104018"}],"left":[{"id":"104015"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"104040"}],"title":{"id":"104042"},"toolbar":{"id":"104029"},"toolbar_location":null,"x_range":{"id":"104003"},"x_scale":{"id":"104007"},"y_range":{"id":"104005"},"y_scale":{"id":"104009"}},"id":"104002","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"104047"},"ticker":{"id":"104016"}},"id":"104015","type":"LinearAxis"},{"attributes":{"children":[{"id":"104056"},{"id":"104054"}]},"id":"104057","type":"Column"},{"attributes":{},"id":"104025","type":"SaveTool"},{"attributes":{"overlay":{"id":"104028"}},"id":"104023","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"104027"}},"id":"104021","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"104027","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"104019"},{"id":"104020"},{"id":"104021"},{"id":"104022"},{"id":"104023"},{"id":"104024"},{"id":"104025"},{"id":"104026"}]},"id":"104029","type":"Toolbar"},{"attributes":{"axis":{"id":"104011"},"ticker":null},"id":"104014","type":"Grid"},{"attributes":{"callback":null},"id":"104026","type":"HoverTool"},{"attributes":{"toolbar":{"id":"104055"},"toolbar_location":"above"},"id":"104056","type":"ToolbarBox"},{"attributes":{},"id":"104049","type":"Selection"},{"attributes":{},"id":"104003","type":"DataRange1d"},{"attributes":{},"id":"104050","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"104039"},"glyph":{"id":"104038"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"104041"}},"id":"104040","type":"GlyphRenderer"},{"attributes":{},"id":"104009","type":"LinearScale"},{"attributes":{},"id":"104007","type":"LinearScale"},{"attributes":{},"id":"104019","type":"ResetTool"},{"attributes":{},"id":"104024","type":"UndoTool"},{"attributes":{"text":"centered model - non centered model"},"id":"104042","type":"Title"},{"attributes":{},"id":"104045","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"104028","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"104002"},0,0]]},"id":"104054","type":"GridBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"104038","type":"Cross"},{"attributes":{"source":{"id":"104039"}},"id":"104041","type":"CDSView"},{"attributes":{"toolbars":[{"id":"104029"}],"tools":[{"id":"104019"},{"id":"104020"},{"id":"104021"},{"id":"104022"},{"id":"104023"},{"id":"104024"},{"id":"104025"},{"id":"104026"}]},"id":"104055","type":"ProxyToolbar"},{"attributes":{},"id":"104020","type":"PanTool"},{"attributes":{},"id":"104022","type":"WheelZoomTool"},{"attributes":{},"id":"104047","type":"BasicTickFormatter"}],"root_ids":["104057"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"88305e0e-6cfd-4e80-bf16-d0a6476efe6b","root_ids":["104057"],"roots":{"104057":"9002b3b8-3451-4f79-abc5-bd1ebb5048b6"}}];
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