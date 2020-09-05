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
    
      
      
    
      var element = document.getElementById("82556ba4-e003-46aa-942b-6ea17e317fb5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '82556ba4-e003-46aa-942b-6ea17e317fb5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ef68ca84-a33d-428c-81cf-ef2a863205da":{"roots":{"references":[{"attributes":{},"id":"71732","type":"UnionRenderers"},{"attributes":{},"id":"71727","type":"Selection"},{"attributes":{},"id":"71731","type":"Selection"},{"attributes":{"source":{"id":"71694"}},"id":"71698","type":"CDSView"},{"attributes":{},"id":"71721","type":"BasicTickFormatter"},{"attributes":{},"id":"71661","type":"DataRange1d"},{"attributes":{"children":[[{"id":"71658"},0,0]]},"id":"71736","type":"GridBox"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71700","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71727"},"selection_policy":{"id":"71728"}},"id":"71699","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71694"},"glyph":{"id":"71695"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71696"},"selection_glyph":null,"view":{"id":"71698"}},"id":"71697","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS","formatter":{"id":"71723"},"ticker":{"id":"71672"}},"id":"71671","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71683","type":"BoxAnnotation"},{"attributes":{},"id":"71725","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71711","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71675"},{"id":"71676"},{"id":"71677"},{"id":"71678"},{"id":"71679"},{"id":"71680"},{"id":"71681"},{"id":"71682"}]},"id":"71685","type":"Toolbar"},{"attributes":{},"id":"71726","type":"UnionRenderers"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71714","type":"Span"},{"attributes":{},"id":"71723","type":"BasicTickFormatter"},{"attributes":{},"id":"71729","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71729"},"selection_policy":{"id":"71730"}},"id":"71704","type":"ColumnDataSource"},{"attributes":{},"id":"71730","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71701","type":"Line"},{"attributes":{},"id":"71663","type":"LinearScale"},{"attributes":{"source":{"id":"71699"}},"id":"71703","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"71705","type":"Line"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"71721"},"ticker":{"id":"71668"}},"id":"71667","type":"LinearAxis"},{"attributes":{"data_source":{"id":"71704"},"glyph":{"id":"71705"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71706"},"selection_glyph":null,"view":{"id":"71708"}},"id":"71707","type":"GlyphRenderer"},{"attributes":{},"id":"71668","type":"BasicTicker"},{"attributes":{"source":{"id":"71709"}},"id":"71713","type":"CDSView"},{"attributes":{"callback":null},"id":"71682","type":"HoverTool"},{"attributes":{},"id":"71665","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71731"},"selection_policy":{"id":"71732"}},"id":"71709","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"71667"},"ticker":null},"id":"71670","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"71706","type":"Line"},{"attributes":{"source":{"id":"71704"}},"id":"71708","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71710","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71684","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"71671"},"dimension":1,"ticker":null},"id":"71674","type":"Grid"},{"attributes":{},"id":"71672","type":"BasicTicker"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"71697"},{"id":"71702"}]},"id":"71716","type":"LegendItem"},{"attributes":{"text":"b"},"id":"71718","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71696","type":"Circle"},{"attributes":{"overlay":{"id":"71683"}},"id":"71677","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"71709"},"glyph":{"id":"71710"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71711"},"selection_glyph":null,"view":{"id":"71713"}},"id":"71712","type":"GlyphRenderer"},{"attributes":{},"id":"71676","type":"PanTool"},{"attributes":{},"id":"71675","type":"ResetTool"},{"attributes":{"click_policy":"hide","items":[{"id":"71716"},{"id":"71717"}],"location":"center_right","orientation":"horizontal"},"id":"71715","type":"Legend"},{"attributes":{},"id":"71681","type":"SaveTool"},{"attributes":{"children":[{"id":"71738"},{"id":"71736"}]},"id":"71739","type":"Column"},{"attributes":{"above":[{"id":"71715"}],"below":[{"id":"71667"}],"center":[{"id":"71670"},{"id":"71674"}],"left":[{"id":"71671"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71697"},{"id":"71702"},{"id":"71707"},{"id":"71712"},{"id":"71714"}],"title":{"id":"71718"},"toolbar":{"id":"71685"},"toolbar_location":null,"x_range":{"id":"71659"},"x_scale":{"id":"71663"},"y_range":{"id":"71661"},"y_scale":{"id":"71665"}},"id":"71658","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71678","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71695","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"71712"},{"id":"71707"}]},"id":"71717","type":"LegendItem"},{"attributes":{"toolbar":{"id":"71737"},"toolbar_location":"above"},"id":"71738","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"71684"}},"id":"71679","type":"LassoSelectTool"},{"attributes":{},"id":"71659","type":"DataRange1d"},{"attributes":{},"id":"71680","type":"UndoTool"},{"attributes":{"data_source":{"id":"71699"},"glyph":{"id":"71700"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71701"},"selection_glyph":null,"view":{"id":"71703"}},"id":"71702","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"71685"}],"tools":[{"id":"71675"},{"id":"71676"},{"id":"71677"},{"id":"71678"},{"id":"71679"},{"id":"71680"},{"id":"71681"},{"id":"71682"}]},"id":"71737","type":"ProxyToolbar"},{"attributes":{},"id":"71728","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71725"},"selection_policy":{"id":"71726"}},"id":"71694","type":"ColumnDataSource"}],"root_ids":["71739"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"ef68ca84-a33d-428c-81cf-ef2a863205da","root_ids":["71739"],"roots":{"71739":"82556ba4-e003-46aa-942b-6ea17e317fb5"}}];
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