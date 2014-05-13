var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});

ContactManager.on("initialize:after", function() {
    var contacts = ContactManager.request("contact:entities");
    var contactsListView = ContactManager.ContactsApp.List.Controller.listContacts();

    if(Backbone.history) {
        Backbone.history.start();

        if(Backbone.history.fragment == '') {
            Backbone.history.navigate("contacts");
            ContactManager.ContactsApp.List.Controller.listContacts();
        }
    }
});