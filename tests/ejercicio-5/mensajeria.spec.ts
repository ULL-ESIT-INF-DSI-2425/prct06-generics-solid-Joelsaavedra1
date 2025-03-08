import { test, describe, expect, vi } from "vitest";
import {
  Notifier,
  ShortMessageService,
  EmailService,
} from "../../src/ejercicio-5/mensajeria";

const email = new EmailService();
const sms = new ShortMessageService();
const notifier1 = new Notifier(email);
const notifier2 = new Notifier(sms);

describe("email notify()", () => {
  test("email.notify() should return 'Sending notification by email: test'", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    email.notify("test");
    expect(mockLog).toHaveBeenCalledWith("Sending notification by email: test");
    console.log = global.console.log;
  });
});

describe("sms notify()", () => {
  test("sms.notify() should return 'Sending notification by SMS: test'", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    sms.notify("test");
    expect(mockLog).toHaveBeenCalledWith("Sending notification by SMS: test");
    console.log = global.console.log;
  });
});

describe("notifier1 sendNotification()", () => {
  test("notifier1.sendNotification() should return 'Sending notification by email: test'", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    notifier1.sendNotification("test");
    expect(mockLog).toHaveBeenCalledWith("Sending notification by email: test");
    console.log = global.console.log;
  });
});

describe("notifier2 sendNotification()", () => {
  test("notifier2.sendNotification() should return 'Sending notification by SMS: test'", () => {
    const mockLog = vi.fn();
    console.log = mockLog;
    notifier2.sendNotification("test");
    expect(mockLog).toHaveBeenCalledWith("Sending notification by SMS: test");
    console.log = global.console.log;
  });
});
