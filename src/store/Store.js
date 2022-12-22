import ListView from "./ListView.js";
import CardsView from "./CardsView.js";
import { useState } from "react";
import IconSwitch from "./IconSwitch";

function Store() {
    const [ icon, setIcon ] = useState('view_list');

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const onSwitch = () => {
      setIcon((prevIcon) => { 
        if(prevIcon === 'view_list') {
          return 'view_module';
        } else {
          return 'view_list';
        }
      } )
    }

    const result = (mode) => {
      if(mode === 'view_module'){
        return <CardsView cards={ products } />;
      } else {
        return <ListView items={ products } />;
      }
    }

    return <IconSwitch foo={ onSwitch } pic={ icon } res={ result(icon) }/>
}

export default Store;
