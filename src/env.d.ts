/// <reference types="astro/client" />

interface Window {
  Prism: {
    highlightElement: (element: Element) => void;
    highlightAll: () => void;
    highlightAllUnder: (container: Element) => void;
    plugins: Record<string, any>;
    languages: Record<string, any>;
    util: {
      encode: (tokens: any) => any;
      type: (o: any) => string;
    };
    hooks: {
      add: (name: string, callback: Function) => void;
      run: (name: string, env: any) => void;
    };
    [key: string]: any;
  };
}

// Declaración para el módulo CSS
declare module '*.css' {
  const content: string;
  export default content;
}

// Declaración para archivos de imagen
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
