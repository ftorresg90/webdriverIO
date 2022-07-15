import BasePage from '../pages/base.page';

class ProductoPage extends BasePage {


    //WebElements
    get nombreProducto(){ return $("//h1[@itemprop='name']") }

    get precioProducto(){ return $("#our_price_display") }

    get btnAddToCart(){ return $("#add_to_cart button")}

    get btnProceedToCheckout() { return $("[title = 'Proceed to checkout']")}

    get mensajeProductoAgregagoCorrectamente(){ return $("//i[@class = 'icon-ok']//parent::h2")}
 
 
    //-------------------------------------------------------------------------------------------------------//
 
    /**
     * Obtener nombre del producto seleccionado
     */
    async obtenerNombreProducto() {
        addStep('Obtener nombre del producto seleccionado')
        return await this.nombreProducto.getText();
    }


    /**
     * Obtener precio del producto seleccionado
     */
     async obtenerPrecioProducto() {
        addStep('Obtener nombre del producto seleccionado')
        return await this.precioProducto.getText();
    }

    /**
     * click boton add to cart
     */
     async clickBtnAddToCart() {
        addStep('click boton add to cart')
        await super.clickearElemento(this.btnAddToCart);
    }

    /**
     * click boton proceed to checkout
     */
    async clickBtnProceedToCheckout() {
        addStep('click boton proceed to checkout')
        await super.clickearElemento(this.btnProceedToCheckout);
    }
    
    /**
     * obtener mensaje producto agregado correctamente
     */
     async obtenerMensajeProductoAgregadoCorrectamente() {
        addStep('obtener mensaje producto agregado correctamente')
        await this.mensajeProductoAgregagoCorrectamente.waitForDisplayed();
        return await this.mensajeProductoAgregagoCorrectamente.getText();
    }

 
 }
 export default new ProductoPage();