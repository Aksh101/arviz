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
    
      
      
    
      var element = document.getElementById("fe1fc0b9-bb5d-461c-b5ac-1d717a09f3b0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe1fc0b9-bb5d-461c-b5ac-1d717a09f3b0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d5698d91-8718-42c5-ad5c-1a7c0afe8895":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69249"},{"id":"69250"},{"id":"69251"},{"id":"69252"},{"id":"69253"},{"id":"69254"},{"id":"69255"},{"id":"69256"}]},"id":"69259","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69257","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69291","type":"Circle"},{"attributes":{"source":{"id":"69285"}},"id":"69289","type":"CDSView"},{"attributes":{},"id":"69305","type":"Selection"},{"attributes":{},"id":"69255","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69277","type":"MultiLine"},{"attributes":{},"id":"69307","type":"Selection"},{"attributes":{},"id":"69301","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"69268","type":"FixedTicker"},{"attributes":{},"id":"69309","type":"Selection"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"69305"},"selection_policy":{"id":"69306"}},"id":"69280","type":"ColumnDataSource"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"69295","type":"Span"},{"attributes":{},"id":"69306","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69271","type":"Triangle"},{"attributes":{},"id":"69303","type":"Selection"},{"attributes":{"formatter":{"id":"69300"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"69268"}},"id":"69245","type":"LinearAxis"},{"attributes":{"source":{"id":"69280"}},"id":"69284","type":"CDSView"},{"attributes":{},"id":"69308","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"69285"},"glyph":{"id":"69286"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69287"},"selection_glyph":null,"view":{"id":"69289"}},"id":"69288","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"69257"}},"id":"69251","type":"BoxZoomTool"},{"attributes":{},"id":"69302","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","formatter":{"id":"69298"},"ticker":{"id":"69242"}},"id":"69241","type":"LinearAxis"},{"attributes":{"data_source":{"id":"69270"},"glyph":{"id":"69271"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69272"},"selection_glyph":null,"view":{"id":"69274"}},"id":"69273","type":"GlyphRenderer"},{"attributes":{},"id":"69250","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69287","type":"MultiLine"},{"attributes":{},"id":"69249","type":"ResetTool"},{"attributes":{"data":{"xs":[[-32.007277637391596,-29.367302999388034],[-32.07072560058927,-29.550022752610825]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"69307"},"selection_policy":{"id":"69308"}},"id":"69285","type":"ColumnDataSource"},{"attributes":{},"id":"69237","type":"LinearScale"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"69303"},"selection_policy":{"id":"69304"}},"id":"69275","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69275"},"glyph":{"id":"69276"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69277"},"selection_glyph":null,"view":{"id":"69279"}},"id":"69278","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"69235","type":"DataRange1d"},{"attributes":{"source":{"id":"69275"}},"id":"69279","type":"CDSView"},{"attributes":{},"id":"69242","type":"BasicTicker"},{"attributes":{"source":{"id":"69270"}},"id":"69274","type":"CDSView"},{"attributes":{"callback":null},"id":"69256","type":"HoverTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69258","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"69241"},"ticker":null},"id":"69244","type":"Grid"},{"attributes":{},"id":"69310","type":"UnionRenderers"},{"attributes":{},"id":"69300","type":"BasicTickFormatter"},{"attributes":{},"id":"69233","type":"DataRange1d"},{"attributes":{"source":{"id":"69290"}},"id":"69294","type":"CDSView"},{"attributes":{},"id":"69298","type":"BasicTickFormatter"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69286","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69282","type":"Circle"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"69301"},"selection_policy":{"id":"69302"}},"id":"69270","type":"ColumnDataSource"},{"attributes":{},"id":"69254","type":"UndoTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69281","type":"Circle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69276","type":"MultiLine"},{"attributes":{},"id":"69252","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"69245"},"dimension":1,"ticker":null},"id":"69248","type":"Grid"},{"attributes":{"children":[[{"id":"69232"},0,0]]},"id":"69314","type":"GridBox"},{"attributes":{"toolbar":{"id":"69315"},"toolbar_location":"above"},"id":"69316","type":"ToolbarBox"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"69309"},"selection_policy":{"id":"69310"}},"id":"69290","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69280"},"glyph":{"id":"69281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69282"},"selection_glyph":null,"view":{"id":"69284"}},"id":"69283","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"69241"}],"center":[{"id":"69244"},{"id":"69248"}],"left":[{"id":"69245"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69273"},{"id":"69278"},{"id":"69283"},{"id":"69288"},{"id":"69293"},{"id":"69295"}],"title":{"id":"69296"},"toolbar":{"id":"69259"},"toolbar_location":null,"x_range":{"id":"69233"},"x_scale":{"id":"69237"},"y_range":{"id":"69235"},"y_scale":{"id":"69239"}},"id":"69232","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"69259"}],"tools":[{"id":"69249"},{"id":"69250"},{"id":"69251"},{"id":"69252"},{"id":"69253"},{"id":"69254"},{"id":"69255"},{"id":"69256"}]},"id":"69315","type":"ProxyToolbar"},{"attributes":{},"id":"69239","type":"LinearScale"},{"attributes":{},"id":"69304","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"69258"}},"id":"69253","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"69316"},{"id":"69314"}]},"id":"69317","type":"Column"},{"attributes":{"text":""},"id":"69296","type":"Title"},{"attributes":{"data_source":{"id":"69290"},"glyph":{"id":"69291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69292"},"selection_glyph":null,"view":{"id":"69294"}},"id":"69293","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69292","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69272","type":"Triangle"}],"root_ids":["69317"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"d5698d91-8718-42c5-ad5c-1a7c0afe8895","root_ids":["69317"],"roots":{"69317":"fe1fc0b9-bb5d-461c-b5ac-1d717a09f3b0"}}];
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