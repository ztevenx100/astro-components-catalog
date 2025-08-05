// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Optimizaciones de build
  build: {
    // Inlining de assets pequeños
    inlineStylesheets: 'auto',
    // Assets optimization
    assets: 'assets'
  },
  
  // Optimizaciones de Vite
  vite: {
    build: {
      // Code splitting manual por categorías
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar componentes por categoría para lazy loading
            'buttons': [
              './src/components/ui/buttons/PrimaryButton.astro',
              './src/components/ui/buttons/GhostButton.astro',
              './src/components/ui/buttons/NeomorphicButton.astro',
              './src/components/ui/buttons/LoadingButton.astro',
              './src/components/ui/buttons/GradientButton.astro',
              './src/components/ui/buttons/IconButton.astro',
              './src/components/ui/buttons/ToggleButton.astro',
              './src/components/ui/buttons/FloatingButton.astro',
              './src/components/ui/buttons/ProgressButton.astro'
            ],
            'cards': [
              './src/components/ui/cards/BasicCard.astro',
              './src/components/ui/cards/ImageCard.astro',
              './src/components/ui/cards/ProfileCard.astro',
              './src/components/ui/cards/StatsCard.astro',
              './src/components/ui/cards/PricingCard.astro',
              './src/components/ui/cards/TestimonialCard.astro',
              './src/components/ui/cards/NotificationCard.astro',
              './src/components/ui/cards/ProductCard.astro',
              './src/components/ui/cards/DashboardCard.astro'
            ],
            'interactive': [
              './src/components/ui/interactive/ModalDialog.astro',
              './src/components/ui/interactive/TooltipComponent.astro',
              './src/components/ui/interactive/DropdownSelect.astro',
              './src/components/ui/interactive/SliderRange.astro',
              './src/components/ui/interactive/ColorPicker.astro',
              './src/components/ui/interactive/TabsComponent.astro',
              './src/components/ui/interactive/AccordionComponent.astro',
              './src/components/ui/interactive/ProgressComponent.astro',
              './src/components/ui/interactive/ToggleComponent.astro'
            ],
            'forms': [
              './src/components/ui/forms/FloatingInput.astro',
              './src/components/ui/forms/CustomCheckbox.astro',
              './src/components/ui/forms/ToggleSwitch.astro',
              './src/components/ui/forms/SearchInput.astro',
              './src/components/ui/forms/MultiStepForm.astro',
              './src/components/ui/forms/RatingInput.astro',
              './src/components/ui/forms/SimpleFileUpload.astro'
            ],
            'feedback': [
              './src/components/ui/feedback/ToastNotification.astro',
              './src/components/ui/feedback/StatusBadge.astro',
              './src/components/ui/feedback/ProgressBar.astro',
              './src/components/ui/feedback/AlertComponent.astro',
              './src/components/ui/feedback/SkeletonLoader.astro',
              './src/components/ui/feedback/EmptyState.astro',
              './src/components/ui/feedback/RatingDisplay.astro'
            ],
            'navigation': [
              './src/components/ui/navigation/HorizontalNav.astro',
              './src/components/ui/navigation/SidebarNav.astro',
              './src/components/ui/navigation/Breadcrumbs.astro',
              './src/components/ui/navigation/TabNavigation.astro',
              './src/components/ui/navigation/MobileMenu.astro'
            ]
          },
          // Configurar nombres de chunks más descriptivos
          chunkFileNames: (chunkInfo) => {
            return `assets/js/[name]-[hash].js`;
          },
          assetFileNames: (assetInfo) => {
            // Separar CSS por tipo de componente
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      },
      // Minificación optimizada
      minify: 'esbuild',
      // Target moderno para mejor compresión
      target: 'es2020',
      // CSS Code splitting
      cssCodeSplit: true
    },
    // Configuración del servidor de desarrollo
    server: {
      hmr: {
        overlay: false
      }
    }
  }
});
