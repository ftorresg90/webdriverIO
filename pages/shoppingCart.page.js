import BasePage from '../pages/base.page';

class ShoppingCartPage extends BasePage {


    //WebElements
    get shoppingCartSummary(){ return $("#cart_title") }

    

    
    //-------------------------------------------------------------------------------------------------------//
 
    /**
     * Obtener titulo shopping cart summary
     */
    async obtenerTituloShoppingCartSummary() {
        addStep('Obtener titulo shopping cart summary')
        return await this.shoppingCartSummary.getText();
    }

 
 }
 export default new ShoppingCartPage();