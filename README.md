# 🎨 Catálogo de Componentes CSS

Un catálogo interactivo de componentes visuales modernos construidos exclusivamente con HTML y CSS puro, sin dependencias externas de frameworks o bibliotecas JavaScript.

## 🌟 Características

- **CSS Puro**: Todos los componentes están hechos únicamente con HTML y CSS
- **JavaScript Interactivo**: Funcionalidad JavaScript integrada para componentes avanzados
- **Diseño Moderno**: Componentes con diseños actuales y atractivos
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Accesible**: Considera las buenas prácticas de accesibilidad
- **Organizado**: Componentes categorizados y fáciles de encontrar
- **Interactividad Avanzada**: Modales, dropdowns, sliders, accordions y más
- **Animaciones Fluidas**: Transiciones y efectos visuales profesionales
- **Sistema de Temas**: Soporte para modo claro y oscuro
- **Código de Ejemplo**: Cada componente incluye código para implementar

## 📦 Componentes Incluidos

### 🔘 Botones
- **Botón Primario**: Botón principal con gradiente y animaciones
- **Botón Fantasma**: Botón con borde y efecto de llenado al hover
- **Botón Neomórfico**: Botón con efecto de profundidad 3D
- **Botón de Carga**: Botón con spinner de carga animado

### 📋 Tarjetas
- **Tarjeta Básica**: Tarjeta simple con sombra y hover
- **Tarjeta con Imagen**: Tarjeta con área de imagen y contenido
- **Tarjeta de Perfil**: Tarjeta de usuario con avatar y información personal
- **Tarjeta de Producto**: Tarjeta para mostrar productos con imagen y detalles
- **Tarjeta de Precios**: Tarjeta de planes de suscripción con características
- **Tarjeta de Estadísticas**: Tarjeta para mostrar métricas y datos importantes
- **Tarjeta de Dashboard**: Tarjeta con gráficos y progreso para paneles de control
- **Tarjeta de Notificación**: Tarjeta para alertas y mensajes del sistema
- **Tarjeta de Testimonio**: Tarjeta para mostrar reseñas y testimonios de usuarios

### 📝 Formularios
- **Input Flotante**: Campo de entrada con etiqueta flotante animada
- **Checkbox Personalizado**: Checkbox con diseño custom y animaciones
- **Toggle Switch**: Interruptor con animación suave y múltiples estados
- **Input de Búsqueda**: Campo de búsqueda con iconos y efectos visuales
- **Input de Calificación**: Sistema de calificación con estrellas interactivas
- **Formulario Multi-paso**: Formulario dividido en pasos con navegación
- **Subida de Archivos**: Componente drag & drop para subir archivos

### 🧭 Navegación
- **Navbar Horizontal**: Barra de navegación moderna y responsive
- **Navegación de Pestañas**: Sistema de pestañas con animaciones suaves
- **Sidebar Navegación**: Menú lateral colapsible con iconos
- **Menú Móvil**: Menú hamburguesa para dispositivos móviles
- **Breadcrumbs**: Navegación jerárquica tipo "migas de pan"

### 🔔 Feedback
- **Notificación Toast**: Alertas emergentes con múltiples estilos y posiciones
- **Alerta de Estado**: Alertas informativas con iconos y colores contextuales
- **Badge de Notificación**: Indicadores numericos y de estado
- **Progress Ring**: Indicadores circulares de progreso animados
- **Spinner de Carga**: Indicadores de carga con múltiples animaciones
- **Rating Display**: Sistema de calificación con estrellas
- **Tooltip Informativo**: Tooltips con información adicional

