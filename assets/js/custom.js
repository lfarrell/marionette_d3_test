(window.onload = function() {
    var ContactManager = new Marionette.Application();

    ContactManager.addRegions({
        mainRegion: "#main-region"
    });

    ContactManager.StaticView = Marionette.ItemView.extend({
        template: "#static-template"
    });

    ContactManager.on("initialize:after", function() {
        var staticView = new ContactManager.StaticView({
            template: "#list-item-template",
            tagName: "ul"
        });
        ContactManager.mainRegion.show(staticView);
    });

    ContactManager.start();
});