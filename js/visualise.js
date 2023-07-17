import { data } from '../notebooks/output//sentiments_by_district_geo.js'

window.onload = _ => {
    const map = document.querySelector('leaflet-map');

    const loadMessage = document.getElementsByClassName('load-message')[0];

    Object.keys(data).forEach(key => {
        const features = data[key];
        setTimeout(() => {
            loadMessage.textContent = `Cargando el distrito de '${key}'`
            map.dispatchEvent(new CustomEvent('x-leaflet-map-geojson-add', {
                detail: {
                    geojson: features
                }
            }))
        }, 200)
    })

    loadMessage.textContent = 'Se han cargado todos los distritos'
}