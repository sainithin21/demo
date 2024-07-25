import React ,{useMemo,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const expensiveCalulation = ()=>{
  console.log("calculating ...");
  let num = 0;
  for(let i=0;i<1000000000;i++){
    num = num + 1;
  }
  return num;
}

const Register = () => {

  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState([]);

  const calculation = useMemo(()=>expensiveCalulation(),[count]);

  function increment(){
    setCount((count)=>count+1)
  }

  function addTodo(){
      setTodos((t)=>[...t,"new task"]);
  }

  return (
    <div>
      <div>
          <h2>My todos</h2>
          {
            todos.map((todo,index)=>{
               return <p key={index}>{todo}</p>;
            })
          }
          <button onClick={addTodo}>add todo</button>
      </div>
      <hr/>
      <div>
          Count : {count}
          <button onClick={increment}>+</button>
          <h2>Expensive calculation</h2>
          {calculation}
      </div>
      <Link to="/user-list">userlist</Link>
    </div>
  )
}

export default Register;