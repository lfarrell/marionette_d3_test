var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});

ContactManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function() {
    return Backbone.history.fragment;
}

ContactManager.on("initialize:after", function() {
    var contacts = ContactManager.request("contact:entities");
    var contactsListView = ContactManager.ContactsApp.List.Controller.listContacts();

    if(Backbone.history) {
        Backbone.history.start();

        if(Backbone.history.fragment === '') {
            Backbone.history.navigate("contacts");
            ContactManager.ContactsApp.List.Controller.listContacts();
        }
    }
});