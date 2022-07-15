import BasePage from './base.page';

class SignInPage extends BasePage {


    //WebElements
    
    get labelAlredyRegistered(){ return $("#login_form h3.page-subheading")}

    get inputEmail(){ return $('#email')}

    get inputPassword(){ return $('#passwd')}

    get btnSignIn(){ return $('#SubmitLogin')}

    get labelMyAccount(){ return $('.page-heading')}

    get labelError(){ return $('.alert-danger li')}

    get btnLogOut(){ return $('.logout')}

    get inputEmailCreate(){ return $('#email_create')}

    get btnSubmitCreate(){ return $('#SubmitCreate')}

    get labelYourPersonalInformation(){ return $("//h3[contains(text(),'Your personal information')]")}

    
    //-------------------------------------------------------------------------------------------------------//

    /**
     * valida si el elemento labelAlredyRegistered se encuentra desplegado en pantalla
     */

    async isVisibleLabelAlredyRegistered(){
        addStep('valida si el elemento labelAlredyRegistered se encuentra desplegado en pantalla')
        await this.labelAlredyRegistered.waitForDisplayed();
        return await this.labelAlredyRegistered.isDisplayed();
    }

    /**
     * valida si el elemento labelMyAccount se encuentra desplegado en pantalla
     */
    async isVisiblelabelMyAccount(){
        addStep('valida si el elemento labelMyAccount se encuentra desplegado en pantalla')
        await await this.labelMyAccount.waitForDisplayed();
        return await this.labelMyAccount.isDisplayed();
    }

    async login(email, pass){
        addStep(`Ingresar email, pass y presionar boton login: ${email} ${pass}`)
        await super.vaciarCampoYEnviarTexto(await this.inputEmail, email);
        await super.vaciarCampoYEnviarTexto(await this.inputPassword, pass);
        await this.clickearElemento(this.btnSignIn);
    }

    /**
     * obtener mensaje de error
     */
    async obtenerLabelError(){
        addStep('obtener mensaje de error')
        await await this.labelError.waitForDisplayed();
        return await this.labelError.getText();
    } 

    /**
     * click boton logout
     */    
    async clickBtnLogOut(){
        addStep('Click btn logOut')
        await this.btnLogOut.waitForClickable();
        await this.clickearElemento(this.btnLogOut);
    }

    /**
     * ingresar email para crear cuenta
     */

    async ingresarYEnviarEmailCreateAccount(){
        addStep('ingresar email para crear cuenta')
        await this.vaciarCampoYEnviarTexto(this.inputEmailCreate, new Date().getTime() +'@b.cl');
        await this.btnSubmitCreate.click();
    }

    /**
     * valida si el elemento your personal information se encuentra desplegado en pantalla
     */
     async isVisibleLabelYourPersonalInformation(){
        addStep('valida si el elemento labelMyAccount se encuentra desplegado en pantalla')
        this.labelYourPersonalInformation.waitForDisplayed();
        return await this.labelYourPersonalInformation.isDisplayed();
    }
 }
 export default new SignInPage();