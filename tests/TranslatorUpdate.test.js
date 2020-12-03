import TranslatorUpdate from "../src/TranslatorUpdate";

test('Default values', () => {
    const t = new TranslatorUpdate();

    expect(t.scale).toBe(1);
    expect(t.screenX).toBe(0);
    expect(t.screenY).toBe(0);
});

test('Modified Values', () => {
    const t = new TranslatorUpdate({
        screenX: 34,
    });

    expect(t.scale).toBe(1);
    expect(t.screenX).toBe(34);
});

test('Unknown key', () => {
    console.warn = jest.fn();

    const t = new TranslatorUpdate({
        typoX: 34,
    });

    expect(console.warn.mock.calls[0][0]).toBe('Unknown key typoX');
});
