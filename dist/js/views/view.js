export class View {
    constructor(seletor, escapar = false) {
        this.seletor = seletor;
        this.escapar = escapar;
        this.elemento = document.querySelector(this.seletor);
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
