// No se cumple con el principio SOLID Open-closed principle, ya que si queremos añadir otro tipo de servicio de notificación, tendríamos que modificar la clase Notifier. Para esto
// se crea una interfaz NotificationService que define un método notify y dos clases EmailService y ShortMessageService que implementan la interfaz NotificationService. Si quisiéramos
// añadir otro tipo de servicio de notificación, solo tendríamos que crear una clase que implemente la interfaz NotificationService.

/**
 * Interfaz para una notificación
 */
interface NotificationService {
  notify(message: string): void;
}

/**
 * Clase EmailService que implementa la interfaz NotificationService
 */
export class EmailService implements NotificationService {
  /**
   * Este método envía una notificación por email
   * @param message - Mensaje a enviar
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Clase ShortMessageService que implementa la interfaz NotificationService
 */
export class ShortMessageService implements NotificationService {
  /**
   * Este método envía una notificación por SMS
   * @param message - Mensaje a enviar
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Clase Notifier que recibe un servicio de notificación y envía una notificación
 */
export class Notifier {
  /**
   * Constructor de la clase Notifier
   * @param notificationService - Servicio de notificación
   */
  constructor(private notificationService: NotificationService) {}
  /**
   * Este método envía una notificación con el servicio de notificación correspondiente
   * @param message - Mensaje a enviar
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
