import React from 'react';

import Input from '../../shared/components/FromElements/Input';
import './NewPlace.css';

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="please enter a valid title."
      />
    </form>
  );
};

export default NewPlaces;
