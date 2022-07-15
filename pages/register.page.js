import BasePage from '../pages/base.page';

class RegisterPage extends BasePage {


    //WebElements
    get inputFirstName(){ return $("#customer_firstname") }

    get inputLastName(){ return $("#customer_lastname") }

    get inputEmail(){ return $('#email')}

    get inputPassword(){ return $('#passwd')}

    get dropDownDays(){ return $('#days')}

    get dropDownMonths(){ return $('#months')}

    get dropDownYears(){ return $('#years')}

    get inputFirstNameAddress(){ return $("#firstname") }

    get inputLastNameAddress(){ return $("#lastname") }

    get inputAddress(){ return $('#address1')}

    get inputCity(){ return $('#city')}

    get dropDownState(){ return $('#id_state')}

    get inputPostalCode(){ return $('#postcode')}

    get dropDownCountry(){ return $('#id_country')}

    get inputPhoneMobile(){ return $('#phone_mobile')}

    get btnRegister(){ return $('#submitAccount')}

    get labelNombreUsuario(){ return $("//a[@title='View my customer account']//span")}

    //-------------------------------------------------------------------------------------------------------//
 
    /**
     * seleccionar title
     */

    async seleccionarGenero(title){
        let elem = await $(`//label[contains(., '${title}')]//input[@name = 'id_gender']`);
        await elem.click();
    }

    async ingresarDatosPersonales(firstName, lastName, password, day, month, year, address, city, state, postCode, country, phoneMobile ){
        addStep(`Ingresar Datos Personales: ${firstName}, ${lastName}, ${password}, ${day}, ${month}, ${year}, ${address}, ${city}, ${state}, ${postCode}, ${country}, ${phoneMobile} `)
        await super.vaciarCampoYEnviarTexto(await this.inputFirstName, firstName);
        await super.vaciarCampoYEnviarTexto(await this.inputLastName, lastName);
        await super.vaciarCampoYEnviarTexto(await this.inputPassword, password);
        await this.dropDownDays.selectByIndex(day);
        await this.dropDownMonths.selectByAttribute('value',month);
        await this.dropDownYears.selectByAttribute('value',year);
        await super.vaciarCampoYEnviarTexto(await this.inputFirstNameAddress, firstName);
        await super.vaciarCampoYEnviarTexto(await this.inputLastNameAddress, lastName);
        await super.vaciarCampoYEnviarTexto(await this.inputAddress, address);
        await super.vaciarCampoYEnviarTexto(await this.inputCity, city);
        await this.dropDownState.selectByVisibleText(state);
        await super.vaciarCampoYEnviarTexto(await this.inputPostalCode, postCode);
        await this.dropDownCountry.selectByVisibleText(country);
        await super.vaciarCampoYEnviarTexto(await this.inputPhoneMobile, phoneMobile);
        await this.clickearElemento(this.btnRegister);
    }

    /**
     * Obtener nombre cliente registrado
     */

    async obtenerLabelNombreUsuario() {
        addStep('Obtener nombre cliente registrado')
        await this.labelNombreUsuario.waitForDisplayed();
        return await this.labelNombreUsuario.getText();
    }
 
 }
 export default new RegisterPage();