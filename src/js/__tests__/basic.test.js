import { getBuffer, ArrayBufferConverter } from "../app";

test('Проверка перевода буфера в строку', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.toString(buffer)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})