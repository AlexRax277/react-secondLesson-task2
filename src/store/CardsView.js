import {v4 as uuid} from 'uuid';
import './Store.css';

function CardsView({ cards }) {
    const data = cards.map((shopCard) => {
        return (<div className='flex-element' key={ uuid() }>
            <div className='name'>{ shopCard.name }</div>
            <div className='color'>{ shopCard.color }</div>
            <div>
                <img className='img' src={ shopCard.img } alt={ shopCard.name } />
            </div>
            <div>
                <span className='price'>${ shopCard.price }</span>
                <button className='btn'>add to cart</button>
            </div>
        </div>);
    })
    return (<div className='shopCards'>{ data }</div>);
}

export default CardsView;