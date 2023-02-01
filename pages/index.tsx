import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Login } from '../containers/Login'
import { Home } from '../containers/Home'
import styles from '../styles/Home.module.css'


export default function Index() {

  const[token, setToken] = useState<String | null >('');

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const at = localStorage.getItem('accessToken');
      setToken(at);
    }
  },[])

  return token ? <Home setToken={setToken}/> : <Login setToken={setToken}/>
}
