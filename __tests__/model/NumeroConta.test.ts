import { NumeroConta } from "../../src/model/NumeroConta";

describe("Número Conta", () => {
    test("conta com seis dígitos", () => {
        const numeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("conta com quatro digitos", () => {
        expect(() => { new NumeroConta("3456"); }).toThrow("número de conta inválida");
    });

    test("conta com sete digitos", () => {
        expect(() => { new NumeroConta("1234567"); }).toThrow("número de conta inválida");
    });

    test("conta com valor que não seja digito", () => {
        expect(() => { new NumeroConta("abc456"); }).toThrow("número de conta inválida");
    });
});