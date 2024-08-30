import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State',
        description: 'One of the most Beautifull',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/220px-Burj_Khalifa.jpg',
        address: 'tytyytytyt',
        location: {
            lat: 40.5454545,
            lng: -73.7676767
        },
        creator: 'u1' 
    },
    {
        id:'p2',
        title: 'Empire State',
        description: 'One of the most Beautifull',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/220px-Burj_Khalifa.jpg',
        address: 'tytyytytyt',
        location: {
            lat: 40.5454545,
            lng: -73.7676767
        },
        creator: 'u2' 
    }
]

const UserPlaces = () => {
   const userId = useParams().userId;
   const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
   return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;