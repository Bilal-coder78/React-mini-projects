import React, { useState } from 'react'

function Mytodo() {
    const [todolist, setTodolist] = useState([])
    let Savetodo = (e) => {
        e.preventDefault();

        let name = e.target.name.value;
        if(name.trim()==="")
            return(
        alert("Write something..."))
            let finaltodo = [...todolist, name]
            setTodolist(finaltodo)
            e.target.reset();
    }
    let todo = todolist.map((value,index)=>{
        return(
            <Todo value={value} key={index} indexNo={index} todolists = {todolist} setTodolist={setTodolist}/>
        )
    })
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Todo list</h1>
            <form className='w-100 d-flex gap-3' onSubmit={Savetodo}>
                <input style={{ width: "80%" }} type="text" name="name" id="" /><button style={{ width: "20%" }}>Save</button>
            </form>

            <ul className='w-100 my-3' style={{ listStyle: "none" }}>
            {todo}
            </ul>
        </div>
    )
}

export default Mytodo

function Todo({value,indexNo,todolists,setTodolist}) {
    const [status,setStatus] = useState(false)
    let deleteRow=()=>{
        let finaldata = todolists.filter((v,i)=>i!=indexNo)
        setTodolist(finaldata)
    }
    let checkStatus=()=>{
        setStatus(!status)
    }
    return (
        <li onClick={checkStatus} className={`text-white bg-dark mb-2 p-2 fs-4 position-relative ${(status)? "complete-todo" : ""}`}>{value} <span onClick={deleteRow} className='position-absolute' style={{ right: 8, cursor: "pointer" }}>&times;</span></li>
    )
}