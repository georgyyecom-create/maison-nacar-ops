---
name: creativos-maison-nacar
description: Crear ángulos, textos y prompts de Gemini para anuncios estáticos de Maison Nácar (joyería). Úsala cuando haya que hacer creativos, copies o ideas de anuncios.
---

# Creativos Maison Nácar

## Briefing fijo
- **Público:** mujeres de 30 a 60 años, y quien les regala (hijas, parejas). España.
- **Tono:** cercano, con humor y nada elitista, pero bonito. Nada de «perfume de lujo» frío.
- **Producto:** acero inoxidable con baño de oro 18k. No se oxida ni mancha la piel. Llega en estuche de regalo. Envío gratis. **3x2: elige 3 y la de menor precio, gratis.**
- **Productos de anuncio:** Collar Puntos de Luz y Collar Tréboles Minimal, con sus conjuntos (ver CLAUDE.md).

## Ángulos que hay que rotar
1. **Regalo con humor:** «Perdón básico / deluxe / premium» (1 / 2 / 3 piezas = el 3x2), «Que este año no sean calcetines», el amigo invisible, «Para la que lo tiene todo».
2. **Nativo de historia (POV):** espejo antes de la cena, abrir el estuche en el sofá, encuesta «¿Dorado o plateado?», chat de WhatsApp «Mamá, ¿qué quieres para Reyes?», nota del móvil con la lista de regalos.
3. **Meme de cena familiar:** «¿Y el novio para cuándo?» respondido con joyas, «Lo que me regala mi marido vs lo que quería».
4. **Problema-solución:** «El collar que no se pone verde», comparativa «la de siempre vs la nuestra».
5. **Oferta de temporada:** Black Friday y Navidad adelantada, «Pide antes del 14 dic», «3 regalos, pagas 2».

## Formato de salida para cada creativo
- **Nombre:** `PDL_|TRE_ + ángulo + formato`.
- **Prompt completo para Gemini** (en inglés). Incluye:
  - qué imágenes adjuntar (siempre `referencias/*-conjunto.jpg` y `*-macro.jpg`);
  - la escena;
  - el **texto en español entre comillas**, con la tipografía y su posición;
  - en 9:16, dejar libre el 14 % de arriba y el 20 % de abajo.
- **Copy de Meta:** 2 textos principales, 2 títulos (máximo 6 palabras) y 1 descripción.

## Reglas
- La joya, idéntica a la referencia real (número de piedras y de tréboles, tamaño delicado). Sin destellos de estrella falsos.
- Personas de IA: nunca como «clienta real» ni con testimonios inventados. Usar «POV» o la voz de la marca.
- Sin «oro» a secas, «diamantes», «hipoalergénico» ni «−X %» con precio tachado inventado.
- Producir en lotes de 5 y variar el ángulo, no solo el color.
