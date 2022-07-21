import React, { useEffect, useState } from 'react';
import CityInfo from './CityInfo';

export default function Hello(props: { hello: string }) {
  const [data, setData] = useState(null);
  const getData = 'http://localhost:3030/api/v1/posts';

  // yeah I know it fires twice - thanks cra18
  useEffect(() => {
    fetch(getData)
      .then((res) => res.json())
      .then((foo) => {
        // console.log('the data', foo);
        setData(foo);
      });
  }, []);

  return (
    <>
      {console.log('break yourself foo', data)}
      <h3>{props.hello}?</h3>
      <img src="https://c.tenor.com/y5mt3zS-CzoAAAAd/hello-lionel-richie.gif" alt="lionel richie stalks a blind woman" />
      <CityInfo />
    </>
  );
}
