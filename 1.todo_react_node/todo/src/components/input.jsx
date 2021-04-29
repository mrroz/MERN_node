import{InputGroup,FormControl,Button, Badge} from 'react-bootstrap'
import './input.css'
import  React,{useState,useEffect } from 'react';
import axios from 'axios'

const Input = () => {

  const [todoName , setTodoName] = useState('')
  const [todoList ,setTodoList] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/todo')
    .then((response)=>{
      const todos = response.data
      const todoList=[]
      for(const index in todos){
        todoList.push({
          id:index,
          title:todos[index].title
        })
      }
      setTodoList(todoList)
    })
    .catch((err)=>{
      console.log('error in get');
    })
  })

  /////////////////////input
  const inputChangeHandler = (evetn)=>{

    setTodoName(evetn.target.value)
    console.log('inputChangeHandler');
  }
 
    /////////////////////list
  const todoAddHandler=(evetn)=>{
     evetn.preventDefault()
     setTodoList(todoList.concat(todoName))
    axios.post('http://localhost:8000/api/todo',{
      title : todoName
    }).
    then((res)=>{console.log(res);})
    .catch((err)=>{console.log('errrrrr');})
     setTodoName('')

  }

  const todoRemoveHandler =(id)=>{
    // const newList=[...todoList]
    // const filterPersons= newList.filter(item=>item.id !== id)
    // todoList.pop({id:id})
    


  }


    return ( 
        <div className=' mt-2' dir="rtl">
        <InputGroup  dir="ltr" className=" input col-md-5 col-sm-5 col-lg-6 m-6 ">
      <FormControl   onChange={inputChangeHandler} className='text-right'
        placeholder="... وارد كنيد  " value={todoName}
        
      />
      <InputGroup.Append>
      <Button className='btn' onClick={todoAddHandler} variant='success' as="input" type="submit" value="اضاف كردن" />
      </InputGroup.Append>
    </InputGroup>


    <div className= "  col-11 m-4 p-5 text-light ">
    <ul>
      {todoList.map((item,index)=>{
        return (
          <div  className=' pp m-1 '>
            <li className='row '>
            <Badge variant='info mb-3  badge-pill 'className='Badge'><p  className='pt-3 pl-2'>{index+1} :</p></Badge>

            <Badge variant='danger mb-3 ' className='Badge'>
              <p className='pt-3'><button className='bt' onClick={todoRemoveHandler(index+1)} type="submit">حذف</button></p></Badge>

            <p  className='bg-dark pp pt-3 pr-2 pl-2' >   {item.title}</p>
            
            </li>
      
          </div>
        )
      })}
    </ul>
    </div>

        </div>
     );
}
 
export default Input;