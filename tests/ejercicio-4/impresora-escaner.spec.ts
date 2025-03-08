import { test, describe, expect, vi } from "vitest";
import {
  Printer,
  Scanner,
  PrinterScanner,
} from "../../src/ejercicio-4/impresora-escaner";

const printer = new Printer();
const scanner = new Scanner();
const printerScanner = new PrinterScanner();

describe("Printer", () => {
  test("printer.print() should display Printing...", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    printer.print();
    expect(mockLog).toHaveBeenCalledWith("Printing...");
    console.log = global.console.log;
  });
});

describe("Scanner", () => {
  test("scanner.scan() should display Scanning...", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    scanner.scan();
    expect(mockLog).toHaveBeenCalledWith("Scanning...");
    console.log = global.console.log;
  });
});

describe("PrinterScanner", () => {
  test("printerScanner.print() should display Printing...", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    printerScanner.print();
    expect(mockLog).toHaveBeenCalledWith("Printing...");
    console.log = global.console.log;
  });

  test("printerScanner.scan() should display Scanning...", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    printerScanner.scan();
    expect(mockLog).toHaveBeenCalledWith("Scanning...");
    console.log = global.console.log;
  });
});
