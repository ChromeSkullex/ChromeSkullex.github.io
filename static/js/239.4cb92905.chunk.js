"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[239],{60239:(e,r,a)=>{a.r(r),a.d(r,{populateGroupLayer:()=>b,populateOperationalLayers:()=>c});var t=a(94643),y=(a(81806),a(77491)),i=a(62487),n=a(70652);function l(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var o=a(2487),L=a(81589);async function c(e,r,a){if(!r)return;const t=r.map((e=>async function(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await b(t,r,a):m(r)?function(e,r,a){r.itemId&&(e.portalItem=new n.default({id:r.itemId,portal:null===a||void 0===a?void 0:a.portal}),e.when((()=>{var t,y;const i=t=>{var y;const i=t.layerId;w(t,e,r,i,a);const n=null===(y=r.featureCollection)||void 0===y||null===(y=y.layers)||void 0===y?void 0:y[i];n&&t.read(n,a)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(y=e.tables)||void 0===y||y.forEach(i)})))}(t,r,a.context):M(r)&&await async function(e,r,a){var t;const y=i.S.FeatureLayer,n=await y(),l=r.featureCollection,o=null===l||void 0===l?void 0:l.showLegend,L=null===l||void 0===l||null===(t=l.layers)||void 0===t?void 0:t.map(((t,y)=>{const i=new n;i.read(t,a);const l={...a,ignoreDefaults:!0};return w(i,e,r,y,l),null!=o&&i.read({showLegend:o},l),i}));e.layers.addMany(null!==L&&void 0!==L?L:[])}(t,r,a.context)),await(0,L.L)(t,a.context),t}(await f(e,r),e,r)}(e,a))),y=await Promise.allSettled(t);for(const i of y)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},I={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},v={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},T={...p,LinkChartLayer:"LinkChartLayer"},g={...I},G={...v};async function f(e,r){var a,t;const L=r.context,c=A(L);let u=e.layerType||e.type;!u&&(null===r||void 0===r?void 0:r.defaultLayerType)&&(u=r.defaultLayerType);const s=c[u];let d=s?i.S[s]:i.S.UnknownLayer;if(m(e)){const r=null===L||void 0===L?void 0:L.portal;if(e.itemId){const a=new n.default({id:e.itemId,portal:r});await a.load();const t=(await(0,o.n)(a,new y.v)).className||"UnknownLayer";d=i.S[t]}}else"ArcGISFeatureLayer"===u?function(e){return l(e,"notes")}(e)||function(e){return l(e,"markup")}(e)?d=i.S.MapNotesLayer:function(e){return l(e,"route")}(e)?d=i.S.RouteLayer:M(e)&&(d=i.S.GroupLayer):null!==(a=e.wmtsInfo)&&void 0!==a&&a.url&&e.wmtsInfo.layerIdentifier?d=i.S.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(d=i.S.UnsupportedLayer);return d()}function M(e){var r,a;return"ArcGISFeatureLayer"===e.layerType&&!m(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(a=a.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function m(e){return"Feature Collection"===e.type}function A(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=d;break;default:r=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=G;break;case"tables":r=g;break;default:r=T}break;default:switch(e.layerContainerType){case"basemap":r=v;break;case"tables":r=I;break;default:r=p}}return r}async function b(e,r,a){const y=new t.A,i=c(y,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,"group"===e.type)return e.layers.addMany(y),e}catch(n){e.destroy();for(const e of y)e.destroy();throw n}}catch(n){throw n}}function w(e,r,a,t,y){var i,n;e.read({id:"".concat(r.id,"-sublayer-").concat(t),visibility:null===(i=null===(n=a.visibleLayers)||void 0===n?void 0:n.includes(t))||void 0===i||i},y)}}}]);
//# sourceMappingURL=239.4cb92905.chunk.js.map