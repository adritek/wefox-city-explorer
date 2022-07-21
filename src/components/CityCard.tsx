export default function CityCard({ cityMap, cityName }: any) {
  function clickCity() {
    console.log('click');
  }

  return (
    <li>
      <a href="#" onClick={clickCity}>
        <div className="cityCard">
          <p className="cityCardTitle">{cityName}</p>
          <img className="cityCardMap" src={cityMap || '../../public/default-city.jpg'} alt="Cityscape" />
        </div>
      </a>
    </li>
  );
}
