import Translator from "../src/Translator";
import TranslatorUpdate from "../src/TranslatorUpdate";

test('Delta x/y', () => {
    const t = new Translator();

    t.start({
        screenX: 5,
        screenY: 5,
    });

    t.update(new TranslatorUpdate({
        screenX: 10,
        screenY: 0,
    }))

    t.done();

    expect(t.getValues().x).toBe(5);
    expect(t.getValues().y).toBe(-5);
});
