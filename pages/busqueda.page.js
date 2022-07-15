import BasePage from './base.page';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('.lighter') }

   get resultadoVacio(){ return $("//p[@class = 'alert alert-warning']")}

   get resultadosBusqueda() { return $$("//h5[@itemprop='name']//a")}

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
    addStep('Obtener texto del resultado de la búsqueda')
       return await this.resultado.getText();
   }


   /**
    * Obtener mensaje de alerta ingresar mensaje de busqueda
    */
    async obtenerAlertaIngresarMensajeBusqueda() {
      addStep('Obtener mensaje de alerta Please enter a search keyword')
         return await this.resultadoVacio.getText();
     }

   /**
    * click primer elemento de resultado de busqueda
    */
    async clickPrimerElementoResultadoBusqueda() {
      addStep('click primer elemento resultado de busqueda')
         await super.clickearElemento(this.resultadosBusqueda[0]);
     }

   /**
    * obtener nombre primer elemento encontrados
    */
     async getNombrePrimerElementoBusqueda() {
      addStep('obtener nombre primer elemento encontrado')
      return await this.resultadosBusqueda[0].getText();
     }
}

export default new BusquedaPage();