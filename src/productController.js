import React, { Component } from "react";
import ProductDAO from "./models/productDAO";


function ProductView(props) {
    return (
       <div>
           <h1>Products</h1>
       </div>
    );
}


export default class ProductController extends Component {
    constructor(props) {
        super(props);

        const productDAO = new ProductDAO();
        const productArray = productDAO.getList();

        this.state ={
            productArray: productArray,
            productDAO: productDAO,
        }
    }

    render() {
        return (
            <div>
                <ProductView />
            </div>
        );
    }
}
