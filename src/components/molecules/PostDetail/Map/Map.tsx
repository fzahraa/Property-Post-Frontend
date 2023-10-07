import { useState, useEffect, FC } from 'react';
import loader from './googleMapsLoader';

export interface IMapDetail {
  address?: string;
}

const Map: FC<IMapDetail> = ({ address }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  //const [map, setMap] = useState<null>(null);

  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
       geocoder.geocode({ address }, (results : any, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 18,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById('map')!,
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,           
            map: newMap,
            title: address,
            // label: {
            //   text: '<h1>118 Jahanzaib Street, Shadab Colony Lodhi Colony, Multan, Pakistan</h1>',
            //   fontSize :"30px",
            
            // },
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return <div id="map" style={{ height: '588px' }}></div>;
};
export default Map;
