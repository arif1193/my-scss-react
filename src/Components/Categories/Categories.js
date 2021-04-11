import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{name:'Lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'},
{name:'Samsung', category:'modibe'}, {name:'Nokia', category:'modile'}, {name:'Applel', category:'mobile'},
{name:'Canon', category:'camera'}, {name:'Sony', category:'camera'}, {name:'Nikkon', category:'camera'}
] 

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect (() => {
        console.log({category});
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase === category.toLowerCase());
        setProducts(matchProducts);
    },[category])
    
    return (
        <div>
            <h2>Select your Categories: {category}</h2>
            {
                products.map(pd => <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;