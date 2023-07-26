import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import { useState, useEffect } from "react";
import locator from "../../Image Component/locator.png"

function MapComponent() {
  const [map, setMap] = useState();
  const lon = 22.572645;
  const lat = 88.363892;

  const vectorSource = new VectorSource();
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  const point = new Point(fromLonLat([lon, lat]));
  const feature = new Feature({
    geometry: point,
  });
  vectorSource.addFeature(feature);

  const markerStyle = new Style({
    image: new Icon({
      src: `${locator}`,
      anchor: [0.5, 1],
      scale: 0.5,
    }),
  });
  
  feature.setStyle(markerStyle);

  useEffect(() => {
    const newMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      target: map,
      view: new View({
        center: [0, 0],
        zoom: 12,
      }),
    });
    setMap(newMap);
  }, []);

  return <div className="map" id="map"></div>;
}

export default MapComponent;
