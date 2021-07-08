export class View {
    constructor(seletor, escapar = false) {
        this.seletor = seletor;
        this.escapar = escapar;
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
        if (this.escapar) {
            const exp = /<script>[\s\S]*?<\/script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}
