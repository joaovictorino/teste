export class Conta {
    private _numero: string;
    private _saldo: number;

    public constructor(numero: string, saldo: number){
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number) : void {
        this.validarValor(valor);

        if((this._saldo - valor) < 0)
            throw new Error("saldo indisponível para a operação")

        this._saldo -= valor;
    }

    public depositar(valor: number) : void {
        this.validarValor(valor);

        this._saldo += valor;
    }

    public get saldo(): number {
        return this._saldo;
    }

    private validarValor(valor: number) {
        if (valor <= 0)
            throw new Error("valor não pode ser igual ou menor que zero");
    }
}