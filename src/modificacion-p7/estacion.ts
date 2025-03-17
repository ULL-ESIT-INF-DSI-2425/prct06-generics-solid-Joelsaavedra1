import { Observable, Observer } from "./interfaces.js";

/**
 * Enumerable con los posibles cambios que puede haber en la estación meteorológica
 */
export enum ChangeType {
  "SIN_CAMBIO",
  "STORM",
  "TEMPERATURE",
}

/**
 * Clase que representa una estación meteorológica
 */
export class EstacionMeteorologica implements Observable {
  private observers: Observer[] = [];
  private change: ChangeType = ChangeType.SIN_CAMBIO;
  public cadena: string = "";
  /**
   * Constructor de la clase
   * @param name - Nombre de la estación meteorológica
   * @param country - País de la estación meteorológica
   */
  constructor(
    private name: string,
    private country: string,
  ) {}
  /**
   * Este método se encarga de actualizar el cambio de la estación meteorológica
   * @param change - Cambio que ha habido en la estación meteor
   */
  setChange(change: ChangeType) {
    this.change = change;
  }
  /**
   * Este método devuelve los observers de la estación meteorológica
   * @returns Devuelve los observers de la estación meteorológica
   */
  getObservers() {
    return this.observers;
  }
  /**
   * Este método devuelve el cambio que ha habido en la estación meteorológica
   * @returns Devuelve el cambio que ha habido en la estación meteorológica
   */
  getChange() {
    return this.change;
  }
  /**
   * Este método devuelve el nombre de la estación meteorológica
   * @returns Devuelve el nombre de la estación meteorológica
   */
  getName() {
    return this.name;
  }
  /**
   * Este método devuelve el país de la estación meteorológica
   * @returns Devuelve el país de la estación meteorológica
   */
  getCountry() {
    return this.country;
  }
  /**
   * Este método se encarga de subscribir un observer a la estación meteorológica
   * @param observer - Observer que se va a subscribir
   */
  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }
  /**
   * Este método se encarga de desubscribir un observer a la estación meteorológica
   * @param observer - Observer que se va a desubscribir
   */
  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }
  /**
   * Este método se encarga de notificar a los observers de la estación meteorológica
   */
  notify() {
    this.observers.forEach(observer => {
      this.cadena += observer.update(this) + "\n";
    });
  }
  /**
   * Este método se encarga de cambiar el tipo de cambio a temperatura
   */
  changeTemperature() {
    this.change = ChangeType.TEMPERATURE;
    this.notify();
  }
  /**
   * Este método se encarga de cambiar el tipo de cambio a tormenta
   */
  stormIncoming() {
    this.change = ChangeType.STORM;
    this.notify();
  }
}

/**
 * Clase que representa un teléfono observer
 */
export class Telefono implements Observer {
  /**
   * Constructor de la clase
   * @param model - Modelo del teléfono
   */
  constructor(private model: string) {}
  /**
   * Este método devuelve el modelo del teléfono
   * @returns Devuelve el modelo del teléfono
   */
  getModel() {
    return this.model;
  }
  /**
   * Este método se encarga de actualizar al observer
   * @param observable - Observable que ha cambiado
   * @returns Devuelve un mensaje con la alerta
   */
  update(observable: Observable): string {
    if (observable instanceof EstacionMeteorologica) {
      switch (observable.getChange()) {
        case ChangeType.TEMPERATURE:
          return `Soy el móvil con modelo ${this.model} y me ha llegado una alerta de cambio de temperatura de la estación ${observable.getName()} en ${observable.getCountry()}`;
        case ChangeType.STORM:
          return `Soy el móvil con modelo ${this.model} y me ha llegado una alerta de tormenta de la estación ${observable.getName()} en ${observable.getCountry()}`;
        default:
          return `Soy el móvil con modelo ${this.model} y no tengo alertas de la estación ${observable.getName()} en ${observable.getCountry()}`;
      }
    }
  }
}

/**
 * Clase que representa un panel observer
 */
export class Panel implements Observer {
  /**
   * Constructor de la clase
   * @param location - Ubicación del panel
   */
  constructor(private location: string) {}
  /**
   * Este método devuelve la ubicación del panel
   * @returns Devuelve la ubicación del panel
   */
  getLocation() {
    return this.location;
  }
  /**
   * Este método se encarga de actualizar al observer
   * @param observable - Observable que ha cambiado
   * @returns Devuelve un mensaje con la alerta
   */
  update(observable: Observable): string {
    if (observable instanceof EstacionMeteorologica) {
      switch (observable.getChange()) {
        case ChangeType.TEMPERATURE:
          return `Soy el panel de información en ${this.location} y me ha llegado una alerta de cambio de temperatura de la estación ${observable.getName()} en ${observable.getCountry()}`;
        case ChangeType.STORM:
          return `Soy el panel de información en ${this.location} y me ha llegado una alerta de tormenta de la estación ${observable.getName()} en ${observable.getCountry()}`;
        default:
          return `Soy el panel de información en ${this.location} y no tengo alertas de la estación ${observable.getName()} en ${observable.getCountry()}`;
      }
    }
  }
}


const estacion_espana = new EstacionMeteorologica(
  "estacion principal",
  "españa",
);
const telefono = new Telefono("alcatel");
const panel = new Panel("la laguna"); 

estacion_espana.subscribe(panel);
estacion_espana.subscribe(telefono);

estacion_espana.changeTemperature();