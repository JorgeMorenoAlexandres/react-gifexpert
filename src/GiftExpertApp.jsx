import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

import swal from 'sweetalert';

//rafc -> tab
export const GiftExpertApp = () => {

    //Los useState nunca deben de ir por una condición
    const [categories, setCategories] = useState( ['Philly'] );

    //Función que devuelve las nuevas categorías
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)){
            swal("Oops!", "Something went wrong!", "error");
            return;
        } 

        setCategories([newCategory,...categories, ]);
        //console.log(newCategory);
    }

  return (
    <>
        <h1>GiftExpressApp</h1>
        
        < AddCategory 
            onNewCategory = { value => onAddCategory(value)}
        />

            {/*Map es una propiedad para recorrer y generar nuevos datos de un arreglo */}
           
            { categories.map((category) =>(
                    <GiftGrid 
                        key = {category}
                        category = {category} 
                    />
                )) 
            }
    </>
  )
}

//Api Key: 2gV0OUWUVN9BwB9uV1LAJkntG09POhb4
// Yarn build es un comando para crear el dist para poder desplegarlo 
//a prd desde netlify