import React,{useState} from 'react'
import { Container, Results, Wrapper } from './style'
import Filter from '../Filter'
import Card from '../Card'
import {useQuery} from 'react-query'
import {useLocation, useNavigate} from 'react-router-dom'


const {REACT_APP_BASE_URL: url} = process.env

const Properties = () =>{
    const {search} = useLocation()
    const [data,setdata] = useState([])
    const navigate = useNavigate()

    useQuery(['get started', data], ()=>{
        return fetch(`${url}v1/houses/list${search}`).then(res=>res.json())
    },
    {
        onSuccess:(res)=>{
            setdata(res?.data || []);
        }
    })
    const onSelect = (id) =>{
        console.log(id,"selected");

    }
    return(
        <Container>
            <Filter/>
            <h1 className='title'>Properties</h1>
            <p className='description'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            <Wrapper>
            <Results>{data?.length}results</Results>
                {
                    data.map((value)=>{
                        return(
                            <Card onClick={()=>onSelect(value?.id)} key={value?.id} info={value}/>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}
export default Properties