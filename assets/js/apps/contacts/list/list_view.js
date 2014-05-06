ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        template: "#contact-template",
        tagName: "tr"
    });

    List.Contacts = Marionette.CollectionView.extend({
        tagName: "table",
        className: "table table-hover",
        itemView: List.Contact
    });
});