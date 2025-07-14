# 🎨 Catálogo de Componentes CSS

Un catálogo interactivo de componentes visuales modernos construidos exclusivamente con HTML y CSS puro, sin dependencias externas de frameworks o bibliotecas JavaScript.

## 🌟 Características

- **CSS Puro**: Todos los componentes están hechos únicamente con HTML y CSS
- **Sin JavaScript**: No se utiliza JavaScript ni bibliotecas externas
- **Diseño Moderno**: Componentes con diseños actuales y atractivos
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Accesible**: Considera las buenas prácticas de accesibilidad
- **Organizado**: Componentes categorizados y fáciles de encontrar

## 📦 Componentes Incluidos

### 🔘 Botones
- **Botón Primario**: Botón principal con gradiente y animaciones
- **Botón Fantasma**: Botón con borde y efecto de llenado al hover
- **Botón Neomórfico**: Botón con efecto de profundidad 3D
- **Botón de Carga**: Botón con spinner de carga animado

### 📋 Tarjetas
- **Tarjeta Básica**: Tarjeta simple con sombra y hover
- **Tarjeta con Imagen**: Tarjeta con área de imagen y contenido
- **Tarjeta de Perfil**: Tarjeta de usuario con avatar, estadísticas y acciones

### 📝 Formularios
- **Input Flotante**: Campo de entrada con etiqueta flotante animada
- **Checkbox Personalizado**: Checkbox con diseño custom y animaciones
- **Toggle Switch**: Interruptor con animación suave y múltiples estados

### 🧭 Navegación
- **Navbar Horizontal**: Barra de navegación moderna y responsive

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
│   └── ui/
│       ├── buttons/
│       │   ├── PrimaryButton.astro
│       │   ├── GhostButton.astro
│       │   └── NeomorphicButton.astro
│       ├── cards/
│       │   ├── BasicCard.astro
│       │   └── ImageCard.astro
│       ├── forms/
│       │   ├── FloatingInput.astro
│       │   └── CustomCheckbox.astro
│       └── navigation/
│           └── HorizontalNav.astro
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
```

## 🎯 Características Técnicas

- **Framework**: Astro.js para generación estática
- **Lenguajes**: HTML, CSS, TypeScript
- **Estilos**: CSS puro con variables custom y gradientes
- **Responsive**: Media queries para adaptabilidad
- **Animaciones**: Transiciones y transformaciones CSS
- **Tipografía**: Fuentes del sistema optimizadas

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Agregar Nuevos Componentes

Para agregar un nuevo componente:

1. Crea una nueva carpeta en `src/components/ui/[categoria]/`
2. Crea el archivo `.astro` con tu componente
3. Incluye los estilos CSS dentro del componente
4. Importa y agrega el componente en `src/pages/index.astro`
5. Actualiza la documentación

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
