import React from 'react'

const  GetProductDetails = async ({ params }) => {
    console.log(params);
    const id = params.productId;

    try {
        const response = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }


}

export default GetProductDetails