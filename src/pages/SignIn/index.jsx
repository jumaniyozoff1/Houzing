import React,{useRef} from 'react'
import { Container, Wrapper } from './style'
import Input from '../../components/Generic/Input'
import Button from '../../components/Generic/Button'
import {useMutation} from 'react-query'
 


const {REACT_APP_BASE_URL : url} =process.env


const SignIn = () => {

  const emailRef = useRef('')
  const pwRef = useRef('')
  const {mutate} = useMutation(()=>{
    return(
      fetch(`${'url'}public/auth/login`,
      {method:'POST',
      headers:{'Content-type':'appliaction/json'},
      body:JSON.stringify({email:emailRef.corrent.value, password: pwRef.corrent.value})
      }
      ) 
      .then(res=> res.json)
    )
  },
  )

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
      </Wrapper>
    </Container>
  )
}

export default SignIn