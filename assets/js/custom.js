(window.onload = function() {
    var ContactManager = new Marionette.Application();

    ContactManager.addRegions({
        mainRegion: "#main-region"
    });

    ContactManager.Contact = Backbone.Model.extend({
        defaults: {
            firstName: "",
            phoneNumber: "No phone number"
        }

    });

    ContactManager.ContactView = Marionette.ItemView.extend({
        template: "#contact-template",
        events: {
            "click p": "alertPhoneNumber"
        },
        alertPhoneNumber: function() {
            alert(this.model.escape("phoneNumber"));
        }
    });

    ContactManager.on("initialize:after", function() {
        var alice = new ContactManager.Contact({
            firstName: "Alice",
            lastName: "Arten"

        });

        var aliceView = new ContactManager.ContactView({
            model: alice
        });

        ContactManager.mainRegion.show(aliceView);
    });

    ContactManager.start();
});