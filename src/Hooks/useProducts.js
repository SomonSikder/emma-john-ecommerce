import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {console.log(data), setProducts(data)})
    },[])

    return products
};

export default useProducts;