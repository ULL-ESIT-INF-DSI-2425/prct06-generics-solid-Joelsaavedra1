// Respuesta: Se está violando el principio "Single responsibility principle", ya que la clase "FileManager" es responsable de más de una tarea, en este caso de leer y escribir archivos. Por lo tanto, se debe dividir la clase "FileManager" en dos clases, una para leer archivos y otra para escribir archivos.
// Además, se está violando el principio "Dependency inversion principle", ya que la clase "FileManager" depende directamente de la clase "fs" de Node.js. Por lo tanto, se debe crear una clase para la lectura y escritura de archivos, y que las clases "FileReader" y "FileWriter" hagan uso de esta.

import * as fs from "fs";

/**
 * Interfaz para operaciones de lectura de archivos
 */
interface IFileReader {
  read(filePath: string): string;
}

/**
 * Interfaz para operaciones de escritura de archivos
 */
interface IFileWriter {
  write(filePath: string, data: string): void;
}

/**
 * Clase para la implementación concreta de la lectura de archivos con 'fs'
 */
export class FileReader implements IFileReader {
  /**
   * Este método lee el contenido de un archivo y lo devuelve como una cadena de texto
   * @param filePath - Ruta del archivo a leer
   * @returns El contenido del archivo como una cadena de texto o una cadena vacía si hay un error
   */
  public read(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return "";
    }
  }
}

/**
 * Clase para la implementación concreta de la escritura de archivos con 'fs'
 */
export class FileWriter implements IFileWriter {
  /**
   * Este método escribe datos en un archivo
   * @param filePath - Ruta del archivo a escribir
   * @param data - Datos a escribir en el archivo
   */
  public write(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}

/**
 * Clase para la gestión de archivos
 */
export class FileManager {
  /**
   * Constructor de la clase FileManager que recibe la ruta del archivo, un lector de archivos y un escritor de archivos
   * @param filePath - Ruta del archivo
   * @param fileReader - Implementación de la lectura de archivos
   * @param fileWriter - Implementación de la escritura de archivos
   */
  constructor(
    private filePath: string,
    private fileReader: IFileReader,
    private fileWriter: IFileWriter,
  ) {}

  /**
   * Este método lee el contenido de un archivo
   * @returns El contenido del archivo como una cadena de texto
   */
  public readFile(): string {
    return this.fileReader.read(this.filePath);
  }

  /**
   * Este método escribe datos en un archivo
   * @param data - Datos a escribir en el archivo
   */
  public writeFile(data: string): void {
    this.fileWriter.write(this.filePath, data);
  }
}
