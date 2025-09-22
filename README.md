Formulario React con Bootstrap y Validaciones
Este proyecto implementa un formulario de registro de usuario desarrollado en React con estilos de Bootstrap 5 y validaciones dinámicas en tiempo real.

📋 Prerrequisitos
Antes de comenzar, asegúrate de tener instalado:

Node.js (versión 14 o superior)
npm (viene incluido con Node.js)

🛠️ Instalación
Paso 1: Clonar el repositorio
bashgit clone https://github.com/rcornejom06/TRABAJO_EXPERIMENTAL_2-DESARROLLO-WEB.git
cd TRABAJO_EXPERIMENTAL_2-DESARROLLO-WEB
Paso 2: Instalar dependencias
bashnpm install
Paso 3: Ejecutar el proyecto
bashnpm start
El formulario estará disponible en http://localhost:3000

📝 Funcionalidades del Formulario
Campos de entrada:

Nombre: Requiere al menos 2 caracteres
Correo: Debe tener formato de email válido (ejemplo@dominio.com)
Contraseña: Debe tener al menos 8 caracteres

Validaciones implementadas:

✅ Validación en tiempo real: Se ejecuta mientras el usuario escribe
✅ Validación al perder foco: Se ejecuta cuando el usuario sale del campo
✅ Validación al enviar: Se ejecuta al hacer submit del formulario
✅ Feedback visual: Los campos cambian de color según su estado

🟢 Verde = Campo válido
🔴 Rojo = Campo con errores


✅ Mensajes específicos: Error personalizado para cada tipo de validación

Características adicionales:

📊 Contador de caracteres para la contraseña
📱 Diseño responsivo adaptable a móviles y tablets
🧹 Limpieza automática del formulario tras envío exitoso
♿ Accesibilidad con labels asociados a inputs

🎨 Clases de Bootstrap Utilizadas
Layout responsivo:
container - Contenedor principal
row - Sistema de filas
col-md-6 col-lg-4 - Columnas responsivas
justify-content-center - Centrado horizontal

Componentes:

card - Tarjeta contenedora
card-header - Encabezado con fondo azul
card-body - Cuerpo del formulario
card-footer - Pie con texto informativo
shadow - Sombra elegante

Formularios:

form-label - Etiquetas de campos
form-control - Estilos de inputs
is-valid / is-invalid - Estados de validación
invalid-feedback - Mensajes de error
form-text - Texto de ayuda

Botones y utilidades:

btn btn-primary btn-lg - Botón principal grande
d-grid - Layout de botón completo
mb-3 - Márgenes entre campos
text-white - Texto blanco
bg-primary - Fondo azul

🏗️ Estructura del Código
src/
├── App.js          # Componente principal con toda la lógica
├── index.js        # Punto de entrada de React
├── App.css         # Estilos adicionales (si los hay)
└── index.css       # Estilos globales

🧪 Pruebas del Formulario
Para probar las validaciones:

Nombre inválido:

Escribir solo 1 carácter → Error: "El nombre debe tener al menos 2 caracteres"


Email inválido:

Escribir "correo" → Error: "Email inválido"
Escribir "correo@" → Error: "Email inválido"
Correcto: "correo@ejemplo.com" → ✅ Válido


Contraseña inválida:

Escribir "123" → Error: "Mínimo 8 caracteres" + Contador: 3/8
Escribir "12345678" → ✅ Válido


Envío del formulario:

Con errores → Muestra todos los errores
Sin errores → Alert de éxito + limpia formulario


🚀 Comandos Disponibles
En el directorio del proyecto puedes ejecutar:
npm start
Ejecuta la aplicación en modo desarrollo.
Abre http://localhost:3000 en el navegador.
npm run build
Construye la aplicación para producción en la carpeta build.
npm test
Ejecuta las pruebas en modo interactivo.
npm run eject
Nota: Esta operación es irreversible.

📱 Compatibilidad

✅ Desktop: Todas las resoluciones
✅ Tablet: iPad y similares
✅ Mobile: iPhone, Android
✅ Navegadores: Chrome, Firefox, Safari, Edge

