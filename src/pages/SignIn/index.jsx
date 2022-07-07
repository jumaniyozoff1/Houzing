import React,{useRef} from 'react'
import { Container, Wrapper } from './style'
import Input from '../../components/Generic/Input'
import Button from '../../components/Generic/Button'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'


const {REACT_APP_BASE_URL: url} =process.env
const SignIn = () => {
  const {mutate} = useMutation(()=>{
  return fetch(`${url}public/auth/login`, {method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({email:emailRef.current.value,password:pwRef.current.value})})
    .then(res=> res.json())
  },
  {
    onSuccess:(res)=>{
      // console.log(res.authenticationToken);
      localStorage.setItem('token',res.authenticationToken)
      if(res.authenticationToken) navigate('/home')
    },
    onError:(err)=>{
      // console.log(err);
    }
  })

  const navigate =useNavigate()
  const emailRef = useRef('')
  const pwRef = useRef('')
  
  const onSubmit = ()=>{
    mutate()
  }  
  return (
    <Container>
      <Wrapper>
        <h2 className='sub-title'>Sign in</h2>
        <h3 className='login'>Login</h3>
        <Input ref={emailRef}  mt={10} placeholder={'Ali Tufa...'}  />
        <Input ref={pwRef}  mt={10}  placeholder={'Password'}  />
        <Button onClick={onSubmit} mt={15} type={'primary'} width ={'100%'}>Login</Button>
        <span onClick={()=> navigate('/signup')}>Create a new account</span>
      </Wrapper>
    </Container>
  )
}

export default SignIn





  // const {mutate} = useMutation(()=>{
  //   return(
  //     fetch(`${url}public/auth/login`,
  //     {method:'POST',
  //     headers:{'Content-type':'appliaction/json'},
  //     body:JSON.stringify({email:emailRef.current.value, password: pwRef.current.value})
  //     }
  //     ) 
  //     .then(res=> res.json)
  //   )
  // },
  // )