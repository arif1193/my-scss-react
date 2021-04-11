import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} =props.product
    
    return (
        <div>
            <h5>This Is your Category Detail </h5>
            <h6>Selected Product : {name}</h6>
            
        </div>
    );
};

export default CategoryDetail;