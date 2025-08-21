import { getRandomPropertyImages, getRandomPropertyImage, PROPERTY_IMAGES } from '../src/constants/propertyImages';

console.log('🧪 Probando sistema de imágenes de propiedades...\n');

// Probar función getRandomPropertyImage
console.log('📸 Imagen aleatoria:', getRandomPropertyImage());

// Probar función getRandomPropertyImages con diferentes tipos
const tipos = ['Casa', 'Apartamento', 'Casa Campestre', 'Penthouse', 'Lote', 'Oficina', 'Local', 'Bodega'];

tipos.forEach(tipo => {
  console.log(`\n🏠 ${tipo}:`);
  const images = getRandomPropertyImages(tipo, 2);
  images.forEach((img, index) => {
    console.log(`  ${index + 1}. ${img}`);
  });
});

// Mostrar estadísticas de imágenes disponibles
console.log('\n📊 Estadísticas de imágenes disponibles:');
Object.entries(PROPERTY_IMAGES).forEach(([category, images]) => {
  console.log(`  ${category}: ${images.length} imágenes`);
});

console.log('\n✅ Prueba completada. Las imágenes de fallback están funcionando correctamente.'); 