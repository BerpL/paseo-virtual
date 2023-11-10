/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

const files = [
  // root
  '/favicon.ico',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  // application assets
  '/assets/imagenes/logo-quellaveco.png',
  '/assets/imagenes/logo-eduverso.png',
  '/assets/imagenes/logo-eduverso-blanco.png',
  '/applications/images/advertencia.png',
  '/applications/images/click-izquierdo.png',
  '/applications/images/derecho.png',
  '/applications/images/paso1.png',
  '/applications/images/paso2.png',
  '/applications/images/paso3.png',
  '/applications/images/rueda.png',
  '/applications/images/tecla.png',
  '/applications/styles.css',
  '/applications/audios/area-1000-parte-a.mp3',
  '/applications/audios/area-1000-parte-b.mp3',
  '/applications/audios/area-2000-faja.mp3',
  '/applications/audios/area-2000.mp3',
  '/applications/audios/area-3000-parte-a.mp3',
  '/applications/audios/area-3000-parte-b.mp3',
  '/applications/audios/area-3000-parte-c.mp3',
  '/applications/audios/area-3300-1.mp3',
  '/applications/audios/area-3300.mp3',
  '/applications/audios/area-4000-parte-a.mp3',
  '/applications/audios/area-4000-parte-b.mp3',
  '/applications/audios/area-4000-parte-c.mp3',
  '/applications/audios/area-4000-parte-d.mp3',
  '/applications/audios/area-4000-parte-e.mp3',
  '/applications/audios/area-4000.mp3',
  '/applications/audios/area-5800.mp3',
  '/applications/audios/bienvenido-2.mp3',
  '/applications/audios/bienvenido-completo.mp3',
  '/applications/audios/bienvenido.mp3',
  // 0000General
  '/applications/0000General/0000General.html',
  '/applications/0000General/0000General.css',
  '/applications/0000General/0000General.js',
  '/applications/0000General/0000General.bin.xz',
  '/applications/0000General/0000General.bin',
  '/applications/0000General/0000General.blend',
  '/applications/0000General/0000General.gltf',
  '/applications/0000General/0000General.gltf.xz',
  '/applications/0000General/v3d.js',
  '/applications/0000General/visual_logic.js',
  '/applications/0000General/area_sistema_de_recuperacion_ao.jpg',
  '/applications/0000General/cielo hdr2.jpg',
  '/applications/0000General/mat_2_ao.jpg',
  '/applications/0000General/Nuevo012453652.jpg',
  '/applications/0000General/quarry_03_2k.jpg',
  '/applications/0000General/quarry_03_2k-Recuperado.jpg',
  '/applications/0000General/terreno_albedo.jpg',
  //1000AltaNueva
  '/applications/1000AltaNueva/1000AltaNueva.html',
  '/applications/1000AltaNueva/1000AltaNueva.css',
  '/applications/1000AltaNueva/1000AltaNueva.js',
  '/applications/1000AltaNueva/1000AltaNueva.bin.xz',
  '/applications/1000AltaNueva/1000AltaNueva.bin',
  '/applications/1000AltaNueva/1000AltaNueva.blend',
  '/applications/1000AltaNueva/1000AltaNueva.gltf',
  '/applications/1000AltaNueva/1000AltaNueva.gltf.xz',
  '/applications/1000AltaNueva/v3d.js',
  '/applications/1000AltaNueva/visual_logic.js',
  '/applications/1000AltaNueva/base_color.jpg',
  '/applications/1000AltaNueva/base_color_001.jpg',
  '/applications/1000AltaNueva/cielo hdr2.jpg',
  '/applications/1000AltaNueva/Concreto_Q.jpg',
  '/applications/1000AltaNueva/Concreto_Q_001.jpg',
  '/applications/1000AltaNueva/Container1_Q.jpg',
  '/applications/1000AltaNueva/ocean_normal.jpg',
  '/applications/1000AltaNueva/ocean_rough.jpg',
  '/applications/1000AltaNueva/panel_azul_como_el_mar_azul_AlbedoTransparency.jpg',
  '/applications/1000AltaNueva/panel_azul_como_el_mar_azul_Normal.jpg',
  '/applications/1000AltaNueva/panel_metal_AlbedoTransparency.jpg',
  '/applications/1000AltaNueva/panel_metal_Normal.jpg',
  '/applications/1000AltaNueva/Rejilla01.jpg',
  '/applications/1000AltaNueva/roughness_map.jpg',
  '/applications/1000AltaNueva/roughness_map_001.jpg',
  '/applications/1000AltaNueva/Terreno228.jpg',
  '/applications/1000AltaNueva/TexturaPiedras.jpg',
  '/applications/1000AltaNueva/TexturesCom_WaterPlain0012_1_seamless_S.jpg',
  '/applications/1000AltaNueva/vatican_road_1k.jpg',
  '/applications/1000AltaNueva/vigas_normal.jpg',
  '/applications/1000AltaNueva/vigas_normal_001.jpg',
  '/applications/1000AltaNueva/wire_albedo.jpg',
  '/applications/1000AltaNueva/wire_normal.jpg',
  '/applications/1000AltaNueva/wire_roughness.jpg',
  '/applications/1000AltaNueva/panel_azul_como_el_mar_azul_MetallicSmoothness.png',
  '/applications/1000AltaNueva/panel_metal_MetallicSmoothness.png',
  '/applications/1000AltaNueva/roughImp_130.png',
  '/applications/1000AltaNueva/roughImp_130_001.png',
  '/applications/1000AltaNueva/wire_alpha.png',
  // 2600Chancado01
  '/applications/2600Chancado01/2600Chancado01.html',
  '/applications/2600Chancado01/2600Chancado01.css',
  '/applications/2600Chancado01/2600Chancado01.js',
  '/applications/2600Chancado01/2600Chancado01.bin.xz',
  '/applications/2600Chancado01/2600Chancado01.bin',
  '/applications/2600Chancado01/2600Chancado01.blend',
  '/applications/2600Chancado01/2600Chancado01.gltf',
  '/applications/2600Chancado01/2600Chancado01.gltf.xz',
  '/applications/2600Chancado01/v3d.js',
  '/applications/2600Chancado01/visual_logic.js',
  '/applications/2600Chancado01/alimentador_1_mtl_baseColor.jpg',
  '/applications/2600Chancado01/alimentador_1_mtl_normal.jpg',
  '/applications/2600Chancado01/alimentador_1_mtl_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/Amarillo01.jpg',
  '/applications/2600Chancado01/Amarillo01_001.jpg',
  '/applications/2600Chancado01/Amarillo01_002.jpg',
  '/applications/2600Chancado01/Amarillo01_003.jpg',
  '/applications/2600Chancado01/Amarillo01_004.jpg',
  '/applications/2600Chancado01/Amarillo01_005.jpg',
  '/applications/2600Chancado01/base_baseColor.jpg',
  '/applications/2600Chancado01/base_color.jpg',
  '/applications/2600Chancado01/base_normal.jpg',
  '/applications/2600Chancado01/base_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/brazo_1_baseColor.jpg',
  '/applications/2600Chancado01/brazo_1_normal.jpg',
  '/applications/2600Chancado01/brazo_1_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/brazo_2_baseColor.jpg',
  '/applications/2600Chancado01/brazo_2_normal.jpg',
  '/applications/2600Chancado01/brazo_2_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/caja_baseColor.jpg',
  '/applications/2600Chancado01/caja_normal.jpg',
  '/applications/2600Chancado01/caja_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/chancador_baseColor.jpg',
  '/applications/2600Chancado01/chancador_normal.jpg',
  '/applications/2600Chancado01/chancador_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/chutes_3_mtl_baseColor.jpg',
  '/applications/2600Chancado01/chutes_3_mtl_normal.jpg',
  '/applications/2600Chancado01/chutes_3_mtl_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/cielo hdr2.jpg',
  '/applications/2600Chancado01/colector_de_polvo_ao.jpg',
  '/applications/2600Chancado01/concrete_b_Albedo.jpg',
  '/applications/2600Chancado01/concrete_b_Normal.jpg',
  '/applications/2600Chancado01/concrete_b_Roughness.jpg',
  '/applications/2600Chancado01/gravel_b_Albedo.jpg',
  '/applications/2600Chancado01/gravel_b_Normal.jpg',
  '/applications/2600Chancado01/gravel_b_Roughness.jpg',
  '/applications/2600Chancado01/grill_ao.jpg',
  '/applications/2600Chancado01/melta_corrugado_albedo.jpg',
  '/applications/2600Chancado01/metal_corrugado_normal.jpg',
  '/applications/2600Chancado01/metal_corrugado_roughness.jpg',
  '/applications/2600Chancado01/NegroLuis001.jpg',
  '/applications/2600Chancado01/NegroLuis001_001.jpg',
  '/applications/2600Chancado01/NegroLuis001_002.jpg',
  '/applications/2600Chancado01/NegroLuis001_003.jpg',
  '/applications/2600Chancado01/NegroLuis001_004.jpg',
  '/applications/2600Chancado01/NegroLuis001_005.jpg',
  '/applications/2600Chancado01/PisoMetalico2-P.jpg',
  '/applications/2600Chancado01/polin_de_inicio_mtl_baseColor.jpg',
  '/applications/2600Chancado01/polin_de_inicio_mtl_normal.jpg',
  '/applications/2600Chancado01/polin_de_inicio_mtl_occlusionRoughnessMetallic.jpg',
  '/applications/2600Chancado01/roughImp_130.png',
  '/applications/2600Chancado01/roughImp_130_001.png',
  '/applications/2600Chancado01/roughness_map.jpg',
  '/applications/2600Chancado01/roughness_map_001.jpg',
  '/applications/2600Chancado01/Shiny Hdri Skies.jpg',
  '/applications/2600Chancado01/the_sky_is_on_fire_1k.jpg',
  '/applications/2600Chancado01/vigas_normal.jpg',
  '/applications/2600Chancado01/vigas_normal_001.jpg',
  '/applications/2600Chancado01/roughImp_130.png',
  '/applications/2600Chancado01/roughImp_130_001.png',
  // 3100molienda
  '/applications/3100molienda/3100molienda.html',
  '/applications/3100molienda/3100molienda.css',
  '/applications/3100molienda/3100molienda.js',
  '/applications/3100molienda/3100molienda.bin.xz',
  '/applications/3100molienda/3100molienda.bin',
  '/applications/3100molienda/3100molienda.blend',
  '/applications/3100molienda/3100molienda.gltf',
  '/applications/3100molienda/3100molienda.gltf.xz',
  '/applications/3100molienda/v3d.js',
  '/applications/3100molienda/visual_logic.js',
  '/applications/3100molienda/Amarillo01.jpg',
  '/applications/3100molienda/Amarillo01_001.jpg',
  '/applications/3100molienda/Amarillo01_002.jpg',
  '/applications/3100molienda/Amarillo01_003.jpg',
  '/applications/3100molienda/Amarillo01_004.jpg',
  '/applications/3100molienda/Amarillo01_005.jpg',
  '/applications/3100molienda/Amarillo01_006.jpg',
  '/applications/3100molienda/Amarillo01_007.jpg',
  '/applications/3100molienda/Amarillo01_008.jpg',
  '/applications/3100molienda/base_color.jpg',
  '/applications/3100molienda/centro_baseColor.jpg',
  '/applications/3100molienda/centro_normal.jpg',
  '/applications/3100molienda/centro_occlusionRoughnessMetallic.jpg',
  '/applications/3100molienda/chancadora_ao.jpg',
  '/applications/3100molienda/chute_1_ao.jpg',
  '/applications/3100molienda/chute_1_ao_001.jpg',
  '/applications/3100molienda/chute_2_ao.jpg',
  '/applications/3100molienda/colector_de_polvo_1_Bake1_specials_ao.jpg',
  '/applications/3100molienda/colector_de_polvo_2_ao.jpg',
  '/applications/3100molienda/concrete_b_Albedo.jpg',
  '/applications/3100molienda/concrete_b_Normal.jpg',
  '/applications/3100molienda/concrete_b_Roughness.jpg',
  '/applications/3100molienda/Concreto_104.034_Bake1_specials_ao.jpg',
  '/applications/3100molienda/Concreto_104.035_Bake1_specials_ao.jpg',
  '/applications/3100molienda/concreto_molienda_2_ao.jpg',
  '/applications/3100molienda/Material_baseColor.jpg',
  '/applications/3100molienda/Material_normal.jpg',
  '/applications/3100molienda/Material_occlusionRoughnessMetallic.jpg',
  '/applications/3100molienda/melta_corrugado_albedo.jpg',
  '/applications/3100molienda/metal_corrugado_normal.jpg',
  '/applications/3100molienda/metal_corrugado_roughness.jpg',
  '/applications/3100molienda/metal_painted_albedo.jpg',
  '/applications/3100molienda/metal_painted_normal.jpg',
  '/applications/3100molienda/metal_painted_roughness.jpg',
  '/applications/3100molienda/NegroLuis001.jpg',
  '/applications/3100molienda/NegroLuis001_001.jpg',
  '/applications/3100molienda/NegroLuis001_002.jpg',
  '/applications/3100molienda/NegroLuis001_003.jpg',
  '/applications/3100molienda/NegroLuis001_004.jpg',
  '/applications/3100molienda/NegroLuis001_005.jpg',
  '/applications/3100molienda/NegroLuis001_006.jpg',
  '/applications/3100molienda/NegroLuis001_007.jpg',
  '/applications/3100molienda/NegroLuis001_008.jpg',
  '/applications/3100molienda/PisoMetalico2-P.jpg',
  '/applications/3100molienda/rejillas_albedo.jpg',
  '/applications/3100molienda/rejillas_normal.jpg',
  '/applications/3100molienda/roughness_map.jpg',
  '/applications/3100molienda/roughness_map_001.jpg',
  '/applications/3100molienda/Shiny Hdri Skies.jpg',
  '/applications/3100molienda/the_sky_is_on_fire_1k.jpg',
  '/applications/3100molienda/vigas_3_ao.jpg',
  '/applications/3100molienda/vigas_4_ao.jpg',
  '/applications/3100molienda/vigas_alimentadores_AO.jpg',
  '/applications/3100molienda/vigas_chancadoras_AO.jpg',
  '/applications/3100molienda/vigas_normal.jpg',
  '/applications/3100molienda/vigas_normal_001.jpg',
  '/applications/3100molienda/metal_plomo_baseColor.png',
  '/applications/3100molienda/metal_plomo_normal.png',
  '/applications/3100molienda/metal_plomo_occlusionRoughnessMetallic.png',
  '/applications/3100molienda/metal_sag_baseColor.png',
  '/applications/3100molienda/metal_sag_normal.png',
  '/applications/3100molienda/metal_sag_occlusionRoughnessMetallic.png',
  '/applications/3100molienda/NormalMap.png',
  '/applications/3100molienda/rejillas_alpha.png',
  '/applications/3100molienda/roughImp_130.png',
  '/applications/3100molienda/roughImp_130_001.png',
  '/applications/3100molienda/v3d_exported_image_concreto_104_ao.001.png',
  '/applications/3100molienda/v3d_exported_image_concreto_104_ao.png',
  // 3300Flotacion
  '/applications/3300Flotacion/3300Flotacion.html',
  '/applications/3300Flotacion/3300Flotacion.css',
  '/applications/3300Flotacion/3300Flotacion.js',
  '/applications/3300Flotacion/3300Flotacion.bin.xz',
  '/applications/3300Flotacion/3300Flotacion.bin',
  '/applications/3300Flotacion/3300Flotacion.blend',
  '/applications/3300Flotacion/3300Flotacion.gltf',
  '/applications/3300Flotacion/3300Flotacion.gltf.xz',
  '/applications/3300Flotacion/v3d.js',
  '/applications/3300Flotacion/visual_logic.js',
  '/applications/3300Flotacion/Amarillo_R.jpg',
  '/applications/3300Flotacion/Amarillo01.jpg',
  '/applications/3300Flotacion/Amarillo01_001.jpg',
  '/applications/3300Flotacion/Amarillo01_002.jpg',
  '/applications/3300Flotacion/Amarillo01_003.jpg',
  '/applications/3300Flotacion/Amarillo01_004.jpg',
  '/applications/3300Flotacion/Azul sucio_R 01.jpg',
  '/applications/3300Flotacion/celda_baseColor.jpg',
  '/applications/3300Flotacion/celda_componentes_baseColor.jpg',
  '/applications/3300Flotacion/celda_componentes_occlusionRoughnessMetallic.jpg',
  '/applications/3300Flotacion/celda_normal.jpg',
  '/applications/3300Flotacion/celda_occlusionRoughnessMetallic.jpg',
  '/applications/3300Flotacion/celdas_b_baseColor.jpg',
  '/applications/3300Flotacion/celdas_b_normal.jpg',
  '/applications/3300Flotacion/celdas_b_occlusionRoughnessMetallic.jpg',
  '/applications/3300Flotacion/cielo hdr2.jpg',
  '/applications/3300Flotacion/concrete_R01 D.jpg',
  '/applications/3300Flotacion/Estructuras_base_baseColor.jpg',
  '/applications/3300Flotacion/Estructuras_base_normal.jpg',
  '/applications/3300Flotacion/Estructuras_base_occlusionRoughnessMetallic.jpg',
  '/applications/3300Flotacion/NegroLuis001.jpg',
  '/applications/3300Flotacion/NegroLuis001_001.jpg',
  '/applications/3300Flotacion/NegroLuis001_002.jpg',
  '/applications/3300Flotacion/NegroLuis001_003.jpg',
  '/applications/3300Flotacion/NegroLuis001_004.jpg',
  '/applications/3300Flotacion/pintura gris _R.jpg',
  '/applications/3300Flotacion/Rejilla01.jpg',
  '/applications/3300Flotacion/tableros_baseColor.jpg',
  '/applications/3300Flotacion/tableros_normal.jpg',
  '/applications/3300Flotacion/tableros_occlusionRoughnessMetallic.jpg',
  '/applications/3300Flotacion/terreno_baseColor.jpg',
  '/applications/3300Flotacion/terreno_normal.jpg',
  '/applications/3300Flotacion/terreno_occlusionRoughnessMetallic.jpg',
  // 4000Relaves
  '/applications/4000Relaves/4000Relaves.html',
  '/applications/4000Relaves/4000Relaves.css',
  '/applications/4000Relaves/4000Relaves.js',
  '/applications/4000Relaves/4000Relaves.bin.xz',
  '/applications/4000Relaves/4000Relaves.bin',
  '/applications/4000Relaves/4000Relaves.blend',
  '/applications/4000Relaves/4000Relaves.gltf',
  '/applications/4000Relaves/4000Relaves.gltf.xz',
  '/applications/4000Relaves/v3d.js',
  '/applications/4000Relaves/visual_logic.js',
  '/applications/4000Relaves/Amarillo01.jpg',
  '/applications/4000Relaves/Amarillo01_001.jpg',
  '/applications/4000Relaves/Amarillo01_002.jpg',
  '/applications/4000Relaves/Amarillo01_003.jpg',
  '/applications/4000Relaves/Amarillo01_004.jpg',
  '/applications/4000Relaves/Amarillo01_005.jpg',
  '/applications/4000Relaves/Amarillo01_006.jpg',
  '/applications/4000Relaves/Amarillo01_007.jpg',
  '/applications/4000Relaves/Amarillo01_008.jpg',
  '/applications/4000Relaves/base_color.jpg',
  '/applications/4000Relaves/bomba_baseColor.jpg',
  '/applications/4000Relaves/bomba_de_agua_baseColor.jpg',
  '/applications/4000Relaves/bomba_de_agua_normal.jpg',
  '/applications/4000Relaves/bomba_de_agua_occlusionRoughnessMetallic.jpg',
  '/applications/4000Relaves/bomba_normal.jpg',
  '/applications/4000Relaves/bomba_occlusionRoughnessMetallic.jpg',
  '/applications/4000Relaves/ciclon_2_mtl_baseColor.jpg',
  '/applications/4000Relaves/ciclon_2_mtl_normal.jpg',
  '/applications/4000Relaves/ciclon_2_mtl_occlusionRoughnessMetallic.jpg',
  '/applications/4000Relaves/ciclon_central_2_Bake1_specials_ao.jpg',
  '/applications/4000Relaves/ciclon_intermedio_ao.jpg',
  '/applications/4000Relaves/ciclon_mtl_baseColor.jpg',
  '/applications/4000Relaves/ciclon_mtl_normal.jpg',
  '/applications/4000Relaves/ciclon_mtl_occlusionRoughnessMetallic.jpg',
  '/applications/4000Relaves/concreto_albedo.jpg',
  '/applications/4000Relaves/concreto_ao.jpg',
  '/applications/4000Relaves/concreto_normal.jpg',
  '/applications/4000Relaves/concreto_roughness.jpg',
  '/applications/4000Relaves/corrugado_azul3.jpg',
  '/applications/4000Relaves/Metal_Grill_005a_Base_Color.jpg',
  '/applications/4000Relaves/Metal_Grill_005a_Metallic.jpg',
  '/applications/4000Relaves/Metal_Grill_005a_Normal.jpg',
  '/applications/4000Relaves/Metal_Grill_005a_Roughness.jpg',
  '/applications/4000Relaves/NegroLuis001.jpg',
  '/applications/4000Relaves/NegroLuis001_001.jpg',
  '/applications/4000Relaves/NegroLuis001_002.jpg',
  '/applications/4000Relaves/NegroLuis001_003.jpg',
  '/applications/4000Relaves/NegroLuis001_004.jpg',
  '/applications/4000Relaves/NegroLuis001_005.jpg',
  '/applications/4000Relaves/NegroLuis001_006.jpg',
  '/applications/4000Relaves/NegroLuis001_007.jpg',
  '/applications/4000Relaves/NegroLuis001_008.jpg',
  '/applications/4000Relaves/roughness_map.jpg',
  '/applications/4000Relaves/roughness_map_001.jpg',
  '/applications/4000Relaves/Shiny Hdri Skies.jpg',
  '/applications/4000Relaves/soporte mediano de ch_Bake1_special_ao.jpg',
  '/applications/4000Relaves/Terreno228.jpg',
  '/applications/4000Relaves/the_sky_is_on_fire_1k.jpg',
  '/applications/4000Relaves/tuberias_1_Bake1_specials_ao.jpg',
  '/applications/4000Relaves/vigas_1_ao.jpg',
  '/applications/4000Relaves/vigas_2_Bake1_specials_ao.jpg',
  '/applications/4000Relaves/vigas_3_Bake1_specials_ao.jpg',
  '/applications/4000Relaves/vigas_normal.jpg',
  '/applications/4000Relaves/vigas_normal_001.jpg',
  '/applications/4000Relaves/wire_albedo.jpg',
  '/applications/4000Relaves/wire_normal.jpg',
  '/applications/4000Relaves/wire_roughness.jpg',
  '/applications/4000Relaves/roughImp_130.png',
  '/applications/4000Relaves/roughImp_130_001.png',
  '/applications/4000Relaves/wire_alpha.png',
  // 5000Puerto
  '/applications/5000Puerto/5000Puerto.html',
  '/applications/5000Puerto/5000Puerto.css',
  '/applications/5000Puerto/5000Puerto.js',
  '/applications/5000Puerto/5000Puerto.bin.xz',
  '/applications/5000Puerto/5000Puerto.bin',
  '/applications/5000Puerto/5000Puerto.blend',
  '/applications/5000Puerto/5000Puerto.gltf',
  '/applications/5000Puerto/5000Puerto.gltf.xz',
  '/applications/5000Puerto/v3d.js',
  '/applications/5000Puerto/visual_logic.js',
  '/applications/5000Puerto/Amarillo_ML.jpg',
  '/applications/5000Puerto/Amarillo01.jpg',
  '/applications/5000Puerto/Amarillo01_001.jpg',
  '/applications/5000Puerto/Amarillo01_002.jpg',
  '/applications/5000Puerto/Amarillo01_003.jpg',
  '/applications/5000Puerto/Amarillo01_004.jpg',
  '/applications/5000Puerto/Amarillo01_005.jpg',
  '/applications/5000Puerto/Amarillo01_006.jpg',
  '/applications/5000Puerto/Amarillo01_007.jpg',
  '/applications/5000Puerto/Amarillo01_008.jpg',
  '/applications/5000Puerto/Azul10.jpg',
  '/applications/5000Puerto/Concreto_Q.jpg',
  '/applications/5000Puerto/Concreto_Q_001.jpg',
  '/applications/5000Puerto/Container1_Q.jpg',
  '/applications/5000Puerto/estructura seg faja_01.jpg',
  '/applications/5000Puerto/grill_ao.jpg',
  '/applications/5000Puerto/grua_barco_grua_barco_AlbedoTransparency.jpg',
  '/applications/5000Puerto/grua_barco_grua_barco_Normal.jpg',
  '/applications/5000Puerto/melta_corrugado_albedo.jpg',
  '/applications/5000Puerto/metal_corrugado_normal.jpg',
  '/applications/5000Puerto/metal_corrugado_roughness.jpg',
  '/applications/5000Puerto/MetalPlates001_1K_Color.jpg',
  '/applications/5000Puerto/MetalPlates001_1K_Metalness.jpg',
  '/applications/5000Puerto/MetalPlates001_1K_Normal.jpg',
  '/applications/5000Puerto/MetalPlates001_1K_Roughness.jpg',
  '/applications/5000Puerto/NegroLuis001.jpg',
  '/applications/5000Puerto/NegroLuis001_001.jpg',
  '/applications/5000Puerto/NegroLuis001_002.jpg',
  '/applications/5000Puerto/NegroLuis001_003.jpg',
  '/applications/5000Puerto/NegroLuis001_004.jpg',
  '/applications/5000Puerto/NegroLuis001_005.jpg',
  '/applications/5000Puerto/NegroLuis001_006.jpg',
  '/applications/5000Puerto/NegroLuis001_007.jpg',
  '/applications/5000Puerto/NegroLuis001_008.jpg',
  '/applications/5000Puerto/ocean_normal.jpg',
  '/applications/5000Puerto/ocean_rough.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_AlbedoTransparency.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_AlbedoTransparency_001.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_AlbedoTransparency_002.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_Normal.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_Normal_001.jpg',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_Normal_002.jpg',
  '/applications/5000Puerto/panel_metal_AlbedoTransparency.jpg',
  '/applications/5000Puerto/panel_metal_AlbedoTransparency_001.jpg',
  '/applications/5000Puerto/panel_metal_AlbedoTransparency_002.jpg',
  '/applications/5000Puerto/panel_metal_Normal.jpg',
  '/applications/5000Puerto/panel_metal_Normal_001.jpg',
  '/applications/5000Puerto/panel_metal_Normal_002.jpg',
  '/applications/5000Puerto/plate_albedo.jpg',
  '/applications/5000Puerto/plate_ao.jpg',
  '/applications/5000Puerto/plate_metallic.jpg',
  '/applications/5000Puerto/plate_normal.jpg',
  '/applications/5000Puerto/plate_roughness.jpg',
  '/applications/5000Puerto/Puerto 300 _Textura.jpg',
  '/applications/5000Puerto/Rejilla01.jpg',
  '/applications/5000Puerto/Shiny Hdri Skies.jpg',
  '/applications/5000Puerto/TEXTURA POLINES_02.jpg',
  '/applications/5000Puerto/TexturesCom_WaterPlain0012_1_seamless_S.jpg',
  '/applications/5000Puerto/the_sky_is_on_fire_1k.jpg',
  '/applications/5000Puerto/caminos.png',
  '/applications/5000Puerto/Carreteras.png',
  '/applications/5000Puerto/Carretereras.png',
  '/applications/5000Puerto/grua_barco_grua_barco_MetallicSmoothness.png',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_MetallicSmoothness.png',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_MetallicSmoothness_001.png',
  '/applications/5000Puerto/panel_azul_como_el_mar_azul_MetallicSmoothness_002.png',
  '/applications/5000Puerto/panel_metal_MetallicSmoothness.png',
  '/applications/5000Puerto/panel_metal_MetallicSmoothness_001.png',
  '/applications/5000Puerto/panel_metal_MetallicSmoothness_002.png',
  '/applications/5000Puerto/rubber_albedo.png',
  '/applications/5000Puerto/rubber_albedo_001.png',
  '/applications/5000Puerto/rubber_albedo_002.png',
  '/applications/5000Puerto/rubber_ao.png',
  '/applications/5000Puerto/rubber_ao_001.png',
  '/applications/5000Puerto/rubber_ao_002.png',
  '/applications/5000Puerto/rubber_normal.png',
  '/applications/5000Puerto/rubber_normal_001.png',
  '/applications/5000Puerto/rubber_normal_002.png',
  '/applications/5000Puerto/rubber_roughness.png',
  '/applications/5000Puerto/rubber_roughness_001.png',
  '/applications/5000Puerto/rubber_roughness_002.png',

];

