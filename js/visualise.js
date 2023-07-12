window.onload = _ => {
    const fetchJSON = async () => {
        const response = await fetch('../assets/sentiments_by_district_geo.json');
        const data = await response.json();
        return data
    }

    fetchJSON().then(data => {
        const map = document.querySelector('leaflet-map');

        Object.keys(data).forEach(key => {
            const features = data[key];
            map.dispatchEvent(new CustomEvent('x-leaflet-map-geojson-add', {
                detail: {
                    geojson: features
                }
            }));
        })
    })
}