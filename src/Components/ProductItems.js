import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AckModal from './AckModal';
import ItemCard from './ItemCard'
import AckCartModal from './AckCartModal';
import "./styling/products.css";

const ProductItems = () => {

    let [Added, setAdded] = useState(false);
    let location = useLocation();
    let [itemList, setItemList] = useState();

    let getJson = async () => {
        try {
            let res = await fetch('/productDetails.json', {
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

    let actFunction = (res) => {
        return res.json();
    }

    let fetchData = async (stateObj) => {
        let json = await getJson();
        let actual = await actFunction(json);
        setItemList(actual.filter((i) => {
            return i.id === stateObj.ele
        })[0].all_data)
        return;
    }

    let haddleAck = () => {
        setAdded(true);
    }

    useEffect(() => {
        fetchData(location.state);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (Added) {
            let modal = document.getElementById("modal");
            modal.classList.add("modal-show");
            setTimeout(() => {
                setAdded(false);
                modal.style.top = '-5%';
            }, 1500)
        }
    }, [Added]);

    return (
        <>
            {Added && <AckModal />}
            <div className="row mt-5 mx-2">
                {itemList && itemList.map((i, e) => {
                    return <ItemCard key={e} data={i} setAdd={haddleAck} />
                })}

                <AckCartModal />
            </div>
        </>
    )
}

export default ProductItems