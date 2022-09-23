import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true); 

    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }

    useEffect(()=>{
        getImages();
    }, [])

  return {
    //Si los atributos de un objeto se llaman igual al valor de la variable, no es necesario
    //agrergarlo images:images, solo dejandolo solo es correcto
    images,
    isLoading
  }
}
