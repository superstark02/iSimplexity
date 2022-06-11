import { MapContainer, TileLayer, Circle, Popup, CircleMarker } from 'react-leaflet';
import './App.css'

const regions = [{
  "id": 1,
  "region": "US",
  "data": 290,
  "x": 51.51,
  "y": -0.9,
  "radius": 20
}, {
  "id": 2,
  "region": "US",
  "data": 490,
  "x": 51.51,
  "y": 0.12,
  "radius": 12
}, {
  "id": 3,
  "region": "AT",
  "data": 790,
  "x": 51.51,
  "y": 0.9,
  "radius": 25
}, {
  "id": 4,
  "region": "SE",
  "data": 590,
  "x": 51.2,
  "y": -0.12,
  "radius": 29
}, {
  "id": 5,
  "region": "AT",
  "data": 290,
  "x": 52.51,
  "y": -0.19,
  "radius": 30
}, {
  "id": 6,
  "region": "SE",
  "data": 390,
  "x": 53.1,
  "y": 0.1,
  "radius": 10
}]

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        regions.map((item, index) => {
          return (
            <CircleMarker center={[item.x,item.y]} pathOptions={{
              fillColor: 'blue',
              fillOpacity: item.data/1000
            }} 
            radius={item.radius}
            >
              <Popup>Region:{item.region}, Data:{item.data}</Popup>
            </CircleMarker>
          )
        })
      }
    </MapContainer>
  );
}

export default App;
