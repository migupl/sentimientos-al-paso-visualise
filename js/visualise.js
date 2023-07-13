import { data } from '../notebooks/output//sentiments_by_district_geo.js'

window.onload = _ => {
    const map = document.querySelector('leaflet-map');

    Object.keys(data).forEach(key => {
        const features = data[key];
        setTimeout(() => {
            map.dispatchEvent(new CustomEvent('x-leaflet-map-geojson-add', {
                detail: {
                    geojson: features
                }
            }))
        }, 200)
    })
}