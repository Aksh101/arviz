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
    
      
      
    
      var element = document.getElementById("c97e97c1-3efc-4e88-800f-c8a8fa3638b3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c97e97c1-3efc-4e88-800f-c8a8fa3638b3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4b53ff28-54eb-4d66-9e03-f9b10e9f8937":{"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89468"},"selection_policy":{"id":"89469"}},"id":"89435","type":"ColumnDataSource"},{"attributes":{},"id":"89368","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89425","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"89489"},{"id":"89487"}]},"id":"89490","type":"Column"},{"attributes":{"callback":null},"id":"89423","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89436","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89416"},{"id":"89417"},{"id":"89418"},{"id":"89419"},{"id":"89420"},{"id":"89421"},{"id":"89422"},{"id":"89423"}]},"id":"89426","type":"Toolbar"},{"attributes":{"below":[{"id":"89408"}],"center":[{"id":"89411"},{"id":"89415"}],"left":[{"id":"89412"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89452"},{"id":"89454"},{"id":"89455"},{"id":"89456"},{"id":"89459"}],"title":{"id":"89461"},"toolbar":{"id":"89426"},"toolbar_location":null,"x_range":{"id":"89400"},"x_scale":{"id":"89404"},"y_range":{"id":"89402"},"y_scale":{"id":"89406"}},"id":"89399","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89388","type":"BoxAnnotation"},{"attributes":{},"id":"89480","type":"Selection"},{"attributes":{"axis":{"id":"89376"},"dimension":1,"ticker":null},"id":"89379","type":"Grid"},{"attributes":{},"id":"89481","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89470"},"selection_policy":{"id":"89471"}},"id":"89444","type":"ColumnDataSource"},{"attributes":{"source":{"id":"89444"}},"id":"89446","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89389","type":"PolyAnnotation"},{"attributes":{"source":{"id":"89435"}},"id":"89439","type":"CDSView"},{"attributes":{"children":[[{"id":"89363"},0,0],[{"id":"89399"},0,1]]},"id":"89487","type":"GridBox"},{"attributes":{},"id":"89381","type":"PanTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89443","type":"Dash"},{"attributes":{},"id":"89468","type":"Selection"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"89440","type":"Span"},{"attributes":{},"id":"89469","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"89441","type":"Span"},{"attributes":{},"id":"89364","type":"DataRange1d"},{"attributes":{"data_source":{"id":"89444"},"glyph":{"id":"89443"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89446"}},"id":"89445","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"89447","type":"Title"},{"attributes":{"toolbars":[{"id":"89390"},{"id":"89426"}],"tools":[{"id":"89380"},{"id":"89381"},{"id":"89382"},{"id":"89383"},{"id":"89384"},{"id":"89385"},{"id":"89386"},{"id":"89387"},{"id":"89416"},{"id":"89417"},{"id":"89418"},{"id":"89419"},{"id":"89420"},{"id":"89421"},{"id":"89422"},{"id":"89423"}]},"id":"89488","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89442","type":"Span"},{"attributes":{},"id":"89386","type":"SaveTool"},{"attributes":{},"id":"89370","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89482"},"selection_policy":{"id":"89483"}},"id":"89458","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89451","type":"Circle"},{"attributes":{},"id":"89470","type":"Selection"},{"attributes":{},"id":"89471","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89450","type":"Circle"},{"attributes":{},"id":"89400","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89480"},"selection_policy":{"id":"89481"}},"id":"89449","type":"ColumnDataSource"},{"attributes":{},"id":"89383","type":"WheelZoomTool"},{"attributes":{"source":{"id":"89458"}},"id":"89460","type":"CDSView"},{"attributes":{"data_source":{"id":"89449"},"glyph":{"id":"89450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89451"},"selection_glyph":null,"view":{"id":"89453"}},"id":"89452","type":"GlyphRenderer"},{"attributes":{"source":{"id":"89449"}},"id":"89453","type":"CDSView"},{"attributes":{},"id":"89380","type":"ResetTool"},{"attributes":{},"id":"89377","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89457","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"89454","type":"Span"},{"attributes":{"data_source":{"id":"89435"},"glyph":{"id":"89436"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89437"},"selection_glyph":null,"view":{"id":"89439"}},"id":"89438","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"89455","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89476"},"ticker":{"id":"89409"}},"id":"89408","type":"LinearAxis"},{"attributes":{"data_source":{"id":"89458"},"glyph":{"id":"89457"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89460"}},"id":"89459","type":"GlyphRenderer"},{"attributes":{"end":1,"start":-0.05},"id":"89402","type":"DataRange1d"},{"attributes":{"overlay":{"id":"89389"}},"id":"89384","type":"LassoSelectTool"},{"attributes":{"text":"mu"},"id":"89461","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89478"},"ticker":{"id":"89413"}},"id":"89412","type":"LinearAxis"},{"attributes":{},"id":"89404","type":"LinearScale"},{"attributes":{},"id":"89406","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89456","type":"Span"},{"attributes":{},"id":"89478","type":"BasicTickFormatter"},{"attributes":{},"id":"89409","type":"BasicTicker"},{"attributes":{"axis":{"id":"89408"},"ticker":null},"id":"89411","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89380"},{"id":"89381"},{"id":"89382"},{"id":"89383"},{"id":"89384"},{"id":"89385"},{"id":"89386"},{"id":"89387"}]},"id":"89390","type":"Toolbar"},{"attributes":{"axis":{"id":"89372"},"ticker":null},"id":"89375","type":"Grid"},{"attributes":{"toolbar":{"id":"89488"},"toolbar_location":"above"},"id":"89489","type":"ToolbarBox"},{"attributes":{"axis":{"id":"89412"},"dimension":1,"ticker":null},"id":"89415","type":"Grid"},{"attributes":{},"id":"89413","type":"BasicTicker"},{"attributes":{},"id":"89482","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89437","type":"Circle"},{"attributes":{},"id":"89476","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"89424"}},"id":"89418","type":"BoxZoomTool"},{"attributes":{},"id":"89417","type":"PanTool"},{"attributes":{},"id":"89416","type":"ResetTool"},{"attributes":{},"id":"89422","type":"SaveTool"},{"attributes":{},"id":"89385","type":"UndoTool"},{"attributes":{},"id":"89464","type":"BasicTickFormatter"},{"attributes":{},"id":"89483","type":"UnionRenderers"},{"attributes":{},"id":"89419","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"89425"}},"id":"89420","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"89372"}],"center":[{"id":"89375"},{"id":"89379"}],"left":[{"id":"89376"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89438"},{"id":"89440"},{"id":"89441"},{"id":"89442"},{"id":"89445"}],"title":{"id":"89447"},"toolbar":{"id":"89390"},"toolbar_location":null,"x_range":{"id":"89364"},"x_scale":{"id":"89368"},"y_range":{"id":"89366"},"y_scale":{"id":"89370"}},"id":"89363","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"89421","type":"UndoTool"},{"attributes":{"overlay":{"id":"89388"}},"id":"89382","type":"BoxZoomTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89466"},"ticker":{"id":"89377"}},"id":"89376","type":"LinearAxis"},{"attributes":{"callback":null},"id":"89387","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89464"},"ticker":{"id":"89373"}},"id":"89372","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"89366","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89424","type":"BoxAnnotation"},{"attributes":{},"id":"89466","type":"BasicTickFormatter"},{"attributes":{},"id":"89373","type":"BasicTicker"}],"root_ids":["89490"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"4b53ff28-54eb-4d66-9e03-f9b10e9f8937","root_ids":["89490"],"roots":{"89490":"c97e97c1-3efc-4e88-800f-c8a8fa3638b3"}}];
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