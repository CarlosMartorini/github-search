import { Button, Input } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useState } from 'react';
import Card from '../Card';
// import './style.css';


const Search = () => {

  const [ url ] = useState('https://api.github.com/repos/');
  const [ search, setSearch ] = useState('');
  const [ error, setError ] = useState('');

  const [ arrCards, setArrCards ] = useState([]);

  const request = () => {
    setError('')
    setSearch('')
    fetch(`${url}${search}`)
    .then((response) => response.json())
    .then((response) => response.message === undefined ? setArrCards([...arrCards, response]) : setError(`${response.message}`))
  }

  const handleSearch = () => {
    request();
  }

  console.log(error)
  console.log(arrCards)

    return(
        <div>
          <div>
            <Input value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: 460, margin: 8 }}
              placeholder="Insert exact owner/repo..."
              />
            <Button onClick={() => handleSearch()} variant='contained' color='primary' style={{height:'55px', padding:'20px'}}>
                Search
                <PageviewIcon style={{marginLeft:'10px'}}/>
            </Button>
          </div>

          {error !== '' && <span style={{color:'red', fontSize:'16px'}}>{error}: Something wrong, check your owner and repo search</span>}

          <div className='cards-container'>

          { 
            arrCards.map((card, index) => (
              <Card key={index} cardsList={card}/>
            ))
          }

          </div>

        </div>

    )
}

export default Search;