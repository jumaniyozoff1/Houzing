import React,{useRef} from 'react'
import { Container, Wrapper } from './style'
import Input from '../../components/Generic/Input'
import Button from '../../components/Generic/Button'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'


const {REACT_APP_BASE_URL : url} =process.env

const SignUp = () => {
  const Login =useRef('')
  const FirstName =useRef('')
  const LastName =useRef('')
  const Password =useRef('')
  // const ReEnter =useRef('')
  const navigate =useNavigate()
  const {mutate} = useMutation(()=>{
    return(
      fetch(`${url}public/auth/register`,
      {method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({email:Login.current.value,firstname:FirstName.current.value,lastname:LastName.current.value,password:Password.current.value})
      }
      ) 
      .then(res=> {
        res.json()
      })
    )
  },
  {
    onSuccess: (res) => {
      const reg ='bd8e6aa6-6758-44e1-8e7f-c46469c2a01e'
      localStorage.setItem('register',reg)
      if(reg) navigate('/home')
      
    },
  }
  )
  const onSubmit =()=>{
    mutate()
  }
  
  return (
    <Container>
      <Wrapper>
        <h1 className='title'>Registration</h1>
        <Input ref={Login}  placeholder={'Login'}/>
        <Input ref={FirstName}  placeholder={'First name'}/>
        <Input ref={LastName}  placeholder={'Last name'}/>
        <Input ref={Password}  placeholder={'Password'}/>
        {/* <Input ref={ReEnter}  placeholder={'Re-enter password'}/> */}
        <Button onClick={onSubmit} type={'primary'}>Register</Button>
      </Wrapper>
    </Container>
  )
}

export default SignUp