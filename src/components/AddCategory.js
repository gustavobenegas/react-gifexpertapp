import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault(); // evitar el comportamiento nativo de la caja de formularios

      if(inputValue.trim().length >2){
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');
      }

     

  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </Fragment>
  );
};

// validacion que obliga al desarrollador a proveer informacion o funcion  nensesaria al componente hijo 
AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired 
}
