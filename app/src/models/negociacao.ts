export class Negociacao {   
    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    
    get data(): Date {
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dateStr: string, quantidadeStr: string, valorStr: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ','));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(date, quantidade, valor);
    }
}