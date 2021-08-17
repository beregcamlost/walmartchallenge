import { useEffect, useState, useCallback } from 'react';
import { List, Empty, Button } from 'antd';
import { CardProduct } from './card';
import { ProductService } from '../../services';
import './list.css';

export const ListProduct = ({ search }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const loadProducts = useCallback(async (page) => {
        setLoading(true);
        try {
            const newProducts =  await ProductService.getProducts(search, page);
            if (products && newProducts.page > 1) {
                newProducts.docs = [...products.docs, ...newProducts.docs];
            }
            setProducts(newProducts);
        } catch {
            setProducts(undefined);
            console.warn("Load data failed");
        } finally {
            setLoading(false);
        }

    }, [search, products]);

    if (!products ||  !products.docs || products.docs.length === 0) {
        return <div className="list-product">
            <Empty />
        </div>;
    }
    return <div className="list-product">
        <List 
            loading={loading}
            loadMore={products && products.hasNextPage && <Button type="primary" onClick={() => {
                loadProducts(products.nextPage);
            }}>Ver mas</Button>}
            grid={{ gutter: 16, column: 4 }} 
            dataSource={products.docs}
            renderItem={(product) => (<List.Item>
                <CardProduct product={product} />
            </List.Item>)} 
        />
    </div>;
}