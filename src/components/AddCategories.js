import React, { useState } from 'react';
import PropTypes from 'prop-types';

 const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( c => [inputValue, ...c] );
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit = { handleSumbit}>
            <input
                type='text'
                value = {inputValue}
                onChange = {handleInput}
            >
            </input>
        </form>
    )
}

AddCategories.propTypes = {

    setCategories: PropTypes.func.isRequired

}

export default AddCategories;
