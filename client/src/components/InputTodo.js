import React,{ Fragment, useState } from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState('')
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>
                INPUT TODO
            </h1>
            <form 
            onSubmit={onSubmitForm}
            className='d-flex mt-5' >
                <input 
                className='form-control' 
                type='text'
                onChange={e => setDescription(e.target.value)} 
                value={description}/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo