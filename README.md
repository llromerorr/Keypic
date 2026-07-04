# Keypic Frontend 🌐

Esta es la interfaz web estática y multi-tenant de **Keypic**, diseñada para ser alojada de forma gratuita en **GitHub Pages**.

## 🏛️ Cómo funciona

1. El cliente entra a la web con un enlace que incluye el ID del fotógrafo (ej: `https://llromerorr.github.io/Keypic/?id=abcde`).
2. La web se conecta a Firebase Realtime Database para buscar la dirección IP/túnel segura activa de ese fotógrafo.
3. La web descarga la configuración de marca (logo, banner, colores) y las imágenes de la galería en tiempo real directamente desde el servidor local del fotógrafo.
4. La web es completamente estática, no almacena base de datos ni fotos en servidores de terceros (salvo la caché local del Service Worker del navegador para mayor velocidad).

## 🚀 Despliegue en GitHub Pages

Para publicar o actualizar la web:
1. Asegúrate de subir estos archivos a la rama `main` de tu repositorio de GitHub.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
3. Entra a la sección **Pages** en el menú lateral izquierdo.
4. En **Build and deployment**, selecciona la rama `main` y la carpeta `/ (root)`, y dale a **Save**.
5. Tu web estará en línea en un par de minutos.
