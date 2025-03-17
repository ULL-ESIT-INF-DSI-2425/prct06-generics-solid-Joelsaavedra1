import { Serie, StreamableSeries } from "./interfaces.js";
import { BasicStreamableCollection } from "./basicStreamableCollection.js";

/**
 * Clase SerieCollection que implementa la interfaz StreamableSeries y hereda de BasicStreamableCollection.
 * Esta clase representa una colección de series.
 */
export class SerieCollection
  extends BasicStreamableCollection<Serie>
  implements StreamableSeries
{
  /**
   * Constructor de la clase SeriesCollection que recibe una lista de series.
   * @param series - Lista de series.
   */
  constructor(public readonly series: Serie[]) {
    super(series);
  }
  /**
   * Método que busca series por el nombre especificado.
   * @param name - Nombre de la serie a buscar.
   * @returns Una lista de series que contienen el nombre especificado.
   */
  searchByName(name: string): Serie[] {
    return this.items.filter((serie) => serie.title.includes(name));
  }
  /**
   * Método que busca series por el año especificado.
   * @param year - Año de la serie a buscar.
   * @returns Una lista de series que contienen el año especificado.
   */
  searchByYear(year: number): Serie[] {
    return this.items.filter((serie) => serie.year === year);
  }
  /**
   * Método que busca series por la cantidad de temporadas especificada.
   * @param seasons - Cantidad de temporadas de la serie a buscar.
   * @returns Una lista de series que contienen la cantidad de temporadas especificada.
   */
  searchBySeasons(seasons: number): Serie[] {
    return this.items.filter((serie) => serie.seasons === seasons);
  }
}
