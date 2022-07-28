import * as React from 'react';
import CityCard from './CityCard';

export default function CityInfo({ data }: any) {
  return <ul className="cities">{data && data.map((city: any) => <CityCard key={city.id} cityName={city.title} cityScape={city.image_url} />)}</ul>;
}
