ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        template: "#contact-template",
        tagName: "li"
    });

    List.Contacts = Marionette.CollectionView.extend({
        tagName: "ul",
        itemView: List.Contact
    });
});