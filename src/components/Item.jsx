import React from 'react'
import { Link } from 'react-router-dom'


function Item ({product}) {

    const { title, pictureUrl, price, description, stock, category, id } = product;

    return (
        <>
        <div className="row">
            <div className="row row-cols-3 d-flex m-2 p-2 shadow " style={{ width: "21rem" }}>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={pictureUrl} className ="card-img-top" height="170 px" alt="foto de lentes"/>
                    <div className="card-body ">
                        <p className="card-title">{title}</p>
                        <p className="card-text">Categoria {category}</p>
                        <p className="card-text">Precio: $ {price}
                        <br />
                            {description}</p>
                        <br />
                        <p className="card-text qty-detail">Hay {stock} lentes en stock</p>
                        <Link to={`/item/${id}`}> <div className="button center"><button className="btn btn-primary">Ver descripción</button></div></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Item