### 🎮 Componentes Interactivos
- **Modal/Dialog**: Ventanas modales con múltiples variantes (básico, grande, confirmación, pantalla completa)
- **Tooltip Dinámico**: Sistema de tooltips con posicionamiento automático y contenido HTML
- **Dropdown/Select**: Selectores avanzados con búsqueda, selección múltiple y opciones agrupadas
- **Slider/Range**: Controles deslizantes incluyendo rangos duales, verticales y con indicadores de temperatura
- **Color Picker**: Selectores de color con paletas predefinidas, gradientes y controles HSB
- **Tabs Component**: Sistema de pestañas con iconos, layout vertical y transiciones animadas
- **Accordion**: Componentes expandibles con múltiples estilos y modo exclusivo
- **Progress Indicators**: Barras de progreso, círculos, pasos y animaciones avanzadas
- **Toggle Switches**: Interruptores con iconos, etiquetas, múltiples tamaños y tarjetas integradas

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd astro-components-catalog
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── buttons/
│   │   │   ├── PrimaryButton.astro
│   │   │   ├── GhostButton.astro
│   │   │   ├── NeomorphicButton.astro
│   │   │   ├── LoadingButton.astro
│   │   │   ├── IconButton.astro
│   │   │   ├── FloatingButton.astro
│   │   │   ├── SocialButtons.astro
│   │   │   └── ProgressButton.astro
│   │   ├── cards/
│   │   │   ├── BasicCard.astro
│   │   │   ├── ImageCard.astro
│   │   │   ├── ProfileCard.astro
│   │   │   ├── ProductCard.astro
│   │   │   ├── PricingCard.astro
│   │   │   ├── StatsCard.astro
│   │   │   ├── DashboardCard.astro
│   │   │   ├── NotificationCard.astro
│   │   │   └── TestimonialCard.astro
│   │   ├── forms/
│   │   │   ├── FloatingInput.astro
│   │   │   ├── CustomCheckbox.astro
│   │   │   ├── ToggleSwitch.astro
│   │   │   ├── SearchInput.astro
│   │   │   ├── RatingInput.astro
│   │   │   ├── MultiStepForm.astro
│   │   │   ├── SimpleFileUpload.astro
│   │   │   └── AdvancedFileUpload.astro
│   │   ├── feedback/
│   │   │   ├── ToastNotification.astro
│   │   │   ├── AlertComponent.astro
│   │   │   ├── BadgeComponent.astro
│   │   │   ├── ProgressRing.astro
│   │   │   ├── LoadingSpinner.astro
│   │   │   ├── RatingDisplay.astro
│   │   │   └── TooltipInfo.astro
│   │   ├── interactive/
│   │   │   ├── ModalDialog.astro
│   │   │   ├── TooltipComponent.astro
│   │   │   ├── DropdownSelect.astro
│   │   │   ├── SliderRange.astro
│   │   │   ├── ColorPicker.astro
│   │   │   ├── TabsComponent.astro
│   │   │   ├── AccordionComponent.astro
│   │   │   ├── ProgressComponent.astro
│   │   │   └── ToggleComponent.astro
│   │   ├── navigation/
│   │   │   ├── HorizontalNav.astro
│   │   │   ├── TabNavigation.astro
│   │   │   ├── SidebarNav.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── Breadcrumbs.astro
│   │   └── demo/
│   │       └── ThemeDemo.astro
│   ├── util/
│   │   └── CodeViewer.astro
│   ├── ThemeToggle.astro
│   └── Welcome.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── styles/
│   ├── global.css
│   ├── card-base.css
│   ├── theme-utilities.css
│   └── utilities.css
└── assets/
    ├── astro.svg
    └── background.svg
