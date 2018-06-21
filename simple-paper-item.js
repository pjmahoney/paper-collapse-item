/**
A &lt;paper-item> that avoids problems with &lt;paper-input> children.

See <a href="https://github.com/PolymerElements/paper-item/issues/103">PolymerElements/paper-item#103</a> for details.

@polymer
*/
Polymer({
    is: 'simple-paper-item',
    behaviors: [
				Polymer.IronControlState,
				Polymer.PaperItemBehaviorImpl
    ]
});
