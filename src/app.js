defineM("witsec-page-name", function(jQuery, mbrApp, TR) {
    mbrApp.regExtension({
        name: "witsec-page-name",
        events: {
            load: function() {
                var a = this;

                // Allow rename of page name extension
                a.addFilter("pageNameFullEdit", function() {
                    return true;
                });

                // Additional page fields
                a.$body.find("#app-page-settings .app-layer-cont").append([
                    '<div class="form-group">',
                    '  <label for="page_header_custom">Inside &lt;head&gt; code:</label>',
                    '  <textarea id="page_header_custom" class="form-control" data-page-settings="header_custom" rows="5" placeholder="Paste any valid HTML code here. The code will be inserted to the end of &lt;head&gt section, right before &lt;/head&gt"></textarea>',
                    '</div>',
                    '<div class="form-group">',
                    '  <label for="page_footer_custom">End of &lt;body&gt; code:</label>',
                    '  <textarea id="page_footer_custom" class="form-control" data-page-settings="footer_custom" rows="5" placeholder="Paste any valid HTML code here. The code will be inserted to the end of <body> section, right before &lt;/body&gt; tag"></textarea>',
                    '</div>',
                    '<div class="form-group">',
                    '  <label for="page_before_html">Before &lt;!DOCTYPE&gt;, &lt;html&gt; and &lt;head&gt; tags:</label>',
                    '  <textarea id="page_before_html" class="form-control" data-page-settings="html_before" rows="5" placeholder="Paste the code you want to have in the VERY FIRST LINE of your page, before &lt;!DOCTYPE&gt;, <html> and <head> tags. Use for server side scripts (PHP, ASP, etc)"></textarea>',
                    '</div>'].join("\n")
                );

                // Global HTML Inserts
				a.addFilter("sidebarProjectSettings", function (b) {
					var c = {
						title: "witsec's Global HTML",
						name: "witsec-global-html-insert",
						html: [
                            '<div class="form-group col-md-12">',
                            '  <label class="control-label" for="global_header_custom">Before &lt;/head> code:</label>',
                            '  <textarea id="global_header_custom" rows="5" placeholder="Paste the HTML code you want to have on every page, right before &lt;/head> tag" class="form-control witsec-global-html-insert">' + (a.projectSettings["global_header_custom"] || '') + '</textarea>',
                            '</div>',
                            '<div class="form-group col-md-12">',
                            '  <label class="control-label" for="global_after_body">After &lt;body> code:</label>',
                            '  <textarea id="global_after_body" rows="5" placeholder="Paste the HTML code you want to have on every page, right after &lt;body> tag" class="form-control witsec-global-html-insert">' + (a.projectSettings["global_after_body"] || '') + '</textarea>',
                            '</div>',
                            '<div class="form-group col-md-12">',
                            '  <label class="control-label" for="global_footer_custom">Before &lt;/body> code:</label>',
                            '  <textarea id="global_footer_custom" rows="5" placeholder="Paste the HTML code you want to have on every page, right before &lt;/body> tag" class="form-control witsec-global-html-insert">' + (a.projectSettings["global_footer_custom"] || '') + '</textarea>',
                            '</div>',
                            '<div class="form-group col-md-12">',
                            '  <label class="control-label" for="global_before_html">Before &lt;!DOCTYPE>, &lt;html> and &lt;head> tags:</label>',
                            '  <textarea id="global_before_html" rows="5" placeholder="Paste the code you want to have in the VERY FIRST LINE of your page, before &lt;!DOCTYPE>, &lt;html> and &lt;head> tags. Use for server side scripts (PHP, ASP, etc)" class="form-control witsec-global-html-insert">' + (a.projectSettings["global_before_html"] || '') + '</textarea>',
                            '</div>'
						].join("\n")
					};
					b.push(c);
                    return b;
                });
                
				// Respond to enabling/disabling "Sender as From Email"
				mbrApp.$body.on("change", ".witsec-global-html-insert", function () {
                    var t = $(this);
                    a.projectSettings[ t.attr("id") ] = t.val();
				});


            }
        }
    })
}, ["jQuery", "mbrApp", "TR()"]);