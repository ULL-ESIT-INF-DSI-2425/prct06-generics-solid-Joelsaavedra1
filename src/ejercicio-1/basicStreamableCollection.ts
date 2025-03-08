import { StreamableSearch, StreamableModify } from "./interfaces";

/**
 * Clase abstracta que implementa la interfaz Streamable y define el comportamiento de las colecciones de elementos streamables(series, películas o documentales).
 */
export abstract class BasicStreamableCollection<T> implements StreamableSearch<T>, StreamableModify<T> {
  /**
   * Constructor de la clase BasicStreamableCollection que recibe una lista de elementos streamables(series, peliculas, documentales).
   * @param items - Lista de elementos streamables.
   */
  constructor(protected items: T[]) {}
  /**
   * Método que añade un elemento streamable a la lista de elementos.
   * @param item - Elemento streamable a añadir a la lista de elementos.
   */
  addItem(item: T): void {
    this.items.push(item);
  }
  /**
   * Método que devuelve la lista de elementos streamables.
   * @returns Lista de elementos streamables.
   */
  getItems(): T[] {
    return this.items;
  }
  /**
   * Método abstracto que busca elementos streamables por nombre.
   * @param name - Nombre del elemento streamable a buscar.
   * @returns Lista de elementos streamables que coinciden con el nombre.
   */
  abstract searchByName(name: string): T[];
  /**
   * Método abstracto que busca elementos streamables por año.
   * @param year - Año del elemento streamable a buscar.
   * @returns Lista de elementos streamables que coinciden con el año.
   */
  abstract searchByYear(year: number): T[];
}
