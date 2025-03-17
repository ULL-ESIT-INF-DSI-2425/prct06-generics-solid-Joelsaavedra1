import { describe, expect, test } from "vitest";
import {
  EstacionMeteorologica,
  Telefono,
  Panel,
  ChangeType,
} from "../../src/modificacion-p7/estacion";

const estacion_espana = new EstacionMeteorologica(
  "estacion principal",
  "españa",
);
const telefono = new Telefono("alcatel");
const panel = new Panel("la laguna");

describe("EstacionMeteorologica suscribe, unsuscribe and get observer test", () => {
  test("estacion_espana.suscribe(panel) should return [panel]", () => {
    estacion_espana.subscribe(panel);
    expect(estacion_espana.getObservers()).toStrictEqual([panel]);
  });
  test("estacion_espana.suscribe(telefono) should return [telefono, panel]", () => {
    estacion_espana.subscribe(telefono);
    expect(estacion_espana.getObservers()).toStrictEqual([panel, telefono]);
  });
});

describe("EstaciobMeteorologica setChange and getChange test", () => {
  test("estacion_espana.setChange(ChangeType.TEMPERATURE) should return ChangeType.TEMPERATURE", () => {
    estacion_espana.setChange(ChangeType.TEMPERATURE);
    expect(estacion_espana.getChange()).toBe(ChangeType.TEMPERATURE);
  });
  test("estacion_espana.setChange(ChangeType.STORM) should return ChangeType.STORM", () => {
    estacion_espana.setChange(ChangeType.STORM);
    expect(estacion_espana.getChange()).toBe(ChangeType.STORM);
  });
});

describe("EstacionMeteorologica getName and getCountry test", () => {
  test("estacion_espana.getName() should return 'estacion principal'", () => {
    expect(estacion_espana.getName()).toBe("estacion principal");
  });
  test("estacion_espana.getCountry() should return 'españa'", () => {
    expect(estacion_espana.getCountry()).toBe("españa");
  });
});

describe("Telefono getModel test", () => {
  test("telefono.getModel) should return 'alcatel'", () => {
    expect(telefono.getModel()).toBe("alcatel");
  });
});

describe("Cambio de temperatura test", () => {
  test("estacion_espana.changeTemperature() should return 'Soy el móvil con modelo alcatel y me ha llegado una alerta de tormenta de la estación estacion principal en españa'", () => {
    estacion_espana.changeTemperature();
    expect(estacion_espana.cadena).toBe('Soy el panel de información en la laguna y me ha llegado una alerta de cambio de temperatura de la estación estacion principal en españa\nSoy el móvil con modelo alcatel y me ha llegado una alerta de cambio de temperatura de la estación estacion principal en españa\n');
  });
});
