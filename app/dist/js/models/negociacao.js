export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dateStr, quantidadeStr, valorStr) {
        const exp = /-/g;
        const date = new Date(dateStr.replace(exp, ','));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(date, quantidade, valor);
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map