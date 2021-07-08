import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(private seletor: string) {
        const elemento = document.querySelector(this.seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${this.seletor} não existe no DOM`);
        }
    }

    protected abstract template(model: T): string;

    @inspect()
    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}