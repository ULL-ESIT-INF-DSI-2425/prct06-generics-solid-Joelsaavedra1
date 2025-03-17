import { Documentary, StreamableDocumentaries } from "./interfaces.js";
import { BasicStreamableCollection } from "./basicStreamableCollection.js";

/**
 * Clase DocumentaryCollection que implementa la interfaz StreamableDocumentaries y hereda de BasicStreamableCollection.
 * Esta clase representa una colección de documentales.
 */
export class DocumentaryCollection
  extends BasicStreamableCollection<Documentary>
  implements StreamableDocumentaries
{
  /**
   * Constructor de la clase DocumentaryCollection que recibe una lista de documentales.
   * @param documentaries - Lista de documentales.
   */
  constructor(public readonly documentaries: Documentary[]) {
    super(documentaries);
  }
  /**
   * Método que busca documentales por el nombre especificado.
   * @param name - Nombre del documental a buscar.
   * @returns Una lista de documentales que contienen el nombre especificado.
   */
  searchByName(name: string): Documentary[] {
    return this.items.filter((documentary) => documentary.title.includes(name));
  }
  /**
   * Método que busca documentales por el año especificado.
   * @param year - Año del documental a buscar.
   * @returns Una lista de documentales que contienen el año especificado.
   */
  searchByYear(year: number): Documentary[] {
    return this.items.filter((documentary) => documentary.year === year);
  }
  /**
   * Método que busca documentales por el tema especificado.
   * @param topic - Tema del documental a buscar.
   * @returns Una lista de documentales que contienen el tema especificado.
   */
  searchByTopic(topic: string): Documentary[] {
    return this.items.filter((documentary) => documentary.topic === topic);
  }
}
