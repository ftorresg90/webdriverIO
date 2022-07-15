import BasePage from './base.page';

class ProductoPage extends BasePage {
    get nombreProducto () { return $("//div[@id = 'content']//h1") };
    get precioProducto () { return $("//div[@id = 'content']//ul//h2")} ;
    get btnAddToCart () {return $('#button-cart')};
    get dropDownColor () {return $('#input-option217')};
    
    /**
    * Obtiene el nombre del producto
    */

    async obtenerNombreProducto() {
        addStep('Obtiene el nombre del producto')
        return await this.nombreProducto.getText();
    }

    /**
    * retorna si es que el elemento btnAddToCart se encuentra visible
    */

    async isVisibleBtnAddToCart(){
        addStep('valida si el elemento se encuentra visible')
        return await this.btnAddToCart.isDisplayed();
    }

    /**
    * Seleccionar el color del producto
    */

    async seleccionarColorProducto(color){
        addStep(`Seleccionar el color: ${color}`)
        await this.dropDownColor.selectByVisibleText(color);  
    }
}

export default new ProductoPage();