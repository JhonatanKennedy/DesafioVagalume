import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import { ClientPage, BackgroundM, TableChart, ClientInfo, AnimationContainer } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import Api from '../../api/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import NewChart from '../../components/Chart/chart';

export default function Client(){

    const { id, name } = useParams();
    const [data,setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getClient(){
            const token = localStorage.getItem('@Vagalume:token');
            Api.defaults.headers.authorization = token;
            try{
                const response= await Api.get(`/get_client_data/${id}`);
                const data = response.data.data;
                setData(data);

            }catch (err){
                alert(err.message);
            }
        }
        getClient();
    });

    return(
        <ClientPage>
            <BackgroundM>
                <Menu/>
            </BackgroundM>
            <AnimationContainer>
                <TableChart>
                    <button onClick={() => {history.push('/')}}>
                        <AiOutlineArrowLeft size={35}/>
                    </button>
                    <ClientInfo>
                        <div className='iconClient'>
                            <b>{name[0]}</b>
                        </div>
                        <div className='nameClient'>
                            {name} 
                        </div>
                    </ClientInfo>
                    <br/>
                    <br/>
                    <div className = 'chart'>
                        <NewChart row={data}/>     
                    </div>
                </TableChart>
            </AnimationContainer>
        </ClientPage>
    );
}