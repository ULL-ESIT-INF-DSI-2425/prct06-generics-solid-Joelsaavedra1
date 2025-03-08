import { Movie, StreamableMovies } from "./interfaces";
import { BasicStreamableCollection } from "./basicStreamableCollection";

/**
 * Clase MovieCollection que implementa la interfaz StreamableMovies y hereda de BasicStreamableCollection.
 * Esta clase representa una colección de películas.
 */
export class MovieCollection
  extends BasicStreamableCollection<Movie>
  implements StreamableMovies
{
  /**
   * Constructor de la clase MovieCollection que recibe una lista de películas.
   * @param movies - Lista de películas.
   */
  constructor(public readonly movies: Movie[]) {
    super(movies);
  }
  /**
   * Método que busca películas por el nombre especificado.
   * @param name - Nombre de la película a buscar.
   * @returns Una lista de películas que contienen el nombre especificado.
   */
  searchByName(name: string): Movie[] {
    return this.items.filter((movie) => movie.title.includes(name));
  }
  /**
   * Método que busca películas por el año especificado.
   * @param year - Año de la película a buscar.
   * @returns Una lista de películas que contienen el año especificado.
   */
  searchByYear(year: number): Movie[] {
    return this.items.filter((movie) => movie.year === year);
  }
  /**
   * Método que busca películas por la duración especificada.
   * @param duration - Duración de la película a buscar.
   * @returns Una lista de películas que contienen la duración especificada.
   */
  searchByDuration(duration: number): Movie[] {
    return this.items.filter((movie) => movie.duration === duration);
  }
}
