import { useEffect, useState } from "react";

const Menu = () => {

const [menu, setMenu] = useState([]);

useEffect(() => {
    fetch('/menu.json')  
},[])

    return (
        <div>
            
        </div>
    );
};

export default Menu;