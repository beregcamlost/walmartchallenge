import { Card, Tag } from 'antd';
import './card.css';

export const CardProduct = ({product}) => {
    const formatter = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });
    return <Card>
        <Card.Meta  
            avatar={<img className="card-img" alt="example" src={`//${product.image}`} />} 
            title={<div>
                <span>
                    {product.brand}
                </span>
                {product.discount && <span style={{  marginLeft: '.5rem' }}>
                    <Tag color="blue"> {product.discount * 100} %</Tag>
                </span>}
            </div>} 
            description={product.description} 
        >
            
        </Card.Meta>
            <div >
                <strong>Precio Total:</strong> <span style={{ textDecoration: product.discount ? "line-through" : "" } }>{formatter.format(product.price)}</span>
            </div>
            {product.discount && <div>
               <strong> Precio con Descuento: </strong> {formatter.format(product.price - (product.price * product.discount))}
            </div>}
    </Card>
};