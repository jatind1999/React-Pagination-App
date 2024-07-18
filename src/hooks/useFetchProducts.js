import {useState, useEffect} from 'react';

export const useFetchProducts = (pageNumber) => {

    const [products, setProducts] = useState([]);
    
    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${pageNumber*10}`);
        const data = await res.json();
        setProducts(data.products);
    }
    
    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    return products;
}