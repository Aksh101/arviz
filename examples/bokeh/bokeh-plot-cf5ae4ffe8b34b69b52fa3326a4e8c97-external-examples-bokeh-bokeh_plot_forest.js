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
    
      
      
    
      var element = document.getElementById("74e2253e-60fe-42ff-a7fd-ff61483b17a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '74e2253e-60fe-42ff-a7fd-ff61483b17a4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"418ec8ec-680e-41d0-abfe-f59139370e8b":{"roots":{"references":[{"attributes":{"formatter":{"id":"72168"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"72163"}},"id":"72016","type":"LinearAxis"},{"attributes":{},"id":"72170","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"72003"},0,0]]},"id":"72220","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72096","type":"Circle"},{"attributes":{"data_source":{"id":"72039"},"glyph":{"id":"72040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72041"},"selection_glyph":null,"view":{"id":"72043"}},"id":"72042","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72104"},"glyph":{"id":"72105"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72106"},"selection_glyph":null,"view":{"id":"72108"}},"id":"72107","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72100","type":"Line"},{"attributes":{},"id":"72185","type":"Selection"},{"attributes":{"axis":{"id":"72012"},"ticker":null},"id":"72015","type":"Grid"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"72199"},"selection_policy":{"id":"72200"}},"id":"72114","type":"ColumnDataSource"},{"attributes":{},"id":"72186","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"72027","type":"HoverTool"},{"attributes":{"data_source":{"id":"72094"},"glyph":{"id":"72095"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72096"},"selection_glyph":null,"view":{"id":"72098"}},"id":"72097","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72059"},"glyph":{"id":"72060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72061"},"selection_glyph":null,"view":{"id":"72063"}},"id":"72062","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72094"}},"id":"72098","type":"CDSView"},{"attributes":{"data_source":{"id":"72114"},"glyph":{"id":"72115"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72116"},"selection_glyph":null,"view":{"id":"72118"}},"id":"72117","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"72016"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"72019","type":"Grid"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72105","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72111","type":"Circle"},{"attributes":{"source":{"id":"72099"}},"id":"72103","type":"CDSView"},{"attributes":{},"id":"72171","type":"Selection"},{"attributes":{"overlay":{"id":"72028"}},"id":"72022","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72101","type":"Line"},{"attributes":{},"id":"72172","type":"UnionRenderers"},{"attributes":{},"id":"72021","type":"PanTool"},{"attributes":{},"id":"72020","type":"ResetTool"},{"attributes":{},"id":"72026","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72110","type":"Circle"},{"attributes":{},"id":"72187","type":"Selection"},{"attributes":{},"id":"72023","type":"WheelZoomTool"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"72195"},"selection_policy":{"id":"72196"}},"id":"72104","type":"ColumnDataSource"},{"attributes":{},"id":"72188","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"72029"}},"id":"72024","type":"LassoSelectTool"},{"attributes":{"source":{"id":"72104"}},"id":"72108","type":"CDSView"},{"attributes":{},"id":"72025","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72106","type":"Line"},{"attributes":{"source":{"id":"72044"}},"id":"72048","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72115","type":"Line"},{"attributes":{"data_source":{"id":"72044"},"glyph":{"id":"72045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72046"},"selection_glyph":null,"view":{"id":"72048"}},"id":"72047","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72119"},"glyph":{"id":"72120"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72121"},"selection_glyph":null,"view":{"id":"72123"}},"id":"72122","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72197"},"selection_policy":{"id":"72198"}},"id":"72109","type":"ColumnDataSource"},{"attributes":{},"id":"72173","type":"Selection"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"72205"},"selection_policy":{"id":"72206"}},"id":"72129","type":"ColumnDataSource"},{"attributes":{},"id":"72174","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"72109"},"glyph":{"id":"72110"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72111"},"selection_glyph":null,"view":{"id":"72113"}},"id":"72112","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72039"}},"id":"72043","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72055","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72050","type":"Circle"},{"attributes":{"source":{"id":"72109"}},"id":"72113","type":"CDSView"},{"attributes":{"data_source":{"id":"72049"},"glyph":{"id":"72050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72051"},"selection_glyph":null,"view":{"id":"72053"}},"id":"72052","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72129"},"glyph":{"id":"72130"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72131"},"selection_glyph":null,"view":{"id":"72133"}},"id":"72132","type":"GlyphRenderer"},{"attributes":{},"id":"72189","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72046","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72120","type":"Line"},{"attributes":{},"id":"72190","type":"UnionRenderers"},{"attributes":{"below":[{"id":"72012"}],"center":[{"id":"72015"},{"id":"72019"}],"left":[{"id":"72016"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"72042"},{"id":"72047"},{"id":"72052"},{"id":"72057"},{"id":"72062"},{"id":"72067"},{"id":"72072"},{"id":"72077"},{"id":"72082"},{"id":"72087"},{"id":"72092"},{"id":"72097"},{"id":"72102"},{"id":"72107"},{"id":"72112"},{"id":"72117"},{"id":"72122"},{"id":"72127"},{"id":"72132"},{"id":"72137"},{"id":"72142"},{"id":"72147"},{"id":"72152"},{"id":"72157"}],"title":{"id":"72159"},"toolbar":{"id":"72030"},"toolbar_location":null,"x_range":{"id":"72161"},"x_scale":{"id":"72008"},"y_range":{"id":"72162"},"y_scale":{"id":"72010"}},"id":"72003","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"72171"},"selection_policy":{"id":"72172"}},"id":"72044","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72126","type":"Circle"},{"attributes":{"source":{"id":"72114"}},"id":"72118","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72045","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72116","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72041","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72125","type":"Circle"},{"attributes":{},"id":"72175","type":"Selection"},{"attributes":{"source":{"id":"72049"}},"id":"72053","type":"CDSView"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"72201"},"selection_policy":{"id":"72202"}},"id":"72119","type":"ColumnDataSource"},{"attributes":{},"id":"72176","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"72173"},"selection_policy":{"id":"72174"}},"id":"72049","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72119"}},"id":"72123","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72121","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72028","type":"BoxAnnotation"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"72181"},"selection_policy":{"id":"72182"}},"id":"72069","type":"ColumnDataSource"},{"attributes":{},"id":"72191","type":"Selection"},{"attributes":{"data_source":{"id":"72069"},"glyph":{"id":"72070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72071"},"selection_glyph":null,"view":{"id":"72073"}},"id":"72072","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"72169"},"selection_policy":{"id":"72170"}},"id":"72039","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72130","type":"Line"},{"attributes":{"data_source":{"id":"72134"},"glyph":{"id":"72135"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72136"},"selection_glyph":null,"view":{"id":"72138"}},"id":"72137","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72060","type":"Line"},{"attributes":{},"id":"72192","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72066","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"72203"},"selection_policy":{"id":"72204"}},"id":"72124","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72054"}},"id":"72058","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"72211"},"selection_policy":{"id":"72212"}},"id":"72144","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72056","type":"Line"},{"attributes":{"data_source":{"id":"72124"},"glyph":{"id":"72125"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72126"},"selection_glyph":null,"view":{"id":"72128"}},"id":"72127","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72124"}},"id":"72128","type":"CDSView"},{"attributes":{"data_source":{"id":"72144"},"glyph":{"id":"72145"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72146"},"selection_glyph":null,"view":{"id":"72148"}},"id":"72147","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72070","type":"Line"},{"attributes":{},"id":"72177","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72065","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72135","type":"Line"},{"attributes":{},"id":"72178","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"72177"},"selection_policy":{"id":"72178"}},"id":"72059","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72141","type":"Circle"},{"attributes":{"source":{"id":"72059"}},"id":"72063","type":"CDSView"},{"attributes":{"source":{"id":"72129"}},"id":"72133","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72061","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72131","type":"Line"},{"attributes":{},"id":"72193","type":"Selection"},{"attributes":{},"id":"72194","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"72084"},"glyph":{"id":"72085"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72086"},"selection_glyph":null,"view":{"id":"72088"}},"id":"72087","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72029","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72187"},"selection_policy":{"id":"72188"}},"id":"72084","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72140","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"72179"},"selection_policy":{"id":"72180"}},"id":"72064","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"72207"},"selection_policy":{"id":"72208"}},"id":"72134","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72134"}},"id":"72138","type":"CDSView"},{"attributes":{"data_source":{"id":"72064"},"glyph":{"id":"72065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72066"},"selection_glyph":null,"view":{"id":"72068"}},"id":"72067","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72136","type":"Line"},{"attributes":{"source":{"id":"72064"}},"id":"72068","type":"CDSView"},{"attributes":{},"id":"72179","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72080","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72145","type":"Line"},{"attributes":{},"id":"72180","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"72074"},"glyph":{"id":"72075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72076"},"selection_glyph":null,"view":{"id":"72078"}},"id":"72077","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72149"},"glyph":{"id":"72150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72151"},"selection_glyph":null,"view":{"id":"72153"}},"id":"72152","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72081","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"72209"},"selection_policy":{"id":"72210"}},"id":"72139","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72069"}},"id":"72073","type":"CDSView"},{"attributes":{},"id":"72195","type":"Selection"},{"attributes":{"data_source":{"id":"72139"},"glyph":{"id":"72140"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72141"},"selection_glyph":null,"view":{"id":"72143"}},"id":"72142","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72071","type":"Line"},{"attributes":{},"id":"72196","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"72183"},"selection_policy":{"id":"72184"}},"id":"72074","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72139"}},"id":"72143","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72150","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72075","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72156","type":"Circle"},{"attributes":{"source":{"id":"72074"}},"id":"72078","type":"CDSView"},{"attributes":{"source":{"id":"72144"}},"id":"72148","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72076","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72146","type":"Line"},{"attributes":{},"id":"72181","type":"Selection"},{"attributes":{},"id":"72182","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72085","type":"Line"},{"attributes":{"data_source":{"id":"72089"},"glyph":{"id":"72090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72091"},"selection_glyph":null,"view":{"id":"72093"}},"id":"72092","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72155","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72020"},{"id":"72021"},{"id":"72022"},{"id":"72023"},{"id":"72024"},{"id":"72025"},{"id":"72026"},{"id":"72027"}]},"id":"72030","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"72185"},"selection_policy":{"id":"72186"}},"id":"72079","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"72213"},"selection_policy":{"id":"72214"}},"id":"72149","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72099"},"glyph":{"id":"72100"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72101"},"selection_glyph":null,"view":{"id":"72103"}},"id":"72102","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72149"}},"id":"72153","type":"CDSView"},{"attributes":{},"id":"72197","type":"Selection"},{"attributes":{"data_source":{"id":"72079"},"glyph":{"id":"72080"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72081"},"selection_glyph":null,"view":{"id":"72083"}},"id":"72082","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72151","type":"Line"},{"attributes":{},"id":"72198","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"72175"},"selection_policy":{"id":"72176"}},"id":"72054","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72079"}},"id":"72083","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72090","type":"Line"},{"attributes":{"data":{},"selected":{"id":"72191"},"selection_policy":{"id":"72192"}},"id":"72094","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"72215"},"selection_policy":{"id":"72216"}},"id":"72154","type":"ColumnDataSource"},{"attributes":{"text":"94.0% HDI"},"id":"72159","type":"Title"},{"attributes":{"source":{"id":"72084"}},"id":"72088","type":"CDSView"},{"attributes":{},"id":"72183","type":"Selection"},{"attributes":{"data_source":{"id":"72154"},"glyph":{"id":"72155"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72156"},"selection_glyph":null,"view":{"id":"72158"}},"id":"72157","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72086","type":"Line"},{"attributes":{},"id":"72184","type":"UnionRenderers"},{"attributes":{"source":{"id":"72154"}},"id":"72158","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72051","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72040","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72091","type":"Line"},{"attributes":{},"id":"72199","type":"Selection"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72189"},"selection_policy":{"id":"72190"}},"id":"72089","type":"ColumnDataSource"},{"attributes":{},"id":"72200","type":"UnionRenderers"},{"attributes":{"source":{"id":"72089"}},"id":"72093","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72095","type":"Circle"},{"attributes":{},"id":"72166","type":"BasicTickFormatter"},{"attributes":{},"id":"72215","type":"Selection"},{"attributes":{},"id":"72216","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"72221"},"toolbar_location":"above"},"id":"72222","type":"ToolbarBox"},{"attributes":{},"id":"72201","type":"Selection"},{"attributes":{},"id":"72168","type":"BasicTickFormatter"},{"attributes":{},"id":"72202","type":"UnionRenderers"},{"attributes":{},"id":"72203","type":"Selection"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"72163","type":"FixedTicker"},{"attributes":{},"id":"72204","type":"UnionRenderers"},{"attributes":{"children":[{"id":"72222"},{"id":"72220"}]},"id":"72223","type":"Column"},{"attributes":{},"id":"72205","type":"Selection"},{"attributes":{},"id":"72206","type":"UnionRenderers"},{"attributes":{},"id":"72207","type":"Selection"},{"attributes":{},"id":"72208","type":"UnionRenderers"},{"attributes":{},"id":"72010","type":"LinearScale"},{"attributes":{"data_source":{"id":"72054"},"glyph":{"id":"72055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72056"},"selection_glyph":null,"view":{"id":"72058"}},"id":"72057","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"72161","type":"DataRange1d"},{"attributes":{"formatter":{"id":"72166"},"ticker":{"id":"72013"}},"id":"72012","type":"LinearAxis"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"72193"},"selection_policy":{"id":"72194"}},"id":"72099","type":"ColumnDataSource"},{"attributes":{},"id":"72209","type":"Selection"},{"attributes":{},"id":"72210","type":"UnionRenderers"},{"attributes":{},"id":"72211","type":"Selection"},{"attributes":{},"id":"72212","type":"UnionRenderers"},{"attributes":{},"id":"72013","type":"BasicTicker"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"72162","type":"DataRange1d"},{"attributes":{},"id":"72213","type":"Selection"},{"attributes":{},"id":"72214","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"72030"}],"tools":[{"id":"72020"},{"id":"72021"},{"id":"72022"},{"id":"72023"},{"id":"72024"},{"id":"72025"},{"id":"72026"},{"id":"72027"}]},"id":"72221","type":"ProxyToolbar"},{"attributes":{},"id":"72008","type":"LinearScale"},{"attributes":{},"id":"72169","type":"Selection"}],"root_ids":["72223"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"418ec8ec-680e-41d0-abfe-f59139370e8b","root_ids":["72223"],"roots":{"72223":"74e2253e-60fe-42ff-a7fd-ff61483b17a4"}}];
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