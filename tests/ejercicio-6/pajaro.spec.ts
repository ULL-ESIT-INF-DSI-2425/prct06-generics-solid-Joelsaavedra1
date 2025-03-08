import { test, describe, expect, vi } from "vitest";
import { Sparrow } from "../../src/ejercicio-6/pajaro";

const sparrow = new Sparrow();

describe("sparrow fly()", () => {
  test("sparrow.fly() should return 'Flying...'", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    sparrow.fly();
    expect(mockLog).toHaveBeenCalledWith("Flying...");
    console.log = global.console.log;
  });
});