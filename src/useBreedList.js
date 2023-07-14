import { useState, useEffect } from 'react';

const localcache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localcache[animal]) {
      setBreedList(localcache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      setBreedList(json.breeds);
      localcache[animal] = json.breeds || [];
      setStatus('loaded');
    }
  }, [animal]);
  // console.log(animal, status, breedList);
  return [breedList, status];
}
