import {v4 as uuid} from 'uuid';
import './Store.css';

function ListView({ items }) {
    const data = items.map((shopItem) => {
        return (<li className='element' key={ uuid() }><img src={ shopItem.img } alt={ shopItem.name } />
            <span className='name'>{ shopItem.name }</span>
            <span className='color'>{ shopItem.color }</span>
            <span className='price'>${ shopItem.price }</span>
            <button className='btn'>add to cart</button>
        </li>);
    })
    return (<ul className='listItems'>{ data }</ul>);
}

export default ListView;
