Ext.define('djlmx.component.MetaDataComboBox', {
	extend: 'Ext.form.field.ComboBox',  
	alias: 'widget.metadatacombobox',  
	allowBlank : false,
    typeAhead: true,
    valueField : 'type',
	displayField : 'type',
    triggerAction: 'all',
    editable: false,
    store: 'ProtoBufferBasicTypeStore'
});