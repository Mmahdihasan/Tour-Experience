import React from 'react';

import Input from '../../shared/components/FromElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './NewPlace.css';

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title."
      />
    </form>
  );
};

export default NewPlaces;
