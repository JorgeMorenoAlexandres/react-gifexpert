import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChangue = (event) => {
        setInputValue(event.target.value)
        console.log(event.target.value);
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        //addCategories( setCategories => [ ...setCategories, inputValue ])
        //setInputValue('');
        console.log('onNew' ,inputValue );
        onNewCategory(inputValue.trim());
    }
    
  return (
    <form onSubmit={ onSubmit }>
            <input type="text" 
            placeholder="look" 
            value={inputValue} 
            onChange={onInputChangue}  
            />   
    </form> 
  )
}