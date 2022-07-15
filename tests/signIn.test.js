import signIn from '../pages/signin.page';
import homePage from '../pages/home.page';
import DATOS from '../datos/login';
import datosRegiter from '../datos/register';
import registerPage from '../pages/register.page'

describe('SignIn', () => {    
    describe('LogIn', function(){
        DATOS.forEach(({email,pass}) => {
            it(`Login ${email}`,  async () => { 
                await homePage.abrir('/');
                await homePage.clickBtnSignIn();
                await expect(await signIn.isVisibleLabelAlredyRegistered()).to.equal(true);
                await signIn.login(email, pass);
                await signIn.esperarTiempo(5);
                if(email == ''){
                    await expect(await signIn.obtenerLabelError()).to.contain('An email address required.');
                }
                else{
                    if(email.includes('incorrecto')){
                        await expect(await signIn.obtenerLabelError()).to.contain('Authentication failed.');
                    }
                    else{
                        await expect(await signIn.isVisiblelabelMyAccount()).to.equal(true);
                        await signIn.clickBtnLogOut();
                        await signIn.esperarTiempo(5);
                    }
                    
                }
                
                
            });
        });
    });


    describe('LogIn', () =>{
        it('Register Account',  async () => { 
            await homePage.abrir('/');
            expect(await browser.checkElement(await $(".nav"), "wdio-headerContainer", {})).equal(0);
            await homePage.clickBtnSignIn();
            await signIn.ingresarYEnviarEmailCreateAccount();
            await signIn.esperarTiempo(5);
            await expect(await signIn.isVisibleLabelYourPersonalInformation()).to.equal(true);
            await registerPage.seleccionarGenero(datosRegiter.title);
            await registerPage.ingresarDatosPersonales(datosRegiter.firstName,datosRegiter.lastName,datosRegiter.password, datosRegiter.day, datosRegiter.month, datosRegiter.year, datosRegiter.address, datosRegiter.city, datosRegiter.state,
                datosRegiter.postalCode, datosRegiter.country, datosRegiter.mobileNumber);
            await registerPage.esperarTiempo(5);
            await expect(await registerPage.obtenerLabelNombreUsuario()).to.equal(datosRegiter.firstName +' '+datosRegiter.lastName);
            expect(await browser.checkElement(await $('.nav'), 'wdio-headerContainer', {})).to.not.equal(0);
        });
    });
});