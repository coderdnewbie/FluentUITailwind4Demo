export function load_map() {
    var map = L.map('map').setView([38, -8], 8) //?? was 7

    // Add Google Maps tile layer ... 'lyrs=m' is streets, 'lyrs=p' is terrain, 'lyrs=s' is satellite, 'lyrs=s,h' is hybrid
    //var googleMapsLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    //    attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
    //    maxZoom: 20,
    //    tileSize: 256
    //});

    var googleMapsLayer = L.tileLayer('https://mt1.google.com/vt/x={x}&y={y}&z={z}', {
        attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
        maxZoom: 20,
        tileSize: 256
    });

    // Add the layer to the map
    googleMapsLayer.addTo(map);

    var markers = L.markerClusterGroup();

    for (let i = 0; i < 1000; i++) {
        const marker = L.marker([
            getRandom(37, 39),
            getRandom(-9.5, -6.5)
        ])
        let popupContents = "<h3>Bienvenido a València " + i + "</h3><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Plaza_del_Ayuntamiento_de_Valencia.JPG/640px-Plaza_del_Ayuntamiento_de_Valencia.JPG\" alt=\"Plaça de l\'Ajuntament\"/ style=\"width: 130px; height: 130px;\"><p>Esta es la Plaça de l'Ajuntament, el corazón de la ciudad.</p>";
        marker.bindPopup(popupContents);

        markers.addLayer(marker)
    }
    map.addLayer(markers);
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    return "";
}