import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

const useFetchGifs = (category) => {
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
        setIsLoading(false);
    }, [category]);
    
    return {
        images,
        isLoading,
    }
}

export default useFetchGifs
