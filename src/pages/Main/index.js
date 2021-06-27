import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu/index';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import Api from '../../api/api';
import { MainPage, TableContainer, BackgroundMenu,TableClients, HalfTable, BlankSpace } from './styles';
import { Link } from 'react-router-dom';
import ButtonLogOut from '../../components/ButtonLogout/index';

export default function Main(){

    const [client,setClient] = useState([]);
    const [reverse,setReverse] = useState(true);

    useEffect(() => {
        async function getClients(){
            const token = localStorage.getItem('@Vagalume:token');
            Api.defaults.headers.authorization = token;
            try{
                const response = await Api.get('/get_clients');
                setClient(response.data.clients.sort());
            }catch (err){
                alert(err.message);
            }
        }
        getClients();
    },[]);
    
    function Reverse(){
        setClient(client.reverse());
        setReverse(!reverse);
    }

    return(
        <MainPage>
            <BackgroundMenu>
                <Menu/>
            </BackgroundMenu>         
            <TableContainer>
                <HalfTable>
                    <h2>Visão geral</h2>
                    <TableClients>
                        <ul>
                            <li onClick={() => {Reverse()}} >
                                <b className='reverse'>Nome 
                                    {reverse && <AiOutlineArrowUp />}
                                    {!reverse && <AiOutlineArrowDown />}
                                </b>
                            </li>
                            {client?.map((element) => (
                                <Link key={element.id} id={element.id} to={`/client/${element.id}/${element.name}`}>
                                    <li key={element.id} id={element.id} className='clients'>
                                        {element.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </TableClients>
                </HalfTable>
                <BlankSpace>
                </BlankSpace>
            </TableContainer>
            <ButtonLogOut/>
        </MainPage>
    );
}