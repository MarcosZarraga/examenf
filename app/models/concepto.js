import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	descripcion : DS.attr('string'),
	cantidad: DS.attr('number'),
	precio: DS.attr('number'),
	descuento: DS.attr('number'),
	facturas: DS.belongsTo('factura'),
	importe: Ember.computed('precio', 'cantidad', function () {
		console.log('hue')
		return this.get('precio') * this.get('cantidad');
	})
});
