import './simple-paper-item.js';

Polymer({
		is: 'paper-collapse-item',
		properties: {
        /**
         * Text in the header row
         */
        header: String,

        /**
         * The name of the icon to use. The name should be of the
         * form: iconset_name:icon_name.
         */
        icon: String,

        /**
         * If using paper-collapse-item without an iconset, you can set the
         * src to be the URL of an individual icon image file. Note that
         * this will take precedence over a given icon attribute.
         */
        src: String,

        /**
         * True if the content section is opened
         */
        opened: {
            type: Boolean,
            reflectToAttribute: true,
            notify: true,
            observer: '_openedChanged'
        },

        _toggleIcon: {
            type: String,
            computed: '_computeToggleIcon(opened)'
        }
		},

		_openedChanged: function(value, old) {
        // Ignore initialization calls
        if (old !== undefined) {
            this.fire('toggle', this);
        }
		},
		// Private methods
		/**
		 * Fired whenever the status is changed (opened/closed)
		 *
		 * @event toggle
		 */
		_toggleOpened: function(e) {
        this.set('opened', !this.opened);
		},
		_computeToggleIcon: function(opened) {
        return opened ? 'icons:expand-less' : 'icons:expand-more';
		},
		_or: function(value1, value2) {
        return value1 || value2;
		}
});
