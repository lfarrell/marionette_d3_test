ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        template: "#contact-list-item",
        tagName: "tr",

        events: {
            "click": "highlightName",
            "click td a.js-show": "showClicked",
            "click button.js-delete": "deleteClicked"
        },

        highlightName: function() {
            this.$el.toggleClass("warning");
            console.log(this.model.attributes.firstName, this.model.attributes.lastName);
        },

      /*  deleteClicked: function(e){
            e.stopPropagation();
            this.trigger("contact:delete", this.model);
        }, */

        showClicked: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("contact:show", this.model);
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