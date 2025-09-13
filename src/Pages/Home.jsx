import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home"
    // style={{
    //     backgroundImage:" https://images.unsplash.com/photo-1747586181200-96551a018ed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // }}
    
    >
        <div className="container6">
            <Link to='/demo' className='link'>Demo</Link><br/>
            <Link to='/demo1'className='link'>Demo1</Link><br/>
            <Link to='/demo2'className='link'>Demo2</Link><br/>
            <Link to='/demo3'className='link'>Demo3</Link><br/>
            <Link to='/demo4'className='link'>Demo4</Link><br/>
            <Link to='/demo5'className='link'>Demo5</Link><br/>
            <Link to='/demo6'className='link'>Demo6</Link><br/>
            <Link to='/demo7'className='link'>Demo7</Link><br/>
            <Link to='/tailwinddemo'className='link'>TailwindDemo</Link><br/>
            <Link to='/tailwinddemo1'className='link'>TailwindDemo1</Link><br/>
            <Link to='/tailwinddemo2'className='link'>TailwindDemo2</Link><br/>
            <Link to='/tailwinddemo3'className='link'>TailwindDemo3</Link><br/>
            <Link to='/tailwinddemo4'className='link'>TailwindDemo4</Link><br/>
            <Link to='/tailwinddemo5'className='link'>TailwindDemo5</Link><br/>
            <Link to='/tailwinddemo6'className='link'>TailwindDemo6</Link><br/>
            <Link to='/tailwinddemo7'className='link'>TailwindDemo7</Link><br/>
            <Link to='/todolist'className='link'>TodoList</Link><br/>

        </div>
      
      
      
    </div>
  )
}

export default Home
