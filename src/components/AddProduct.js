import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

const AddProduct = () => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleAddProduct = () => {
        let newProduct = { 
            id: name, 
            name: name, 
            quantity: 0, 
            unitprice: price }

        dispatch({
            type: "addProduct",
            payload: newProduct
        })
    }

    return (
        <div>
            <input type="text" placeholder="Name" onChange={handleNameChange}></input>
            <input type="number" placeholder="Price" onChange={handlePriceChange}></input>
            <button class="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
            <p></p>
        </div>

    )
}



export default AddProduct