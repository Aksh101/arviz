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
    
      
      
    
      var element = document.getElementById("9fc10f0b-de21-404e-8d84-d441e0da45a0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9fc10f0b-de21-404e-8d84-d441e0da45a0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"dfc66b1c-a177-4997-8809-bb41d9c1397d":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"72833","type":"Line"},{"attributes":{},"id":"72810","type":"WheelZoomTool"},{"attributes":{},"id":"72812","type":"UndoTool"},{"attributes":{},"id":"72843","type":"UnionRenderers"},{"attributes":{},"id":"72791","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72816","type":"PolyAnnotation"},{"attributes":{},"id":"72797","type":"LinearScale"},{"attributes":{},"id":"72842","type":"Selection"},{"attributes":{},"id":"72795","type":"LinearScale"},{"attributes":{},"id":"72845","type":"UnionRenderers"},{"attributes":{},"id":"72838","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"72815"}},"id":"72809","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"/4u7y7epyj+pINb+CADMP7QPbmkfVs0/IFmDC/urzj92/oryzQDQP4z9EvuAq9A/0qlZnxZW0T9JA1/fjgDSP/AJI7vpqtI/yL2lMidV0z/PHudFR//TPwct5/RJqdQ/builPy9T1T8HUSMm9/zVP9BmX6ihptY/yClaxi5Q1z/ymROAnvnXP0q3i9Xwotg/1IHCxiVM2T+O+bdTPfXZP3gebHw3nto/k/DeQBRH2z/ebxCh0+/bP1icAJ11mNw/BHavNPpA3T/e/BxoYendP+owSTerkd4/jxQ0otc53z+295xQppzfP6UE0cVNG+A/9/PkdLFp4D9H3LGtn7XgP23JSAg/AuE/OmzypyRQ4T9qjLvs5Z/hPzZDdw3n8+E/F79wQIBN4j/U4VgVosDiP+3YlJDLS+M/NrP9nn724z9Zwdku+ZbkP9hkP99sD+U/TxDr5K1D5T8RIJYMgXnlPyURzJH0sOU/RF15LnPj5T9x0icRDRzmP1VdTZcXZOY/14vvorOc5j9aI+/e+cPmP8fEBsmHBOc/D+lNWmdl5z+QW88k9rPnP2FSmgE5Hug/fgIzN7ue6D/CJjhKjxLpPz7V1WBzduk/Xy3ZxBfM6T+6OqSkFhXqP/B5/zVvWOo/ZuhCKxW76j+/vEqWihvrP0Dag3HVm+s/4GuOCv/s6z+UKVm6hSDsPxt53ZhiMOw/bCawTsQ77D/yNKUD9k7sP+c49iQWb+w/h9C079TS7D9zwAftm0XtP/IxbwGwtu0/MNfptTTw7T9K82qFIlfuP/5lmYBeo+4/Hs/lpsXh7j9HoGgPvEHvPwAtTNX5o+8/ctvAebL97z8G2sZ0/h7wP29v0d8rUfA/GZSE8lSK8D80SkBF+sTwP2v079JmAvE/sSc8lx0v8T9KGEfm0nzxP7rD7eVqsPE/Hwe/mtXq8T/oXvK6FSfyP+e/qOSLX/I/oZjNP7eW8j+Mv5S3aevyP8JW6FmlNfM/9zYDxmRu8z96a1LWU6bzP2oiPDHExvM/XO63foHX8z9lB3w3BQr0P03WTVj4TfQ/5oLESJyQ9D/XfGZuM9X0P6WF20RQFfU/VErOw7ZJ9T9xWXmuuX31P95AmF2SuvU/pWfsF4n09T+VA94CdCb2P1zeGNIxYPY/gvfo7DyK9j8laRnud6L2PzKvOnGguPY/lzgSEgDQ9j92lRD7Eer2P5IsWLntDvc/4hiI8jUw9z8ASH663VL3PxQO2up0dPc/GWj3qpZ/9z92Mrwx3pr3Py+ZVUyHwfc/ivGlr6H69z8fZI2Bwzj4P8D06gU1fPg/c1D8JUDF+D/s9TAEv/b4P1EAQP6WK/k/jz+741lg+T/RxRI3NKj5PxWDzvT61vk/ILzmnTUP+j9bQlt4H0v6P11n/RyIgvo/1CGVx/G4+j+7Bawesu/6P55EvSMuJ/s/2mKDYEhT+z8PffMEfoH7PxUe/Qufwvs/QxyifvsJ/D/RpWQzwFX8P1Nh1gA6e/w/ci9fbNy2/D+q7jZuGev8P83hEGB8HP0/HyEbSzhS/T8kTQKHuo39P/oBqsYBrv0/mDEGgeDM/T9kPF8HaPL9PwWsTaeCBv4/4ggngRgj/j8LDPKMq1X+P4C4y9QChf4/XNHBxN+i/j/UCl1mSL7+PzEBfePj1v4/LvdtE37s/j/l4mv4B/7+P19UKQ6iDf8/0Z6ZCn0b/z9DhWcQyyf/P+zLVmRgM/8/JlweELU//z/ZFbMWT03/P0hlC6q4XP8/DEMfK4Bu/z8VNOgpOIP/P2j+QLwjm/8/bNYXP4Ou/z9nTfEXi8L/P4pwJRBg1/8///kyLCft/z95qN/VAgIAQMFK/u7XDwBAJBqjgAoeAEBjFc6KmiwAQIA8fw2IOwBAeY+2CNNKAEBQDnR8e1oAQAO5t2iBagBAlI+BzeR6AEABktGqpYsAQEzApwDEnABAdBoEzz+uAEB4oOYVGcAAQFpST9VP0gBAGTA+DeTkAEC1ObO91fcAQC5vruYkCwFAhNAviNEeAUC3XTei2zIBQMYWxTRDRwFAtPvYPwhcAUB+DHPDKnEBQCVJk7+qhgFAqbE5NIicAUAKRmYhw7IBQEgGGYdbyQFAZPJRZVHgAUBcChG8pPcBQO4qSOOgzw9Amhy8VNjTD0CTw3ERVNcPQNwfaRkU2g9AcjGibBjcD0BY+BwLYd0PQIx02fTt3Q9ADqbXKb/dD0DfjBeq1NwPQP4omXUu2w9AbHpcjMzYD0ApgWHurtUPQDQ9qJvV0Q9Aja4wlEDND0A11frX78cPQCyxBmfjwQ9AcUJUQRu7D0AEieNml7MPQOaEtNdXqw9AFzbHk1yiD0CWnBubpZgPQGS4se0yjg9AgImJiwSDD0DqD6N0GncPQKRL/qh0ag9AqzybKBNdD0AB43nz9U4PQBFBmgkdQA9AhTXdev40D0AQkVmA4CgPQB8BJKa3Gw9A1QuVa3kND0AAEElDHP4OQEidqGrU5A5APWxoudnMDkDDpNxPULYOQEq6lEbpoA5AS/kv3ViMDkBRh116VngOQPxi3KucZA5A2pi2WMFPDkDgACBKHTkOQOatPTTKIA5A2RW2oeEGDkDGGlfpo+gNQOdZm/ksyw1A9p9qWxqvDUBc4tKPTJANQKWLXGwIcg1ADVkRPX1XDUB3fVxiSjQNQA087IKBFg1A4KxwhIzvDECvBk8s4dIMQM7NOC6DvAxAyJiK+YqbDEB68yJvYnkMQJR/XsZtVgxAKKNG5LUyDEDg63ZOag4MQEDf8YcF9gtAuEq3dNDaC0B85TDJMbYLQLfYKZ2glwtAoixFv9GAC0A9VmIUnW0LQLaA7jnSUAtAG1UnJdU0C0CqyH8UphkLQPc/Ld+k/wpAKWwlARLoCkBeqoppZdMKQL96rEjWwQpA6luasLKrCkDOM58dMJ8KQK5SpuMhjgpA6jjPD5Z7CkAgdIMX520KQO50HA9QXwpAKiduStZPCkAYOw3nfT8KQJ14R1txLQpA08opYGQfCkDGf2uBqhIKQOdl9hLj+wlAwDy6rTLkCUBh7RTyQc8JQLt1iCvQtglAupr9IeqsCUCgssU59KYJQPDNA/JyowlARgDsoh+gCUCFDBDrlpMJQBaPL56ufglAR7Wq349pCUAoAW4qHk4JQMFVJrGEMAlAgbtQH1wXCUCN2AQIf/wIQJvGIUKY5AhATH6nJEHNCECOSocB/7YIQHTqmxSqnQhAE5uwU6Z5CEA0MWSa8FoIQJLa2eJ/RwhAox+i6j0vCEBE5EnPZR0IQAU0dz9I/gdAnvcRLlPTB0AVC7uCPbgHQMS0lwScoAdAxNdUuhaGB0BQAPkN8WkHQLzKpPxiTQdAgTSePBsiB0AZCyYgKPkGQAI4v5cz3QZAETShWqW+BkAaHjyy45wGQNqSTT7ReQZAXzkxc6hkBkBpJVOf/ksGQDDRU3lxMAZAq4iZRpoVBkDJPnDUpwYGQPM09mZX9wVAHmLRWxzhBUC+YOBRtcwFQNaMcccirwVA6E0dQfGWBUD//RTJU4IFQKPq1YVRaQVARsQGP+RPBUBoVWJydzcFQHe8usl+IwVAxCRbsn8UBUAsaUcqCQMFQLiBKwxF6gRAYPNuylTXBEDTcfaldMMEQBMiMlBBrQRA6igMA9eeBECW19vUGI4EQBzE+w3seQRANdhNtC9hBEAHUt/2LEQEQNrnJ8A7LARAptwenaYZBEC7n/5y9gMEQLNz/HZO8gNA2yi2OMvkA0BLprr279IDQFM8Nn5awQNADOgBF42vA0DksD5PTpsDQIE0RxgLggNAXLkyaUBsA0AkqhwgLGEDQHudz7USUANA3j4TH8M8A0BjBI2ZpCIDQLo1gY/DDANAVkT+kuD7AkBaXiXhIvACQCZEHuP83QJA05lcs5XHAkDdfOLMRbACQHVIbLbfmAJA/HLinDeCAkBnykMuBm4CQAkZqJbaWAJANonIcU1BAkB27vXLti0CQB0vA+QlGgJAw0nwuZoGAkBoPr1NFfMBQAwNap+V3wFArrX2rhvMAUBQOGN8p7gBQPCUrwc5pQFAkMvbUNCRAUAu3OdXbX4BQMvG0xwQawFAaIufn7hXAUADKkvgZkQBQJ2i1t4aMQFANvVBm9QdAUDOIY0VlAoBQGQouE1Z9wBA+gjDQyTkAECPw6339NAAQCJYeGnLvQBAtcYimaeqAEBGD62GiZcAQNYxFzJxhABAZi5hm15xAED0BIvCUV4AQIG1lKdKSwBADUB+Skk4AEA=","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"72842"},"selection_policy":{"id":"72843"}},"id":"72826","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"72799"}],"center":[{"id":"72802"},{"id":"72806"}],"left":[{"id":"72803"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72829"},{"id":"72834"}],"title":{"id":"72836"},"toolbar":{"id":"72817"},"toolbar_location":"above","x_range":{"id":"72791"},"x_scale":{"id":"72795"},"y_range":{"id":"72793"},"y_scale":{"id":"72797"}},"id":"72790","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"72803"},"dimension":1,"ticker":null},"id":"72806","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"72828","type":"Patch"},{"attributes":{"overlay":{"id":"72816"}},"id":"72811","type":"LassoSelectTool"},{"attributes":{},"id":"72840","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"72799"},"ticker":null},"id":"72802","type":"Grid"},{"attributes":{},"id":"72807","type":"ResetTool"},{"attributes":{},"id":"72804","type":"BasicTicker"},{"attributes":{"text":""},"id":"72836","type":"Title"},{"attributes":{},"id":"72813","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72807"},{"id":"72808"},{"id":"72809"},{"id":"72810"},{"id":"72811"},{"id":"72812"},{"id":"72813"},{"id":"72814"}]},"id":"72817","type":"Toolbar"},{"attributes":{"source":{"id":"72831"}},"id":"72835","type":"CDSView"},{"attributes":{"data_source":{"id":"72831"},"glyph":{"id":"72832"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72833"},"selection_glyph":null,"view":{"id":"72835"}},"id":"72834","type":"GlyphRenderer"},{"attributes":{},"id":"72800","type":"BasicTicker"},{"attributes":{},"id":"72793","type":"DataRange1d"},{"attributes":{"source":{"id":"72826"}},"id":"72830","type":"CDSView"},{"attributes":{"formatter":{"id":"72840"},"ticker":{"id":"72804"}},"id":"72803","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"RXCrIvbU/b/vIUPgwqb7v+BRBoXytvm/og3tF8yp+b8r4QfiWOb4v0/S5RFMkPa/iYkpqnbs9b9c9D9pNez1v+erJ75TLPW/h6E8m6MC87+t/12Olc/yvx3Y78z6qPK/S9EENXZr8b/P7c0WN03wv9t0TziGB++/ueAMMj2l7b9a7fHKQK/sv+3uDZMD6eq/9M69HC4Y6r+E1ecWrJnpv1byd+Ujnue/CZlehTKM57+/DK3ZuWnmvy7vR+UFpOS/4xrm4WVw5L+RbJ66B8fjv+rivxQgw+O/NXVqFwng4r/u/uKgkTjgv3mAwB91Md6/U5GUEw4C279mS4ftlvbZv5T6fo5Aw9i/J1pdbQHA2L/U9uVfx7fXvwTVXALbh9W/wouaS22N07+bGnYdZrbQvzE5Ic9ygcy/uZPW53j5y785HRd1x3vJv5n3X4Kc8Ma/B1D88RkDwb9b35SwIYW+v+AJ2GjHGLK/pvHj24f2kz/JbaTrDyeaP0Z4bx0GEKY/WcNuLZZVtj/Zrt11Oy+3PxsRhZPum7s/xU8NngKjvD9Fwmq3LI29P2kPCnkR1sE/7Rb18flgxT/DkXR8yaHFP08DTTlfRs4/B0G02UYfzz/F/5O5SDLQP1B5BEE1MdM/jSUIMPWk0z+u+Xxcsn/UP94H1sxG8NU/lFHZzDNb2D+oigzD/b/aP3zxzUfVI98/lOXwSZdV3z9Qdfb2RrjfP2PrPLDD798/8wT37lNI4j+K80TcS/LiP7bI2gmaB+M/jJauOS6i4z+T+mPilCrkP5XUGINTaOU/TTCsh7tg5z+nH0dZjPPnP61GiKbQL+k/xv7nByXk6T/WT+96WrvqP4F7TphwMOs/0zMjoiuj7D/uSvUvjb/sP5T8mErS1+w/iSTPbPJE7T94PqOXTEztPwdQoxyGZO0/q6z3eJTM7j82MNviUZDvP4jOx2weGfE/qVbqaFFV8z+7BMuJqqjzP9a4JTZawvc/M9dM3GCL+D+x81jTeRv8P6lF1PqQN/w/i4UUMq5R/T9gnxVnGTsAQN7A0oTSQQBANPzxvF9JBEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"3keq7oQV8T8Ib96PnizyPxDXfL2GJPM/L3kJ9Bkr8z9qD/yO04zzP9gWDffZt/Q/PDvrqsQJ9T/SBWBL5Qn1Pwwq7CDWafU/PK9hMq5+9j8qANE4NZj2P/ITiJmCq/Y/Wpd95URK9z8YCZl0ZNn3P8ki7HEePvg/0sd8s7CW+D+qhEPNL9T4P0WEPBu/Rfk/Q4zQePR5+T+fCkb6lJn5P2oDogZ3GPo/vlmoXvMc+j/QvJSJkWX6PzQErob+1vo/R3mGh+bj+j/cZFgRPg77P0YH0Po3D/s/s2Iluv1H+z9EQMeX2/H7P/HvB1zROfw/1m2NPb6f/D+TFk8iLcH8P64gMO6X5/w/u1RU0v/n/D8mQQMUBwn9P2BltJ8ET/0/iK6MVlKO/T+tPFE8M+n9P23sDdPoN/4/xJaCcWhA/j8sjq6IQ2j+P4YA2jf2kP4/ADvgYM7v/j8FWXvy1gv/P7E/ucQ5b/8/8uPbh/YTAEBupOsPJxoAQPHeOgwgLABADbu1WFZZAEC7dtftvFwAQEQUTrpvbgBAPzV4CoxyAEAJq92yNHYAQHtQyIuwjgBAt6iPzwerAECOpONLDq0AQBpoyvky8gBACKLNNvr4AED8P5mLJAMBQJVHEFQTMwFAWYIAU086AUCbz8cl+0cBQH5gzWwEXwFAGZXNPLOFAUCqyDDc/6sBQBjffFQ98gFAWQ6fdFn1AUBVZ29vhPsBQLbOAzv8/gFAnuDefQpJAkBxnoh7SV4CQBdZO0HzYAJA0tI1x0V0AkBSf0ycUoUCQJMaY3AKrQJACob1cBfsAkD14yiLcf4CQNYI0RT6JQNA2f/8oIQ8A0D76V1Pa1cDQHDPCRMOZgNAemZEdGWUA0Beqf6l8ZcDQJIfU0n6mgNAkeSZTZ6oA0DPZ/SSiakDQAFqlMOQrANAlfUej5LZA0AHZls8CvIDQKLzMZtHRgRAqpU6WlTVBEAvwXKiKuoEQDZuiY2W8AVAzTUTN9giBkDsPNZ03gYHQGoRtT7kDQdAYyGFjGtUB0Cwz4qzjB0IQG9gaULpIAhAGv543q8kCkA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"72844"},"selection_policy":{"id":"72845"}},"id":"72831","type":"ColumnDataSource"},{"attributes":{},"id":"72844","type":"Selection"},{"attributes":{},"id":"72808","type":"PanTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"72832","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72815","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"72838"},"ticker":{"id":"72800"}},"id":"72799","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"72827","type":"Patch"},{"attributes":{"callback":null},"id":"72814","type":"HoverTool"},{"attributes":{"data_source":{"id":"72826"},"glyph":{"id":"72827"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72828"},"selection_glyph":null,"view":{"id":"72830"}},"id":"72829","type":"GlyphRenderer"}],"root_ids":["72790"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"dfc66b1c-a177-4997-8809-bb41d9c1397d","root_ids":["72790"],"roots":{"72790":"9fc10f0b-de21-404e-8d84-d441e0da45a0"}}];
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