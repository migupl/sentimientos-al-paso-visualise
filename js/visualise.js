window.onload = _ => {
    const fetchJSON = async () => {
        const response = await fetch('../notebooks/output/sentiments_by_district_geo.json');
        const data = await response.json();
        return data
    }

    fetchJSON().then(data => {
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
    })
}