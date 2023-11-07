import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

const AddProduct = (props) => {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleAddProduct = () => {
        let newProduct = { 
            id: "Shirt", 
            name: 'Shirt', 
            quantity: 0, 
            unitprice: 500 }
    }

    return (
        <div>
            <input type="text" placeholder="Name"></input>
            <input type="number" placeholder="Price"></input>
            <button class="btn btn-primary" onClick={AddProduct}>Add Product</button>
            <p></p>
        </div>

    )
}



export default AddProduct