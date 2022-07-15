import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import productoPage from '../pages/producto.page';
import shoppingCartSummary from '../pages/shoppingCart.page';

describe('Home Page', () => {
    it('Search an Item', async () => {
        await homePage.abrir('/');
        let articulo = 'DRESS'
        await homePage.buscar(articulo);
        await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect(await busquedaPage.obtenerNombreResultado()).contain(articulo);     
    });

    it('Search an Item with no keyword', async () => {
        await homePage.abrir('/');
        let articulo = '';
        let mensajeAlerta = 'Please enter a search keyword';
        await homePage.buscar(articulo);
        await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect(await busquedaPage.obtenerAlertaIngresarMensajeBusqueda()).contain(mensajeAlerta);
    });

    it('Add to Cart - proceed to checkout', async () => {
        await homePage.abrir('/');
        let articulo = 'DRESS'
        await homePage.buscar(articulo);
        await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect(await busquedaPage.obtenerNombreResultado()).to.contain(articulo);
        let nombrePrimerElemento = await busquedaPage.getNombrePrimerElementoBusqueda();
        await busquedaPage.clickPrimerElementoResultadoBusqueda();
        await expect(await productoPage.obtenerNombreProducto()).to.equal(nombrePrimerElemento);
        await productoPage.clickBtnAddToCart();
        await expect(await productoPage.obtenerMensajeProductoAgregadoCorrectamente()).to.equal('Product successfully added to your shopping cart');
        await productoPage.clickBtnProceedToCheckout();
        await expect(await shoppingCartSummary.obtenerTituloShoppingCartSummary()).to.contain('SHOPPING-CART SUMMARY');
    });
});