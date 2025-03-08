// No se cumple con el principio SOLID "Interface segregation principle" ya que la clase Penguin no debería implementar el método fly() ya que no puede volar.
// Se debe crear una interfaz Flyable que contenga el método fly() y que la clase Sparrow implemente dicha interfaz.
// La clase Bird debe ser una clase abstracta que contenga los atributos y comportamientos comunes de todas las aves.
// La clase Penguin y Sparrow debe extender de la clase Bird.

/**
 * Interfaz Flyable que contiene el método fly()
 */
interface Flyable {
  fly(): void;
}

/**
 * Clase abstracta Bird que contiene los atributos y comportamientos comunes de todas las aves
 */
export abstract class Bird {}

/**
 * Clase Sparrow que extiende de Bird e implementa la interfaz Flyable
 */
export class Sparrow extends Bird implements Flyable {
  /**
   * Método fly() que imprime "Flying..."
   */
  fly(): void {
    console.log("Flying...");
  }
}

/**
 * Clase Penguin que extiende de Bird
 */
export class Penguin extends Bird {}
