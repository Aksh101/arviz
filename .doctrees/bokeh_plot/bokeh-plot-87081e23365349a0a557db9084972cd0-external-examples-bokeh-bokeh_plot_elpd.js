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
    
      
      
    
      var element = document.getElementById("6ea5802c-e780-4a33-a55f-968c9eebcf8a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6ea5802c-e780-4a33-a55f-968c9eebcf8a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dbe8a693-c8de-4ff2-b24b-edfdc2a8ead8":{"roots":{"references":[{"attributes":{"overlay":{"id":"71444"}},"id":"71439","type":"LassoSelectTool"},{"attributes":{},"id":"71419","type":"DataRange1d"},{"attributes":{"axis":{"id":"71427"},"ticker":null},"id":"71430","type":"Grid"},{"attributes":{"children":[{"id":"71472"},{"id":"71470"}]},"id":"71473","type":"Column"},{"attributes":{},"id":"71425","type":"LinearScale"},{"attributes":{"toolbar":{"id":"71471"},"toolbar_location":"above"},"id":"71472","type":"ToolbarBox"},{"attributes":{},"id":"71432","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"71463"},"ticker":{"id":"71432"}},"id":"71431","type":"LinearAxis"},{"attributes":{"below":[{"id":"71427"}],"center":[{"id":"71430"},{"id":"71434"}],"left":[{"id":"71431"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"71456"}],"title":{"id":"71458"},"toolbar":{"id":"71445"},"toolbar_location":null,"x_range":{"id":"71419"},"x_scale":{"id":"71423"},"y_range":{"id":"71421"},"y_scale":{"id":"71425"}},"id":"71418","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"71461"},"ticker":{"id":"71428"}},"id":"71427","type":"LinearAxis"},{"attributes":{},"id":"71461","type":"BasicTickFormatter"},{"attributes":{},"id":"71421","type":"DataRange1d"},{"attributes":{},"id":"71435","type":"ResetTool"},{"attributes":{},"id":"71436","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71443","type":"BoxAnnotation"},{"attributes":{},"id":"71441","type":"SaveTool"},{"attributes":{"data_source":{"id":"71455"},"glyph":{"id":"71454"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71457"}},"id":"71456","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"71442","type":"HoverTool"},{"attributes":{},"id":"71463","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"71445"}],"tools":[{"id":"71435"},{"id":"71436"},{"id":"71437"},{"id":"71438"},{"id":"71439"},{"id":"71440"},{"id":"71441"},{"id":"71442"}]},"id":"71471","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71435"},{"id":"71436"},{"id":"71437"},{"id":"71438"},{"id":"71439"},{"id":"71440"},{"id":"71441"},{"id":"71442"}]},"id":"71445","type":"Toolbar"},{"attributes":{},"id":"71428","type":"BasicTicker"},{"attributes":{},"id":"71440","type":"UndoTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"71454","type":"Cross"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"71465"},"selection_policy":{"id":"71466"}},"id":"71455","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"71443"}},"id":"71437","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"71418"},0,0]]},"id":"71470","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71444","type":"PolyAnnotation"},{"attributes":{},"id":"71423","type":"LinearScale"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"71458","type":"Title"},{"attributes":{"axis":{"id":"71431"},"dimension":1,"ticker":null},"id":"71434","type":"Grid"},{"attributes":{},"id":"71465","type":"Selection"},{"attributes":{},"id":"71466","type":"UnionRenderers"},{"attributes":{},"id":"71438","type":"WheelZoomTool"},{"attributes":{"source":{"id":"71455"}},"id":"71457","type":"CDSView"}],"root_ids":["71473"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"dbe8a693-c8de-4ff2-b24b-edfdc2a8ead8","root_ids":["71473"],"roots":{"71473":"6ea5802c-e780-4a33-a55f-968c9eebcf8a"}}];
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