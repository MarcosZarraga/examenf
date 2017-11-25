import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	fecha: DS.attr('date'),
	folio: DS.attr('number'),
	serie: DS.attr('string'),
	formaPago: DS.attr('number'),
	conceptos: DS.hasMany('concepto'),
	subTotal : Ember.computed('conceptos', function(){
		let suma = 0;
		this.get('conceptos', 'conceptos.[]').forEach((concepto) => {
			suma += concepto.get('importe');
		});
		return suma;
		// var suma;
		// for(var i=0; i<model.conceptos.length; i++){
		// 	suma+=item.get('importe');
		// }
		// return suma;
	})


});
