export class View {
    constructor(seletor) {
        this.seletor = seletor;
        const elemento = document.querySelector(this.seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${this.seletor} não existe no DOM`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
