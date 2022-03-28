import React from 'react';
import { useSelector } from 'react-redux';
import './ProductInfoContainer.css'
import {getRetailProductInfo} from '../store/selectors';

const ProductInfoContainer: React.FC = () => {
    const retailProductInfo = useSelector(getRetailProductInfo);
    return (
        <div className='product-info-container'>
            <img
                className="image"
                src={retailProductInfo.image}
                alt="retail item"
            />
            <h4>{retailProductInfo.title}</h4>
            <span className="subtitle">{retailProductInfo?.subtitle}</span>
            <div className="tags-container">
                <div>
                    {retailProductInfo.tags?.map((tag: string, index: number) => (
                        <div key={index} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductInfoContainer
