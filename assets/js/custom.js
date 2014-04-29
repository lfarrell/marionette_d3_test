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

    ContactManager.ContactCollection = Backbone.Collection.extend({
        model: ContactManager.Contact
    })

    ContactManager.ContactItemView = Marionette.ItemView.extend({
        template: "#contact-template",
        tagName: "li"
    });

    ContactManager.ContactsView = Marionette.CollectionView.extend({
        tagName: "ul",
        itemView: ContactManager.ContactItemView
    })

    ContactManager.on("initialize:after", function() {
        var contacts = new ContactManager.ContactCollection([
             {
                firstName: "Bob",
                lastName: "Brigham",
                phoneNumber: "555-0163"
            },
            {
                firstName: "Alice",
                lastName: "Arten",
                phoneNumber: "555-0184"
            },
            {
                firstName: "Charlie",
                lastName: "Campbell",
                phoneNumber: "555-0129"
            }
        ]);

        var contactsListView = new ContactManager.ContactsView({
            collection: contacts
        });

        ContactManager.mainRegion.show(contactsListView);
    });

    ContactManager.start();
});