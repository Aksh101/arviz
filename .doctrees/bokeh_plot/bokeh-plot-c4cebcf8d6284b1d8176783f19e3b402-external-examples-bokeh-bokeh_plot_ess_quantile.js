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
    
      
      
    
      var element = document.getElementById("5e84c5c9-57b3-47ec-a075-fa88b3395198");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5e84c5c9-57b3-47ec-a075-fa88b3395198' but no matching script tag was found.")
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
                    
                  var docs_json = '{"71a4244a-6774-4dc6-ba03-a5476d690a67":{"roots":{"references":[{"attributes":{},"id":"71932","type":"SaveTool"},{"attributes":{},"id":"71956","type":"BasicTickFormatter"},{"attributes":{},"id":"71929","type":"WheelZoomTool"},{"attributes":{},"id":"71912","type":"DataRange1d"},{"attributes":{"overlay":{"id":"71935"}},"id":"71930","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQDIUfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1AQsbCePPwnkB7Du/cq5qgQH8ihBoHoKBAh58qLZB5oECYlOwhLnyfQFgCvMP22p1AysGm42rqnEA6InuU09KdQLKWYY7d25xA+A/0ZSlsnEBpLBEly1mdQPcF40OedZlAEC7heDC7m0AxB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71958"},"selection_policy":{"id":"71959"}},"id":"71945","type":"ColumnDataSource"},{"attributes":{},"id":"71931","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71926"},{"id":"71927"},{"id":"71928"},{"id":"71929"},{"id":"71930"},{"id":"71931"},{"id":"71932"},{"id":"71933"}]},"id":"71936","type":"Toolbar"},{"attributes":{},"id":"71910","type":"DataRange1d"},{"attributes":{"children":[[{"id":"71909"},0,0]]},"id":"71963","type":"GridBox"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71950","type":"Span"},{"attributes":{"source":{"id":"71945"}},"id":"71949","type":"CDSView"},{"attributes":{"children":[{"id":"71965"},{"id":"71963"}]},"id":"71966","type":"Column"},{"attributes":{"below":[{"id":"71918"}],"center":[{"id":"71921"},{"id":"71925"}],"left":[{"id":"71922"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71948"},{"id":"71950"}],"title":{"id":"71951"},"toolbar":{"id":"71936"},"toolbar_location":null,"x_range":{"id":"71910"},"x_scale":{"id":"71914"},"y_range":{"id":"71912"},"y_scale":{"id":"71916"}},"id":"71909","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"71945"},"glyph":{"id":"71946"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71947"},"selection_glyph":null,"view":{"id":"71949"}},"id":"71948","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"71956"},"ticker":{"id":"71923"}},"id":"71922","type":"LinearAxis"},{"attributes":{"text":"sigma"},"id":"71951","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71934","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"71936"}],"tools":[{"id":"71926"},{"id":"71927"},{"id":"71928"},{"id":"71929"},{"id":"71930"},{"id":"71931"},{"id":"71932"},{"id":"71933"}]},"id":"71964","type":"ProxyToolbar"},{"attributes":{},"id":"71914","type":"LinearScale"},{"attributes":{"toolbar":{"id":"71964"},"toolbar_location":"above"},"id":"71965","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"71954"},"ticker":{"id":"71919"}},"id":"71918","type":"LinearAxis"},{"attributes":{},"id":"71919","type":"BasicTicker"},{"attributes":{"callback":null},"id":"71933","type":"HoverTool"},{"attributes":{},"id":"71958","type":"Selection"},{"attributes":{},"id":"71916","type":"LinearScale"},{"attributes":{},"id":"71959","type":"UnionRenderers"},{"attributes":{"axis":{"id":"71918"},"ticker":null},"id":"71921","type":"Grid"},{"attributes":{},"id":"71954","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71935","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71946","type":"Circle"},{"attributes":{"axis":{"id":"71922"},"dimension":1,"ticker":null},"id":"71925","type":"Grid"},{"attributes":{},"id":"71923","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71947","type":"Circle"},{"attributes":{"overlay":{"id":"71934"}},"id":"71928","type":"BoxZoomTool"},{"attributes":{},"id":"71927","type":"PanTool"},{"attributes":{},"id":"71926","type":"ResetTool"}],"root_ids":["71966"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"71a4244a-6774-4dc6-ba03-a5476d690a67","root_ids":["71966"],"roots":{"71966":"5e84c5c9-57b3-47ec-a075-fa88b3395198"}}];
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