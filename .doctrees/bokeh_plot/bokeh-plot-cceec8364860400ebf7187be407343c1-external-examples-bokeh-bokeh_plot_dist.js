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
    
      
      
    
      var element = document.getElementById("775cdebd-0732-4ee9-9882-ba8d927fbc98");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '775cdebd-0732-4ee9-9882-ba8d927fbc98' but no matching script tag was found.")
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
                    
                  var docs_json = '{"81816eca-90c6-4b01-8d66-5afd366b373a":{"roots":{"references":[{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71325","type":"Quad"},{"attributes":{},"id":"71336","type":"UnionRenderers"},{"attributes":{},"id":"71356","type":"BasicTickFormatter"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"Gy/dJAaBlT+TGARWDi2yP5MYBFYOLcI/XrpJDAIrxz/y0k1iEFjJP8/3U+Olm8Q/KVyPwvUovD+4HoXrUbiuP9v5fmq8dKM/eekmMQisjD8AAAAAAAAAAPp+arx0k2g/AAAAAAAAAAD8qfHSTWJQPw==","dtype":"float64","order":"little","shape":[14]}},"selected":{"id":"71335"},"selection_policy":{"id":"71336"}},"id":"71324","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"71271"}],"center":[{"id":"71274"},{"id":"71278"},{"id":"71338"}],"left":[{"id":"71275"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71327"}],"title":{"id":"71329"},"toolbar":{"id":"71286"},"x_range":{"id":"71263"},"x_scale":{"id":"71267"},"y_range":{"id":"71265"},"y_scale":{"id":"71269"}},"id":"71262","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"71275"},"dimension":1,"ticker":null},"id":"71278","type":"Grid"},{"attributes":{"overlay":{"id":"71285"}},"id":"71281","type":"BoxZoomTool"},{"attributes":{},"id":"71331","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71285","type":"BoxAnnotation"},{"attributes":{},"id":"71279","type":"PanTool"},{"attributes":{},"id":"71354","type":"BasicTickFormatter"},{"attributes":{},"id":"71303","type":"BasicTicker"},{"attributes":{"formatter":{"id":"71331"},"ticker":{"id":"71272"}},"id":"71271","type":"LinearAxis"},{"attributes":{"items":[{"id":"71339"}]},"id":"71338","type":"Legend"},{"attributes":{"axis":{"id":"71271"},"ticker":null},"id":"71274","type":"Grid"},{"attributes":{},"id":"71333","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71342","type":"Line"},{"attributes":{"data_source":{"id":"71324"},"glyph":{"id":"71325"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71326"},"selection_glyph":null,"view":{"id":"71328"}},"id":"71327","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"71327"}]},"id":"71339","type":"LegendItem"},{"attributes":{},"id":"71284","type":"HelpTool"},{"attributes":{},"id":"71313","type":"SaveTool"},{"attributes":{"data_source":{"id":"71340"},"glyph":{"id":"71341"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71342"},"selection_glyph":null,"view":{"id":"71344"}},"id":"71343","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"71316"}},"id":"71312","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"71329","type":"Title"},{"attributes":{},"id":"71267","type":"LinearScale"},{"attributes":{},"id":"71276","type":"BasicTicker"},{"attributes":{},"id":"71263","type":"DataRange1d"},{"attributes":{"source":{"id":"71324"}},"id":"71328","type":"CDSView"},{"attributes":{"formatter":{"id":"71356"},"ticker":{"id":"71307"}},"id":"71306","type":"LinearAxis"},{"attributes":{"formatter":{"id":"71333"},"ticker":{"id":"71276"}},"id":"71275","type":"LinearAxis"},{"attributes":{"text":""},"id":"71348","type":"Title"},{"attributes":{},"id":"71283","type":"ResetTool"},{"attributes":{},"id":"71310","type":"PanTool"},{"attributes":{},"id":"71280","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"71361"},"selection_policy":{"id":"71362"}},"id":"71340","type":"ColumnDataSource"},{"attributes":{},"id":"71314","type":"ResetTool"},{"attributes":{},"id":"71296","type":"DataRange1d"},{"attributes":{},"id":"71362","type":"UnionRenderers"},{"attributes":{"children":[{"id":"71262"},{"id":"71293"}]},"id":"71345","type":"Row"},{"attributes":{},"id":"71311","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"71354"},"ticker":{"id":"71303"}},"id":"71302","type":"LinearAxis"},{"attributes":{},"id":"71269","type":"LinearScale"},{"attributes":{"axis":{"id":"71302"},"ticker":null},"id":"71305","type":"Grid"},{"attributes":{},"id":"71361","type":"Selection"},{"attributes":{},"id":"71272","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71316","type":"BoxAnnotation"},{"attributes":{},"id":"71294","type":"DataRange1d"},{"attributes":{"source":{"id":"71340"}},"id":"71344","type":"CDSView"},{"attributes":{"below":[{"id":"71302"}],"center":[{"id":"71305"},{"id":"71309"}],"left":[{"id":"71306"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71343"}],"title":{"id":"71348"},"toolbar":{"id":"71317"},"x_range":{"id":"71294"},"x_scale":{"id":"71298"},"y_range":{"id":"71296"},"y_scale":{"id":"71300"}},"id":"71293","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71310"},{"id":"71311"},{"id":"71312"},{"id":"71313"},{"id":"71314"},{"id":"71315"}]},"id":"71317","type":"Toolbar"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71341","type":"Line"},{"attributes":{},"id":"71282","type":"SaveTool"},{"attributes":{},"id":"71307","type":"BasicTicker"},{"attributes":{},"id":"71298","type":"LinearScale"},{"attributes":{},"id":"71300","type":"LinearScale"},{"attributes":{"axis":{"id":"71306"},"dimension":1,"ticker":null},"id":"71309","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71279"},{"id":"71280"},{"id":"71281"},{"id":"71282"},{"id":"71283"},{"id":"71284"}]},"id":"71286","type":"Toolbar"},{"attributes":{},"id":"71335","type":"Selection"},{"attributes":{},"id":"71315","type":"HelpTool"},{"attributes":{},"id":"71265","type":"DataRange1d"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71326","type":"Quad"}],"root_ids":["71345"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"81816eca-90c6-4b01-8d66-5afd366b373a","root_ids":["71345"],"roots":{"71345":"775cdebd-0732-4ee9-9882-ba8d927fbc98"}}];
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