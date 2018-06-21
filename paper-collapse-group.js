Polymer({
		is: 'paper-collapse-group',

		properties: {
        /**
         * Array of observed paper-collapse-items
         *
         * @type {Array}
         */
        _items: {
            type: Array,
            notify: true,
            value: []
        }
		},

		listeners: {
        'toggle': '_onToggle'
		},

		/**
		 * Setup content observer
		 */
		ready: function(){
        this._observeItems();
		},

		/**
		 * Observe Items
		 *
		 * Setup an observer for newly added items
		 */
		_observeItems: function() {
        Polymer.dom(this.$.content).observeNodes(function(info) {
            var addedItems = info.addedNodes.filter(function(node) {
                return node.nodeName.toLowerCase() === 'paper-collapse-item';
            });

            if (addedItems.length > 0) {
                this._items = this._items.concat(addedItems);

                this.fire('update');
            }
        }.bind(this));
		},

		/**
		 * On Toggle
		 *
		 * Listen to fired toggle events from items and update the groups
		 *
		 * @param  {Event} e
		 */
		_onToggle: function(e){
        this._items.forEach(function(item) {
            // Force all other items (aside the one triggering the event) to
            // get closed
            if (item !== e.target && e.target.opened === true) {
                item.opened = false;
            }
        });
		}

});
