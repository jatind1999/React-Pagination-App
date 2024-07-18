import {useState} from "react"
import { useFetchProducts } from "./hooks/useFetchProducts";
import { Product } from "./components/Product";

export const App = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const totalPages = 10;
    const allProducts = useFetchProducts(pageNumber);
    const handlePagination = (pageNumber) => {
        setPageNumber(pageNumber);
    }
    const handlePreviousPage = () => handlePagination(pageNumber-1);
    const handleNextPage = () => handlePagination(pageNumber+1);

    return (
        <div className="container">
            <h1>Pagination Implementation</h1>
            <div className="products-container"> 
                {allProducts.map(product => {
                    const {id, title, description, category, price, rating, thumbnail} = product;
                    return <Product key={id} title={title} description={description} category={category} price={price} rating={rating} thumbnail={thumbnail}/>
                })}
            </div>
            <div className="pagination-box">
                <span onClick={handlePreviousPage} className={`pagination-indicator ${pageNumber === 0 ? 'hidden': ''}`}>⬅️</span>
                {allProducts.map((_, index) => {
                    return <span onClick={() => handlePagination(index)} className={`pagination-number ${index === pageNumber ? 'active' : ''}`} key={index}>{index+1}</span>
                })}
                <span onClick={handleNextPage} className={`pagination-indicator ${pageNumber === totalPages-1 ? 'hidden': ''}`}>➡️</span>
            </div>
        </div>    
    );
};