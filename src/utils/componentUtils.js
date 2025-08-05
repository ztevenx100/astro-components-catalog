/**
 * Utilidades JavaScript compartidas para optimización de rendimiento
 * Centraliza funcionalidad común para evitar duplicación de código
 */

// Funciones de utilidad de rendimiento
export const performanceUtils = {
  // Debounce para optimizar eventos de entrada
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle para eventos de scroll y resize
  throttle: (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Intersection Observer para lazy loading
  createIntersectionObserver: (callback, options = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
  },

  // RequestAnimationFrame optimizado
  requestAnimationFrame: (callback) => {
    return window.requestAnimationFrame(callback);
  }
};

// Funciones de animación optimizadas
export const animationUtils = {
  // Transición suave con performance optimizada
  smoothTransition: (element, property, fromValue, toValue, duration = 300) => {
    const start = performance.now();
    const startValue = parseFloat(fromValue);
    const endValue = parseFloat(toValue);
    const change = endValue - startValue;

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (change * easeProgress);
      
      element.style[property] = `${currentValue}${property.includes('opacity') ? '' : 'px'}`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  },

  // Fade in optimizado
  fadeIn: (element, duration = 300) => {
    element.style.opacity = '0';
    element.style.display = 'block';
    animationUtils.smoothTransition(element, 'opacity', '0', '1', duration);
  },

  // Fade out optimizado
  fadeOut: (element, duration = 300) => {
    animationUtils.smoothTransition(element, 'opacity', '1', '0', duration);
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }
};

// Funciones de DOM optimizadas
export const domUtils = {
  // Selector optimizado con caché
  querySelector: (() => {
    const cache = new Map();
    return (selector, context = document) => {
      const key = `${selector}-${context.nodeName || 'document'}`;
      if (cache.has(key)) {
        return cache.get(key);
      }
      const element = context.querySelector(selector);
      cache.set(key, element);
      return element;
    };
  })(),

  // Event delegation optimizada
  delegate: (container, selector, event, handler) => {
    container.addEventListener(event, (e) => {
      if (e.target.matches(selector)) {
        handler.call(e.target, e);
      }
    });
  },

  // Crear elemento con atributos optimizado
  createElement: (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);
    
    // Set attributes efficiently
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else {
        element.setAttribute(key, value);
      }
    });
    
    // Append children
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    
    return element;
  }
};

// Funciones específicas para componentes interactivos
export const componentUtils = {
  // Modal management optimizado
  modalManager: {
    activeModals: new Set(),
    
    open: (modalId) => {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      
      componentUtils.modalManager.activeModals.add(modalId);
      modal.style.display = 'flex';
      animationUtils.fadeIn(modal);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus management
      const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    },
    
    close: (modalId) => {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      
      componentUtils.modalManager.activeModals.delete(modalId);
      animationUtils.fadeOut(modal);
      
      // Restore body scroll if no active modals
      if (componentUtils.modalManager.activeModals.size === 0) {
        document.body.style.overflow = '';
      }
    },
    
    closeAll: () => {
      componentUtils.modalManager.activeModals.forEach(modalId => {
        componentUtils.modalManager.close(modalId);
      });
    }
  },

  // Tooltip management optimizado
  tooltipManager: {
    activeTooltips: new Map(),
    
    show: (trigger, content, position = 'top') => {
      const tooltipId = `tooltip-${Date.now()}`;
      const tooltip = domUtils.createElement('div', {
        id: tooltipId,
        className: `tooltip tooltip-${position}`,
        innerHTML: content
      });
      
      document.body.appendChild(tooltip);
      
      // Position calculation
      const triggerRect = trigger.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      
      let top, left;
      
      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + 8;
          break;
      }
      
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      
      animationUtils.fadeIn(tooltip);
      componentUtils.tooltipManager.activeTooltips.set(trigger, tooltipId);
      
      return tooltipId;
    },
    
    hide: (trigger) => {
      const tooltipId = componentUtils.tooltipManager.activeTooltips.get(trigger);
      if (!tooltipId) return;
      
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) {
        animationUtils.fadeOut(tooltip);
        setTimeout(() => tooltip.remove(), 300);
      }
      
      componentUtils.tooltipManager.activeTooltips.delete(trigger);
    }
  },

  // Progress management optimizado
  progressManager: {
    animate: (progressBar, targetValue, duration = 1000) => {
      const fill = progressBar.querySelector('.progress-fill');
      if (!fill) return;
      
      const startValue = parseFloat(fill.style.width) || 0;
      animationUtils.smoothTransition(fill, 'width', `${startValue}%`, `${targetValue}%`, duration);
    },
    
    setInstant: (progressBar, value) => {
      const fill = progressBar.querySelector('.progress-fill');
      if (fill) {
        fill.style.width = `${value}%`;
      }
    }
  }
};

// Función de inicialización optimizada
export const initializeComponents = () => {
  // Lazy load components when they come into view
  const componentObserver = performanceUtils.createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const component = entry.target;
        
        // Initialize component based on type
        if (component.classList.contains('modal-trigger')) {
          // Initialize modal functionality
        } else if (component.classList.contains('tooltip-trigger')) {
          // Initialize tooltip functionality
        } else if (component.classList.contains('progress-bar')) {
          // Initialize progress bar animations
          const targetValue = component.dataset.progress || 0;
          componentUtils.progressManager.animate(component, targetValue);
        }
        
        // Remove from observer once initialized
        componentObserver.unobserve(component);
      }
    });
  });
  
  // Observe all components for lazy initialization
  document.querySelectorAll('[class*="component-"]').forEach(component => {
    componentObserver.observe(component);
  });
};

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
  } else {
    initializeComponents();
  }
}

// Export global utilities for inline scripts
if (typeof window !== 'undefined') {
  window.ComponentUtils = {
    performance: performanceUtils,
    animation: animationUtils,
    dom: domUtils,
    component: componentUtils
  };
}
