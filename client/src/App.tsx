import { useState } from 'react';
import './App.css';
import Layout from '@/Layout';
import ProductForm from '@/components/productform/ProductForm';
import Summary from '@/components/summary/Summary';
import ProductTable from '@/components/producttable/ProductTable';

function App() {
    return (
        <>
            <Layout>
                <Summary/>
                <ProductForm />
                <ProductTable/>
            </Layout>
        </>
    );
}

export default App;
