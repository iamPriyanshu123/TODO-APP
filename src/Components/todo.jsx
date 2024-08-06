// import '../App.css'
// import React, { useState } from 'react'
// import { Table, Button } from 'react-bootstrap'
// import { MdDeleteForever } from "react-icons/md";
// import { IoIosCloudDone } from "react-icons/io";

// const Todo = () => {

//   const [data, setData] = useState([]);
//   const [todo, setTodo] = useState('');
//   const [message, setMessage] = useState('')
//   const [completed, setCompleted] = useState([]);



//   const addTodo = (todos) => {
//     if (todos == '') {
//       console.log('blank')
//       setMessage('plz fill out this field')
//     } else {
//       setData([...data, todos])
//       setMessage('')
//       setTodo('')
//     }
//   }
//   //console.log(addTodo)
//   const removeTodo = (item) => {
//     console.log(item);
//     setData(data.filter((datas, index) => index !== item  ))
//   }
//   const handleChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= 30) {
//       setTodo(value);
//     }
//     else {
//       alert('you are enter out of limit characters')
//     }
//   }

//   /*    const handlerCompleted=(datas,index)=>{
//       setCompleted(datas);
//       setData(data)
//       console.log(completed)
//      }   */

//   const handlerCompleted = (index) => {
//     setCompleted((prevCompleted) => {
//       console.log(prevCompleted);
//       const newCompleted = [...prevCompleted];
//       newCompleted[index] = true;
//       return newCompleted;
//     });
//   };
//   return (
//     <>
//       <div className='heading-container'>
//         <h1>TODO-APP</h1>
//       </div>
//       <div className="todo-container" style={{ display: 'flex', justifyContent: 'center' }}>
//         <div className="todo-input">
//           <input className='input-field' placeholder='Enter Something' value={todo} style={{ fontSize: '25px', textAlign: 'center' }} onChange={handleChange}></input>
//           <div className='limit-container'>
//             <p className='limit' style={{ color: 'white', float: 'right', position: 'relative', right: '20px' }}><span>{todo.length}</span>/30</p>
//             <p className='error-msg' style={{ color: "red", position: 'relative', right: '200px' }}>{message}</p>
//           </div>
//         </div>




//         <div className="todo-btn">
//           <button className="bttn" style={{ marginLeft: '10px', marginTop: '12px' }} onClick={() => { addTodo(todo) }}>ADD TODO</button>
//         </div>


//       </div>
//       <div className=' mt-5'>
//         <Table striped bordered hover >
//           <thead >
//             <tr>
//               <th>Todos</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           {
//             data.map((datas, index) => {
//               return (

//                 <tbody key={index}>
//                   <tr>
//                     {/* <td className='table-data'>{datas}</td> */}
//                     {/*  {(!completed)?<td className='table-data'>{datas}</td>: <td className='task-complete'>{completed}</td>} */}
//                     <td
//                       className='table-data'
//                       style={{
//                         textDecoration: completed[index] ? 'line-through' : 'none',
//                       }}
//                     >
//                       {datas}
//                     </td>
//                     <td>
//                       <button className=' remove ' style={{ border: "none", color: 'red', fontSize: '25px' }} onClick={() => { removeTodo(index) }}><MdDeleteForever /></button>
//                       <button style={{ border: "none", color: 'green', fontSize: '25px' }} onClick={() => handlerCompleted(index)}><IoIosCloudDone /></button>
//                     </td>

//                   </tr>
//                 </tbody>

//               )
//             })
//           }
//         </Table>
//       </div>
//     </>
//   )
// }

// export default Todo;



import '../App.css'
import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";

const Todo = () => {

  const [data, setData] = useState([]);
  const [todo, setTodo] = useState('');
  const [message, setMessage] = useState('')
  const [completed, setCompleted] = useState([]);



  const addTodo = (todos) => {
    if (todos == '') {
      console.log('blank')
      setMessage('plz fill out this field')
    } else {
      setData([...data, todos])
      setMessage('')
      setTodo('')
    }
  }
  //console.log(addTodo)
  const removeTodo = (item) => {
    console.log(item);
    setCompleted( completed.filter((value,index)=>
       index !==item
    )
     
  );
    setData(data.filter((datas, index) => index !== item  ))
    
  }
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 30) {
      setTodo(value);
    }
    else {
      alert('you are enter out of limit characters')
    }
  }

  /*    const handlerCompleted=(datas,index)=>{
      setCompleted(datas);
      setData(data)
      console.log(completed)
     }   */

  const handlerCompleted = (index) => {
    setCompleted((prevCompleted) => {
      console.log(prevCompleted);
      const newCompleted = [...prevCompleted];
      newCompleted[index] = true;
      return newCompleted;
    });
    console.log(completed)
  };
  return (
    <>
      <div className='heading-container'>
        <h1>TODO-APP</h1>
      </div>
      <div className="todo-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="todo-input">
          <input className='input-field' placeholder='Enter Something' value={todo} style={{ fontSize: '25px', textAlign: 'center' }} onChange={handleChange}></input>
          <div className='limit-container'>
            <p className='limit' style={{ color: 'white', float: 'right', position: 'relative', right: '20px' }}><span>{todo.length}</span>/30</p>
            <p className='error-msg' style={{ color: "red", position: 'relative', right: '200px' }}>{message}</p>
          </div>
        </div>




        <div className="todo-btn">
          <button className="bttn" style={{ marginLeft: '10px', marginTop: '12px' }} onClick={() => { addTodo(todo) }}>ADD TODO</button>
        </div>


      </div>
      <div className=' mt-5'>
        <Table striped bordered hover >
          <thead >
             <tr>
              <th>Todos</th>
              <th>Actions</th>
            </tr>
          </thead>

          {
            data.map((datas, index) => {
              return (

                <tbody key={index}>
                  <tr>
                    {/* <td className='table-data'>{datas}</td> */}
                    {/*  {(!completed)?<td className='table-data'>{datas}</td>: <td className='task-complete'>{completed}</td>} */}
                    <td
                      className='table-data'
                      style={{
                        textDecoration: completed[index] ? 'line-through' : 'none',
                      }}
                    >
                      {datas}
                    </td>
                    <td>
                      <button className=' remove ' style={{ border: "none", color: 'red', fontSize: '25px' }} onClick={() => { removeTodo(index) }}><MdDeleteForever /></button>
                      <button style={{ border: "none", color: 'green', fontSize: '25px' }} onClick={() => handlerCompleted(index)}><IoIosCloudDone /></button>
                    </td>

                  </tr>
                </tbody>

              )
            })
          }
        </Table>
      </div>
    </>
  )
}

export default Todo;