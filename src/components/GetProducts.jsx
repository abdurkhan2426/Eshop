import React from 'react'

const  GetProductDetails = async () => {

    try {
        const response = await fetch(
            `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`
        );
        const data = response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }


}

export default GetProductDetails