const filesPrecache = files.map(url => ({ url, revision: null }));

precacheAndRoute(filesPrecache);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.jpg'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'imagesjpg2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.js'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'scripts2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.xz'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'visual2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.html'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'Hypertext2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.mp3'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new CacheFirst({
    cacheName: 'Audios2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.css'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'Styles2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Cache all files in the public directory
/* registerRoute(
  // Match all files in the public directory
  ({ request }) => request.url.startsWith(self.location.origin + '/public/applications/'),
  // Use CacheFirst strategy to cache files and serve them from cache if available
  new StaleWhileRevalidate({
    cacheName: 'PublicFiles2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used files are removed.
      new ExpirationPlugin({ maxEntries: 100 }),
    ],
  })
); */

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


/* self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caché abierta correctamente');
      return cache.addAll([
        // root
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/logo192.png',
        '/logo512.png',
        // application assets
        '/assets/imagenes/logo-quellaveco.png',
        '/assets/imagenes/logo-eduverso.png',
        '/assets/imagenes/logo-eduverso-blanco.png',
        '/applications/images/advertencia.png',
        '/applications/images/click-izquierdo.png',
        '/applications/images/derecho.png',
        '/applications/images/paso1.png',
        '/applications/images/paso2.png',
        '/applications/images/paso3.png',
        '/applications/images/rueda.png',
        '/applications/images/tecla.png',
        '/applications/styles.css',
        '/applications/audios/area-1000-parte-a.mp3',
        '/applications/audios/area-1000-parte-b.mp3',
        '/applications/audios/area-2000-faja.mp3',
        '/applications/audios/area-2000.mp3',
        '/applications/audios/area-3000-parte-a.mp3',
        '/applications/audios/area-3000-parte-b.mp3',
        '/applications/audios/area-3000-parte-c.mp3',
        '/applications/audios/area-3300-1.mp3',
        '/applications/audios/area-3300.mp3',
        '/applications/audios/area-4000-parte-a.mp3',
        '/applications/audios/area-4000-parte-b.mp3',
        '/applications/audios/area-4000-parte-c.mp3',
        '/applications/audios/area-4000-parte-d.mp3',
        '/applications/audios/area-4000-parte-e.mp3',
        '/applications/audios/area-4000.mp3',
        '/applications/audios/area-5800.mp3',
        '/applications/audios/bienvenido-2.mp3',
        '/applications/audios/bienvenido-completo.mp3',
        '/applications/audios/bienvenido.mp3',
        // 0000General
        '/applications/0000General/0000General.html',
        '/applications/0000General/0000General.css',
        '/applications/0000General/0000General.js',
        '/applications/0000General/0000General.bin.xz',
        '/applications/0000General/0000General.bin',
        '/applications/0000General/0000General.blend',
        '/applications/0000General/0000General.gltf',
        '/applications/0000General/0000General.gltf.xz',
        '/applications/0000General/0000General.v3d.js',
        '/applications/0000General/0000General.visual_logic.js',
        // 2600Chancado01
        '/applications/2600Chancado01/2600Chancado01.html',
        '/applications/2600Chancado01/2600Chancado01.css',
        '/applications/2600Chancado01/2600Chancado01.js',
        '/applications/2600Chancado01/2600Chancado01.bin.xz',
        '/applications/2600Chancado01/2600Chancado01.bin',
        '/applications/2600Chancado01/2600Chancado01.blend',
        '/applications/2600Chancado01/2600Chancado01.gltf',
        '/applications/2600Chancado01/2600Chancado01.gltf.xz',
        '/applications/2600Chancado01/2600Chancado01.v3d.js',
        '/applications/2600Chancado01/2600Chancado01.visual_logic.js',
        // 3100molienda
        '/applications/3100molienda/3100molienda.html',
        '/applications/3100molienda/3100molienda.css',
        '/applications/3100molienda/3100molienda.js',
        '/applications/3100molienda/3100molienda.bin.xz',
        '/applications/3100molienda/3100molienda.bin',
        '/applications/3100molienda/3100molienda.blend',
        '/applications/3100molienda/3100molienda.gltf',
        '/applications/3100molienda/3100molienda.gltf.xz',
        '/applications/3100molienda/3100molienda.v3d.js',
        '/applications/3100molienda/3100molienda.visual_logic.js',
        // 3300Flotacion
        '/applications/3300Flotacion/3300Flotacion.html',
        '/applications/3300Flotacion/3300Flotacion.css',
        '/applications/3300Flotacion/3300Flotacion.js',
        '/applications/3300Flotacion/3300Flotacion.bin.xz',
        '/applications/3300Flotacion/3300Flotacion.bin',
        '/applications/3300Flotacion/3300Flotacion.blend',
        '/applications/3300Flotacion/3300Flotacion.gltf',
        '/applications/3300Flotacion/3300Flotacion.gltf.xz',
        '/applications/3300Flotacion/3300Flotacion.v3d.js',
        '/applications/3300Flotacion/3300Flotacion.visual_logic.js',
        // 4000Relaves
        '/applications/4000Relaves/4000Relaves.html',
        '/applications/4000Relaves/4000Relaves.css',
        '/applications/4000Relaves/4000Relaves.js',
        '/applications/4000Relaves/4000Relaves.bin.xz',
        '/applications/4000Relaves/4000Relaves.bin',
        '/applications/4000Relaves/4000Relaves.blend',
        '/applications/4000Relaves/4000Relaves.gltf',
        '/applications/4000Relaves/4000Relaves.gltf.xz',
        '/applications/4000Relaves/4000Relaves.v3d.js',
        '/applications/4000Relaves/4000Relaves.visual_logic.js',
        // 5000Puerto
        '/applications/5000Puerto/5000Puerto.html',
        '/applications/5000Puerto/5000Puerto.css',
        '/applications/5000Puerto/5000Puerto.js',
        '/applications/5000Puerto/5000Puerto.bin.xz',
        '/applications/5000Puerto/5000Puerto.bin',
        '/applications/5000Puerto/5000Puerto.blend',
        '/applications/5000Puerto/5000Puerto.gltf',
        '/applications/5000Puerto/5000Puerto.gltf.xz',
        '/applications/5000Puerto/5000Puerto.v3d.js',
        '/applications/5000Puerto/5000Puerto.visual_logic.js',
      ]);
    }).catch(error => {
      console.error('Error al abrir la caché:', error);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      // Elimina las cachés antiguas (excepto la caché actual)
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Solicitud fetch interceptada:', event.request.url);
  event.respondWith(handleFetch(event.request));
});

async function handleFetch(request:any) {
  try {
    // Intenta obtener la respuesta desde la caché
    const cachedResponse = await caches.match(request);

    // Si la respuesta está en caché, devuélvela
    if (cachedResponse) {
      console.log('Recurso encontrado en caché:', request.url);
      return cachedResponse;
    }

    // Si la respuesta no está en caché, haz la solicitud a la red
    const networkResponse = await fetch(request);

    // Abre el caché y almacena la respuesta de la red para futuras solicitudes
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    console.log('Recurso no encontrado en caché, solicitando a la red:', request.url);
    // Devuelve la respuesta de la red
    return networkResponse;
  } catch (error) {
    // Si hay un error al recuperar recursos, puedes manejarlo aquí
    console.error('Error en la solicitud:', error);
    // Devuelve una respuesta predeterminada o una página de error personalizada si es necesario
    return new Response('Error: Recurso no disponible', { status: 500, statusText: 'Internal Server Error' });
  }
} */
