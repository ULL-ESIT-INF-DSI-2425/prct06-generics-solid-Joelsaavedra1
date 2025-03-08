/**
 * Interfaz abstracta que declara los métodos de modificación que debe implementar una clase que sea Streamable.
 */
export interface StreamableModify<T> {
  addItem(item: T): void;
  getItems(): T[];
}

/**
 * Interfaz que declara los métodos de búsqueda que debe implementar una clase que sea Streamable.
 */
export interface StreamableSearch<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
}

/**
 * Interfaz que declara el método adicional que debe implementar la clase StreamableSeries.
 */
export interface StreamableSeries {
  searchBySeasons(seasons: number): Serie[];
}

/**
 * Interfaz que declara el método adicional que debe implementar la clase StreamableMovies.
 */
export interface StreamableMovies {
  searchByDuration(duration: number): Movie[];
}

/**
 * Interfaz que declara el método adicional que debe implementar la clase StreamableDocumentaries.
 */
export interface StreamableDocumentaries {
  searchByTopic(topic: string): Documentary[];
}

/**
 * Interfaz que declara los atributos que debe tener un objeto de tipo Serie.
 */
export interface Serie {
  title: string;
  year: number;
  seasons: number;
}

/**
 * Interfaz que declara los atributos que debe tener un objeto de tipo Movie.
 */
export interface Movie {
  title: string;
  year: number;
  duration: number;
}

/**
 * Interfaz que declara los atributos que debe tener un objeto de tipo Documentary.
 */
export interface Documentary {
  title: string;
  year: number;
  topic: string;
}
