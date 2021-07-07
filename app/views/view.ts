export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(private seletor: string, private escapar: boolean = false) {
        this.elemento = document.querySelector(this.seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) {
            const exp = /<script>[\s\S]*?<\/script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}