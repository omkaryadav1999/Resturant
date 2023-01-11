import React, { useEffect, useState } from "react";
import Menu from "./Menu.js"
import Menucard from "./menucard";
import "./styles.css";
import Navbar from "./Navbar.js";

const unique = [...new Set(Menu.map((value) => {
    return value.category
})), "All"]


const Resturant = () => {
    const [menuData, setMenudata] = useState(Menu)
    const [menuList, setMenulist] = useState(unique)
    const filterItem = (input) => {
        if (input === "All") {
            setMenudata(Menu)
            return;
        }
        const filter = Menu.filter((value) => {
            return value.category === input
        })
        setMenudata(filter)
    }
    return (
        <>
            <Navbar from filterItem={filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />
        </>
    );
};

export default Resturant;

