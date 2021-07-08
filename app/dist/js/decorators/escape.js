export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape Classe: ${this.constructor.name}; Método: ${propertyKey}`);
            const exp = /<script>[\s\S]*?<\/script>/;
            retorno = retorno.replace(exp, '');
        }
        return retorno;
    };
    return descriptor;
}
