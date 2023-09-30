import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import { useNavigate } from 'react-router-dom';
import AckCartModal from './AckCartModal';
import "./styling/menu.css";

const Products = () => {
    let [imgs, setimgs] = useState({});
    let navigate = useNavigate();

    let getPro = async () => {
        try {
            let res = await fetch('./data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    let getActualData = (res) => {
        return res.json()
    }

    let allProcess = async () => {
        let res = await getPro();
        let json = await getActualData(res);
        setimgs(json);
    }

    useEffect(() => {
        allProcess();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let ref = (ele, itemName) => {
        navigate(`${itemName}/${ele}`, { state: { ele, itemName } });
    }

    return (
        <>
            <div className="container">

                <h3 className="mt-5 menu-heading sub-heading">
                    Unleash your cravings with our sensational pizzas, delectable sides, desserts that take sweetness to another
                    level, and drinks that raise a toast to unforgettable moments.
                </h3>
                {imgs.all_items && imgs.all_items.map((i, e) => {
                    return <div key={e} className=''>
                        <ProductsCard alterKey={e} data={i} element={ref} />
                    </div>
                })}
            </div>
            <AckCartModal />
        </>
    )
}

export default Products
