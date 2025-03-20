# Ejercicio 3
- Se viola el principio **"Single responsibility principle"**, ya que la clase "FileManager" es responsable de más de una tarea, en este caso de leer y escribir archivos. Por lo tanto, se debe dividir la clase "FileManager" en dos clases, una para leer archivos y otra para escribir archivos.
- Se viola el principio **"Dependency inversion principle"**, ya que la clase "FileManager" depende directamente de la clase "fs" de Node.js. Por lo tanto, se debe crear una clase para la lectura y escritura de archivos, y que las clases "FileReader" y "FileWriter" hagan uso de esta.

# Ejercicio 4
- Se viola el principio **"Interface segregation principle"**, ya que la interfaz PrintableScannable tiene más de una responsabilidad. De esta forma toda clase que implemente esta interfaz deberá implementar ambos métodos, aunque no los necesite. Por eso se crean dos interfaces separadas, una para imprimir y otra para escanear

# Ejercicio 5
- Se viola el principio **"Open-closed principle"**, ya que si queremos añadir otro tipo de servicio de notificación, tendríamos que modificar la clase Notifier. Para esto se crea una interfaz NotificationService que define un método notify y dos clases EmailService y ShortMessageService que implementan la interfaz NotificationService. Si quisiéramos añadir otro tipo de servicio de notificación, solo tendríamos que crear una clase que implemente la interfaz NotificationService.

# Ejercicio 6
- Se viola el principio **"Interface segregation principle"** ya que la clase Penguin no debería implementar el método fly() puesto que un pingüino no puede volar. Se debe crear una interfaz Flyable que contenga el método fly() y que la clase Sparrow implemente dicha interfaz. La clase Bird debe ser una clase abstracta que contenga los atributos y comportamientos comunes de todas las aves. La clase Penguin y Sparrow debe extender de la clase Bird.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-Joelsaavedra1/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-Joelsaavedra1?branch=main)
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-Joelsaavedra1/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-Joelsaavedra1/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2425_prct06-generics-solid-Joelsaavedra1&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2425_prct06-generics-solid-Joelsaavedra1)