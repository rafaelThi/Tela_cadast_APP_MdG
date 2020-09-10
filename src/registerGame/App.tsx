import React, {useState, FormEvent} from 'react';

import './styles.css'

import api from '../Server/api';

import Input from '../Components/input';
import Textarea from '../Components/TextArea';


import './styles.css'

function RegisterGame() {

    const [nameGame, setnameGame] = useState('');
    const [photo, setphoto] = useState('');
    const [platform, setplatform] = useState('');
    const [state, setstate] = useState('');
    const [generous, setgenerous] = useState('');
    const [cost, setcost] = useState('');
    const [bio, setbio] = useState('');
    const [city, setcity] = useState('');
    const [nameSalesman, setnameSalesman] = useState('');
    const [whatsapp, setwhatsapp] = useState('');



    function createClass(e: FormEvent) {
        e.preventDefault();

        api.post('games',{
            nameGame, 
            photo,
            platform,
            state,
            generous,
            cost,
            bio, 
            city,
            nameSalesman,
            whatsapp, 
        }).then(()=>{
            alert ('Cadastro relaizado com Sucesso')

        }).catch(()=>{
            alert('Error no cadastro')
        })
    }

  return(
  <div id="page-teacher-form" className="container">
      <h1 className="titlePage">Cadastro de Games</h1>
    <main>
        <form onSubmit={createClass}>
        <fieldset>
            <legend>Seus Dados</legend>
            
            <Input name="nameSalesman"
            label= "Nome Completo" 
            value={nameSalesman} 
            onChange={(e)=>{ 
                setnameSalesman(e.target.value)
            }} />

            

            <Input name="whatsapp" 
            label= "Whatsapp" 
            value={whatsapp} 
            onChange={(e)=>{ 
                setwhatsapp(e.target.value) 
            }} />

            
    <Input name="city" 
            label= "Cidade" 
            value={city} 
            onChange={(e)=>{ 
                setcity(e.target.value) 
            }} />

            

        </fieldset>

        <fieldset>
            <legend>Sobre o Game</legend>
            
            <Input name="nameGame" 
            label= "Nome de Game" 
            value={nameGame} 
            onChange={(e)=>{ 
                setnameGame(e.target.value) 
            }} />

            <Input name="photo" 
            label= "Foto (Apenas o link)" 
            value={photo} 
            onChange={(e)=>{ 
                setphoto(e.target.value) 
            }} />

    <Input name="platform" 
            label= "Plataforma" 
            value={platform} 
            onChange={(e)=>{ 
                    setplatform(e.target.value) 
            }}
            /><Input name="state" 
            label= "Estado" 
            value={state} 
            onChange={(e)=>{ 
                    setstate(e.target.value) 
            }}
            /><Input name="generous" 
            label= "Gênero" 
            value={generous} 
            onChange={(e)=>{ 
                    setgenerous(e.target.value) 
            }}
            />


            <Input name="cost" 
            label= 'Preço (sem o ",00")'
            value={cost} 
            onChange={(e)=>{ 
                    setcost(e.target.value) 
            }}
            />
            <Textarea  name="bio" 
            label="Bio do Game" 
            value={bio} 
            onChange={(e)=>{ 
                setbio(e.target.value) 
            }} />

        </fieldset>
        
    <footer>
        <p>
            Importante! <br/>
            Preencha todos os Dados!!
        </p>

        <button type='submit'>
            Salvar Cadastro
        </button>
    </footer>
    </form>

    </main>
</div>
)
}

export default RegisterGame;
