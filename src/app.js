defineM("witsec-page-name", function(g, mbrApp, tr) {
    mbrApp.regExtension({
        name: "witsec-page-name",
        events: {
            load: function() {
                var a = this;
                a.addFilter("pageNameFullEdit", function() {
                    return !0
                });
                a.$body.find("#app-page-settings .app-layer-cont").append('<div class="form-group"><label for="page_header_custom">Inside &lt;head&gt; code:</label><textarea id="page_header_custom" class="form-control" data-page-settings="header_custom" rows="5" placeholder="Paste any valid HTML code here. The code will be inserted to the end of &lt;head&gt section, right before &lt;/head&gt"></textarea></div><div class="form-group"><label for="page_footer_custom">End of &lt;body&gt; code:</label><textarea id="page_footer_custom" class="form-control" data-page-settings="footer_custom" rows="5" placeholder="Paste any valid HTML code here. The code will be inserted to the end of <body> section, right before &lt;/body&gt; tag"></textarea></div><div class="form-group"><label for="page_before_html">Before &lt;!DOCTYPE&gt;, &lt;html&gt; and &lt;head&gt; tags:</label><textarea id="page_before_html" class="form-control" data-page-settings="html_before" rows="5" placeholder="Paste the code you want to have in the VERY FIRST LINE of your page, before &lt;!DOCTYPE&gt;, <html> and <head> tags. Use for server side scripts (PHP, ASP, etc)"></textarea></div>');
            }
        }
    })
}, ["jQuery", "mbrApp", "TR()"]);