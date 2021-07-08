import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(private seletor: string, private escapar: boolean = false) {
        const elemento = document.querySelector(this.seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${this.seletor} não existe no DOM`);
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) {
            const exp = /<script>[\s\S]*?<\/script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}