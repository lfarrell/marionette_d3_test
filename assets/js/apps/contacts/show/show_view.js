ContactManager.module("ContactsApp.Show", function(Show, ContactsManager, Backbone, Marionette, $, _) {
    Show.Contact = Marionette.ItemView.extend({
        template: "#contact-view"
    });
});