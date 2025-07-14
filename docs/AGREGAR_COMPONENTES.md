# Guía para Agregar Nuevos Componentes

Esta guía te ayudará a agregar nuevos componentes al catálogo de manera consistente y organizada.

## 📁 Estructura de Archivos

Cada componente debe seguir esta estructura:

```
src/components/ui/[categoria]/
└── NombreComponente.astro
```

### Categorías Disponibles:
- `buttons/` - Botones de todo tipo
- `cards/` - Tarjetas y contenedores
- `forms/` - Elementos de formulario
- `navigation/` - Componentes de navegación
- `layout/` - Componentes de diseño y estructura
- `feedback/` - Alertas, notificaciones, spinners
- `data/` - Tablas, listas, elementos de datos

## 🎨 Plantilla de Componente

Usa esta plantilla para crear nuevos componentes:

```astro
---
// [Nombre del Componente] - [Breve descripción de qué hace]
---

<div class="component-showcase">
  <h3>[Nombre del Componente]</h3>
  
  <!-- Tu componente aquí -->
  <div class="tu-componente">
    <!-- Contenido del componente -->
  </div>
</div>

<style>
  /* Estilos del showcase - mantener consistente */
  .component-showcase {
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    margin: 1rem 0;
  }

  .component-showcase h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }

  /* Estilos específicos del componente */
  .tu-componente {
    /* Tus estilos aquí */
  }
</style>
```

## 🎯 Buenas Prácticas

### 1. **Nombres de Clases**
- Usa nombres descriptivos en inglés
- Sigue la convención kebab-case: `btn-primary`, `card-header`
- Prefija las clases específicas del componente para evitar conflictos

### 2. **Colores y Variables**
Usa esta paleta de colores consistente:
```css
/* Colores principales */
--primary: #667eea
--primary-dark: #5a67d8
--secondary: #764ba2

/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Grises */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-600: #4b5563
--gray-900: #111827
```

### 3. **Animaciones y Transiciones**
- Usa transiciones suaves: `transition: all 0.3s ease`
- Para hover states: `transform: translateY(-2px)`
- Para focus: outline con color primario

### 4. **Responsive Design**
Incluye media queries para dispositivos móviles:
```css
@media (max-width: 768px) {
  .tu-componente {
    /* Estilos móviles */
  }
}
```

### 5. **Accesibilidad**
- Incluye estados de focus visibles
- Usa colores con suficiente contraste
- Agrega atributos ARIA cuando sea necesario

## 📝 Pasos para Agregar un Componente

### 1. Crear el Archivo del Componente
```bash
# Ejemplo para un nuevo botón
touch src/components/ui/buttons/FloatingActionButton.astro
```

### 2. Implementar el Componente
Usa la plantilla anterior y añade tu HTML y CSS específico.

### 3. Importar en la Página Principal
En `src/pages/index.astro`:

```astro
---
// Agregar la importación
import FloatingActionButton from '../components/ui/buttons/FloatingActionButton.astro';
---

<!-- Agregar a la sección correspondiente -->
<section id="buttons" class="section">
  <h2>🔘 Botones</h2>
  <div class="components-grid">
    <!-- Componentes existentes -->
    <FloatingActionButton />
  </div>
</section>
```

### 4. Actualizar la Documentación
- Actualiza el README.md con el nuevo componente
- Agrega una descripción en la lista de componentes

## 🎨 Ejemplos de Componentes

### Botón Simple
```astro
---
// Botón Simple - Un botón básico con hover
---

<div class="component-showcase">
  <h3>Botón Simple</h3>
  <button class="btn-simple">Clic aquí</button>
</div>

<style>
  .component-showcase {
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    margin: 1rem 0;
  }

  .component-showcase h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .btn-simple {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-simple:hover {
    background: #5a67d8;
    transform: translateY(-2px);
  }
</style>
```

### Tarjeta con Imagen
```astro
---
// Card con Avatar - Tarjeta con imagen de perfil
---

<div class="component-showcase">
  <h3>Card con Avatar</h3>
  <div class="avatar-card">
    <div class="avatar">👤</div>
    <h4>Usuario</h4>
    <p>Descripción del usuario</p>
  </div>
</div>

<style>
  .component-showcase {
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    margin: 1rem 0;
  }

  .component-showcase h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .avatar-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    max-width: 200px;
  }

  .avatar {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
</style>
```

## 🔧 Herramientas Útiles

### CSS Variables Disponibles
```css
/* En utilities.css tienes acceso a: */
var(--primary-color)
var(--primary-gradient)
var(--shadow-md)
var(--radius-lg)
var(--transition-normal)
```

### Clases Utilitarias
```css
/* Flexbox */
.flex, .items-center, .justify-center

/* Spacing */
.p-4, .m-2, .gap-4

/* Colors */
.text-primary, .bg-white

/* Borders */
.rounded-lg, .border

/* Shadows */
.shadow-md, .shadow-lg
```

## ✅ Checklist de Calidad

Antes de finalizar tu componente, verifica:

- [ ] El componente sigue la estructura de carpetas
- [ ] Usa la plantilla de showcase consistente
- [ ] Los colores están alineados con la paleta
- [ ] Incluye estados hover/focus
- [ ] Es responsive (funciona en móvil)
- [ ] El código está comentado
- [ ] Se actualiza la página principal
- [ ] Se actualiza la documentación

## 🚀 Contribuir

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nuevo-componente`
3. Agrega tu componente siguiendo esta guía
4. Commit: `git commit -m "Add nuevo componente"`
5. Push: `git push origin feature/nuevo-componente`
6. Crea un Pull Request

---

¿Tienes dudas? Revisa los componentes existentes para ver ejemplos reales.
