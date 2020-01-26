import React from 'react';
import '../assets/style/index.css';
import Axios from 'axios';

export default function Sc00(compProps) {

  const [state, setState] = React.useState({});

  const handleSetState = (name, value) => {
    setState(state => ({
      ...state,
      [name]: value
    }));
  };

  React.useEffect(() => {
    // Fazer Chamada pro Yahoo.
    // Aguardando confirmação...
  },[])

  return (
    <div className={'backgroundHome coldWeather'} >
      <section>
        <div className='text-center mg5rem'>
          <h1>Previsão do Tempo</h1>
        </div>
      </section>
    </div>
  )
}