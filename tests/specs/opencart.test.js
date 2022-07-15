import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import productoPage from '../pages/producto.page';
import DATOS from '../datos/articulos';

describe('Opencart', () => {
    it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
         await homePage.abrir('/');
         let articulo = 'Apple Cinema'
         await homePage.buscar(articulo);
         await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
         await expect(await busquedaPage.obtenerNombreResultado()).contain(articulo);
         await busquedaPage.ingresarAlResultado();
         expect(await productoPage.isVisibleBtnAddToCart()).to.equal(true, 'Elemento no es visible');
         let opcionColor = 'Blue (+$3.60)';
         await productoPage.seleccionarColorProducto(opcionColor);
         await productoPage.esperarTiempo(3);
    });
});

/*describe('Búsqueda', function () {
    DATOS.forEach(({articulo}) => {
      it(`Debería buscar ${articulo}`, async ()=> {
        await homePage.abrir('/');
        await homePage.buscar(articulo);
        await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
        await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
      });
    });

    it('Comparación de imágenes con página de WebdriverIO', async () => {
        await browser.url('https://webdriver.io');
        await $(".navbar--fixed-top").waitForDisplayed();
        expect(
            await browser.checkElement(await $(".navbar--fixed-top"), "wdio-headerContainer", {
               
            }),
            "Error: la barra de navegación de WebdriverIO no coincide con la original"
        ).equal(0);
     
        await browser.url('https://webdriver.io/blog/');
        await $('.navbar--fixed-top').waitForDisplayed();
        expect(await browser.checkElement(await $('.navbar--fixed-top'), 'wdio-headerContainer', {})).to.not.equal(0);
     });

  });*/