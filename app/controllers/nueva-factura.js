import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addConcepto () {
			this.get('model.conceptos').createRecord();
		},
		saveFactura(descripcion, cantidad, precio, descuento) {
			this.get('model').save().then(()=>{
				swal(
  					'Correcto',
  					'Empleado añadido exitosamente',
  					'success'
				);
				this.transitionToRoute('main');
			}).catch(()=>{
				swal(
  					'Oops...',
 					 'Something went wrong!',
  					'error'
				)
			})
		}
	}
	
});
