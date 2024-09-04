import React from 'react';

import Input from '../../shared/components/FromElements/Input';
import './NewPlace.css';

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewPlaces;
