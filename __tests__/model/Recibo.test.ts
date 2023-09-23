import { Recibo } from "../../src/model/Recibo";

describe("Recibo", () => {
    test("criar recibo", () => {
        const recibo = new Recibo();
        expect(recibo.codigo.length).toBe(6);
    });
});