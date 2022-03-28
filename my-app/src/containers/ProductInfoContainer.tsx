import React from 'react';
import { useSelector } from 'react-redux';
import { getProductTitle } from '../store/selectors';

const ProductInfoContainer: React.FC = () => {
    const sdsd = useSelector(getProductTitle);
    return (
        <div>
            {sdsd}
        </div>
    );
}

export default ProductInfoContainer