import { describe, expect, test } from "vitest";
import { FileManager, FileReader, FileWriter } from '../../src/ejercicio-3/fileManager';

const fileReader = new FileReader();
const fileWriter = new FileWriter();
const fileManager = new FileManager('test.txt', fileReader, fileWriter);

describe('FileWriter', () => {
  test('fileWriter.write("test.txt", "Hello, world!")', () => {
    fileWriter.write('test.txt', 'Hello, world!');
    expect(fileReader.read('test.txt')).toEqual('Hello, world!');
  });
});

describe('FileReader', () => {
  test('fileReader.read("test.txt")', () => {
    expect(fileReader.read('test.txt')).toEqual('Hello, world!');
  });
});

describe('FileManager read', () => {
  test('fileManager.readFile()', () => {
    expect(fileManager.readFile()).toEqual('Hello, world!');
  });

  test('fileManager.readFile() with invalid file', () => {
    const fileManager = new FileManager('invalid.txt', fileReader, fileWriter);
    expect(fileManager.readFile()).toEqual('');
  });
});

describe('FileManager write', () => {
  test('fileManager.writeFile("Goodbye, world!")', () => {
    fileManager.writeFile('Goodbye, world!');
    expect(fileReader.read('test.txt')).toEqual('Goodbye, world!');
  });
});

