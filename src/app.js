(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "witsec-page-name",
        events: {
            load: function() {
                var a = this;
                a.addFilter("pageNameFullEdit", function() {
                    return !0
                })
            }
        }
    })
})(jQuery, mbrApp);