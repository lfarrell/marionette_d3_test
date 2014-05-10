ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        template: "#contact-list-item",
        tagName: "tr",

        events: {
            "click": "highlightName",
            "click button.js-delete": "deleteClicked"
        },

        highlightName: function() {
            this.$el.toggleClass("warning");
        },

        deleteClicked: function(e){
            e.stopPropagation();
            this.trigger("contact:delete", this.model);
        },

        remove: function() {
            var self = this;
            this.$el.fadeOut(function() {
               Marionette.ItemView.prototype.remove.call(self);
            });
        },

        alertName: function(e) {
            alert($(e.target).text());
        }
    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        itemView: List.Contact,
        itemViewContainer: "tbody"
    });
});