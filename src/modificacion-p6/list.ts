/**
 * Clase MyList que implementa una lista y sus métodos
 */
export class MyList<T> {
  /**
   * Constructor
   * @param list - La lista que se le pasa
   */
  constructor(private list: T[] = []) {}

  /**
   * Introduce un elemento en la lista
   * @param element - Elemento a añadir
   */
  myPush(element: T) {
    this.list[this.length()] = element;
  }

  /**
   * Elimina el último elemento de la lista
   * @returns El elemento o undefined si la lista es vacía
   */
  myPop(): T | undefined {
    if (this.length() === 0) return undefined;
    const lastElement = this.list[this.length() - 1];
    delete this.list[this.length() - 1];
    return lastElement;
  }

  /**
   * Añade el conntenido de la segunda lista a la primera
   * @param list2 - Lista que añadirá a la primera
   * @returns La lista una vez hecho el append
   */
  append(list2: MyList<T>): MyList<T> {
    for (let i = 0; i < list2.length(); i++) {
      this.myPush(list2.list[i]);
    }
    return this;
  }

  /**
   * Concatena un número variable de listas
   * @param lists - Listas a concatenar
   * @returns La lista resultando de la concatenación
   */
  concatenate(...lists: MyList<T>[]): MyList<T> {
    for (const list of lists) {
      this.append(list);
    }
    return this;
  }

  /**
   * Se evalúa una lista y nos quedamos con los elementos que cumplan el predicado
   * @param predicate - Predicado a evaluar
   * @returns La lista con los elementos que cumplan el predicado
   */
  filter(predicate: (element: T) => boolean): MyList<T> {
    const newList = new MyList<T>();
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.list[i])) {
        newList.list[newList.length()] = this.list[i];
      }
    }
    return newList;
  }

  /**
   * Se devuelve el número de elementos de la lista
   * @returns La longitud de la lista
   */
  length(): number {
    return this.list.length;
  }

  /**
   * Se calcula una función para cada elemento de la lista
   * @param callback - Función a ejecutar
   * @returns La nueva lista una vez calculada la función para cada uno de sus elementos
   */
  map<U>(callback: (element: T) => U): MyList<U> {
    const newList = new MyList<U>();
    for (let i = 0; i < this.length(); i++) {
      newList.list[newList.length()] = callback(this.list[i]);
    }
    return newList;
  }

  /**
   * Este método realiza una función sobre la lista y devuelve el valor
   * @param callback - Función a realizar
   * @param initialValue - Valor inicial
   * @returns El valor de realizar la función
   */
  reduce<U>(callback: (accumulator: U, element: T) => U, initialValue: U): U {
    let accumulator = initialValue;
    for (let i = 0; i < this.length(); i++) {
      accumulator = callback(accumulator, this.list[i]);
    }
    return accumulator;
  }

  /**
   * Este método invierte una lista
   * @returns La nueva lista a la inversa
   */
  reverse(): MyList<T> {
    const newList = new MyList<T>();
    for (let i = this.length() - 1; i >= 0; i--) {
      newList.list[newList.length()] = this.list[i];
    }
    return newList;
  }

  /**
   * Itera en una lista y aplica la función a cada elemento
   * @param callback - Función a realizar
   */
  forEach(callback: (element: T) => T): void {
    for (let i = 0; i < this.length(); i++) {
      this.list[i] = callback(this.list[i]);
    }
  }
}