import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import './App.css';

function App() {
    return (
        <AppProvider>
            <div class="App">
                <div class="item">
                    <h1>Shopping App</h1>
                    <div class="columns-container" id="spacing">
                        <div class="columns"><CartValue></CartValue></div>
                        <div class="columns"><Location></Location></div>
                    </div>
                </div>
                <div class="item">
                    <h1>Shopping Cart</h1>
                    <div id="spacing">
                        <ExpenseList></ExpenseList>
                    </div>
                </div>
                <div class="item">
                    <h1>Add Items</h1>
                    <div><ItemSelected></ItemSelected></div>
                </div>
            </div>
        </AppProvider>
    );
}

export default App;
