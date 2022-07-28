import { useState } from 'react';
import defaultImage from '../images/default-city.jpg';

export default function CityCard({ cityScape, cityName }: any) {
  const [cityImage, setCityImage] = useState(cityScape);

  function clickCity() {
    console.log('click');
  }

  const handleError = () => setCityImage(defaultImage);

  return (
    <li>
      <a href="#" onClick={clickCity}>
        <div className="cityCard">
          <p className="cityCardTitle">{cityName}</p>
          <img className="cityCardMap" src={cityImage || defaultImage} onError={handleError} alt="Cityscape" />
        </div>
      </a>
    </li>
  );
}
