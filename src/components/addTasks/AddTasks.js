import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap";

import { ReactComponent as Send } from "../../assets/send.svg";
import './AddTasks.scss';

const AddTasks = () => {

const [task, settask] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    console.log('soy el submit', task)
    
    
    


    settask('')
}


    return (
        <Form onSubmit={onSubmit} className='add-task'>
           <input type="text" placeholder='Nueva Tarea...' value={task} onChange={(e) => settask(e.target.value)}  />
           <Button type="submit">
              <Send />
           </Button>
        </Form>
    )
}

export default AddTasks