```

## 🎯 Características Técnicas

- **Framework**: Astro.js para generación estática
- **Lenguajes**: HTML, CSS, TypeScript, JavaScript
- **Estilos**: CSS puro con variables custom y gradientes
- **Arquitectura CSS**: Sistema de estilos base con `card-base.css` para estandarización
- **Responsive**: Media queries para adaptabilidad completa
- **Animaciones**: Transiciones y transformaciones CSS avanzadas
- **Interactividad**: JavaScript moderno para componentes dinámicos
- **Tipografía**: Fuentes del sistema optimizadas
- **Temas**: Sistema de variables CSS para modo claro/oscuro
- **Grid Layout**: Sistema de grillas responsivas con auto-fit
- **Componentes**: Arquitectura modular y reutilizable

## 🎮 Componentes Interactivos Destacados

### Modales y Diálogos
- **Múltiples variantes**: Básico, grande, confirmación, pantalla completa
- **Funcionalidades**: Cierre con ESC, click en backdrop, animaciones suaves
- **Casos de uso**: Confirmaciones, formularios, galerías de imágenes

### Sistema de Pestañas
- **Layouts flexibles**: Horizontal, vertical, con iconos
- **Navegación fluida**: Transiciones animadas entre contenidos
- **Contenido rico**: Soporte para cualquier tipo de contenido HTML

### Accordions Expandibles
- **Modos de operación**: Múltiple expansión o exclusivo
- **Estilos variados**: Con iconos, tarjetas de precios, configuraciones
- **Animaciones**: Expansión y contracción suaves

### Controles Deslizantes
- **Tipos diversos**: Simple, dual-range, vertical, temperatura
- **Funcionalidades**: Marcadores, colores dinámicos, múltiples tamaños
- **Casos de uso**: Configuraciones, filtros, controles de media

### Selectores Avanzados
- **Dropdown inteligente**: Con búsqueda, filtrado, selección múltiple
- **Color Picker**: Paletas, gradientes, controles HSB avanzados
- **UX mejorada**: Navegación por teclado, estados de focus

### Indicadores de Progreso
- **Variedad de formatos**: Barras, círculos, pasos, animaciones
- **Funcionalidades**: Simulación automática, gradientes, temperaturas
- **Casos de uso**: Carga de archivos, progreso de tareas, métricas

## 🏗️ Sistema de Estandarización

### Estilos Base para Tarjetas
El proyecto implementa un sistema de estandarización mediante `card-base.css` que proporciona:

- **Variables CSS**: Configuración centralizada de dimensiones, colores y transiciones
- **Clase Base**: `.card-base` con estilos comunes para todas las tarjetas
- **Grid Responsivo**: `.card-showcase` para mostrar múltiples tarjetas
- **Breakpoints**: Diseño adaptable para móviles, tablets y escritorio
- **Consistencia**: Nomenclatura estándar `.card-[tipo]` para todos los componentes

### Convenciones de Nomenclatura
```css
/* Patrón estándar para componentes de tarjetas */
.card-base           /* Clase base compartida */
.card-[tipo]         /* Clase específica del componente */
.card-showcase       /* Contenedor de demostración */
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Agregar Nuevos Componentes

### Para componentes de tarjetas:

1. Crea el archivo en `src/components/ui/cards/[NombreCard].astro`
2. Importa los estilos base:
   ```astro
   ---
   import CodeViewer from '../../util/CodeViewer.astro';
   import '../../../styles/card-base.css';
   ---
   ```
3. Usa la estructura HTML estándar:
   ```html
   <div class="card-base card-[nombre]">
     <!-- Contenido del componente -->
   </div>
   ```
4. Define solo los estilos específicos del componente en `<style>`
5. Agrega el componente en `src/pages/index.astro`

### Para componentes interactivos:

1. Crea el archivo en `src/components/ui/interactive/[NombreComponent].astro`
2. Importa dependencias necesarias:
   ```astro
   ---
   import CodeViewer from '../../util/CodeViewer.astro';
   import '../../../styles/card-base.css';
   
   const code = `<!-- Código de ejemplo aquí -->`;
   ---
   ```
3. Estructura el componente:
   ```html
   <div class="component-preview">
     <h3>Nombre del Componente</h3>
     <p>Descripción del componente...</p>
     
     <div class="demo-container">
       <!-- Demos interactivos aquí -->
     </div>
   </div>
   
   <CodeViewer code={code} />
   ```
4. Agrega JavaScript funcional:
   ```html
   <script is:inline>
   function miFuncion() {
     // Lógica del componente
   }
   
   // Hacer función global disponible
   window.miFuncion = miFuncion;
   </script>
   ```
5. Define estilos con `<style is:global>` para componentes interactivos
6. Agrega el componente en `src/pages/index.astro`

### Para otros tipos de componentes:

1. Crea una nueva carpeta en `src/components/ui/[categoria]/`
2. Crea el archivo `.astro` con tu componente
3. Incluye los estilos CSS dentro del componente
4. Importa y agrega el componente en `src/pages/index.astro`
5. Actualiza la documentación en este README

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run astro` - Ejecuta comandos CLI de Astro

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- Inspirado en bibliotecas de componentes modernas
- Colores y gradientes basados en tendencias actuales de diseño
- Efectos de animación inspirados en principios de Material Design y diseño neomórfico

---

Hecho con ❤️ y CSS puro • Sin frameworks externos
