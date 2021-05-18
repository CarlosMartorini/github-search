import './style.css';
import { Link } from 'react-router-dom';

const Card = ({cardsList}) => {
    return(
        <div className='cards-container'>
            <div className='card'>
                <div className='title-container'>
                    <img className='img' src={cardsList.owner.avatar_url} alt={cardsList.login}></img>
                    <div className='title-description'>
                        <h3 className='title' ><Link to={location => ({pathname: cardsList.html_url})} target='_blank'>{cardsList.full_name}</Link></h3>
                        <p className='description'>{cardsList.description}</p>
                        <Link to={location => ({pathname: cardsList.homepage})} target='_blank' style={{color:'navy', fontSize: '16px', textAlign:'left'}}>Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;