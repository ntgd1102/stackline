import React from 'react';
import { useSelector } from "react-redux";
import {getRetailProductSalesStats} from "../store/selectors";
import { Table } from 'antd';
import 'antd/dist/antd.css'
import {ColumnsType} from "antd/es/table";



const ProductStatsTableContainer: React.FC = () => {
    const salse: any = useSelector(getRetailProductSalesStats);
    const columns: any = [
        {
            title: 'Week Ending',
            dataIndex: 'weekEnding',
            sorter: (a: any, b: any) => new Date(a.weekEnding) > new Date(b.weekEnding),
        },
        {
            title: 'Retail Sales',
            dataIndex: 'retailSales',
            sorter: (a: any, b: any) => a.retailSales - b.retailSales,
        },
        {
            title: 'Whole Sales',
            dataIndex: 'wholesaleSales',
            sorter: (a: any, b: any) => a.wholesaleSales - b.wholesaleSales,
        },
        {
            title: 'Units Sold',
            dataIndex: 'unitsSold',
            sorter: (a: any, b: any) => a.unitsSold - b.unitsSold,
        },
        {
            title: 'Retailer Margin',
            dataIndex: 'retailerMargin',
            sorter: (a: any, b: any) => a.retailerMargin - b.retailerMargin,
        }
    ]

    if (!salse) {
        return null;
    }
    return (<Table columns={columns} dataSource={salse}  />);
}

export default ProductStatsTableContainer;
