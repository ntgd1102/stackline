import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import './ProductInfoContainer.css'
import {getRetailProductInfo} from '../store/selectors';

const ProductInfoContainer: React.FC = () => {
    const retailProductInfo = useSelector(getRetailProductInfo);
    if (_.isEmpty(retailProductInfo)) {
        return null;
    }

    return (
        <div className='product-info-container'>
            {retailProductInfo.image && <img
                className="image"
                src={retailProductInfo.image}
                alt="retail item"
            />}
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
