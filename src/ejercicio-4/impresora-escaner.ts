// No se cumple con el principio SOLID "Interface segregation principle", ya que la interfaz PrintableScannable tiene más de una responsabilidad. De esta forma toda clase que implemente esta interfaz deberá implementar ambos métodos, aunque no los necesite.
// Por eso se crean dos interfaces separadas, una para imprimir y otra para escanear.

/**
 * Interfaz para imprimir
 */
interface Printable {
  print(): void;
}

/**
 * Interfaz para escanear
 */
interface Scannable {
  scan(): void;
}

/**
 * Clase Printer que implementa la interfaz Printable
 */
export class Printer implements Printable {
  /**
   * Método que imprime "Printing..." en pantalla
   */
  print(): void {
    console.log("Printing...");
  }
}

/**
 * Clase Scanner que implementa la interfaz Scannable
 */
export class Scanner implements Scannable {
  /**
   * Método que imprime "Scanning..." en pantalla
   */
  scan(): void {
    console.log("Scanning...");
  }
}

/**
 * Clase PrinterScanner que implementa las interfaces Printable y Scannable
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Método que imprime "Printing..." en pantalla
   */
  print(): void {
    console.log("Printing...");
  }

  /**
   * Método que imprime "Scanning..." en pantalla
   */
  scan(): void {
    console.log("Scanning...");
  }
}
