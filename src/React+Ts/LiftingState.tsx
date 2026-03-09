import { Children, useState } from "react";


interface Todo {
    id? : number,
    text : string,  
    isDone : boolean
}


interface ShowTodo {
    todoAllList : Todo[] | null,
    onDelete: (id: number) => void;   // Function that takes an ID and returns nothing
    onToggle: (id: number) => void;   // Function to flip the isDone status
}

function DisplayTodoList( {todoAllList} : ShowTodo) {
    return (<>
    {todoAllList && todoAllList?.length < 0 && <p>Loading...</p> }
    {todoAllList?.map((item, key) => (
       <ul key={key}>
        <li>Task name :: {item.text}</li>
        <li>Is Done :: {item.isDone ? "Done" : "Not done yet" }</li>
       </ul>
    )) }
    </>)
}

export function ShowTodoList() {
    const [todo, setTodoList] = useState<Todo[] | null>(null) // list
    
    const [isDone, setIsDone] = useState(false); // check box
    const [text, setText] = useState("")

    const handleAddTodoItem = ({isDone, text} : Todo) => {
    const random = Math.round((Math.random() * 10000))

        if((isDone !== null) && text !== null ) {
            const todoPayload : Todo = {
                id : random,
                text : text,
                isDone : isDone
            }

            setTodoList((current) => !current ? [todoPayload] : [...current, todoPayload])
        }
    }       

    const deleteTodo = (id : number) => {
        setTodoList(prev => prev ? prev.filter(val => val.id !== id) : null) 
    }

    const toggleTodo = (id : number) => {
        setTodoList(prev => prev ? prev.map((item) => item.id === id ? {...item, isDone :   !item.isDone} : item) : null)
    }
    return (<> 

    <DisplayTodoList todoAllList={todo} onDelete={deleteTodo} onToggle={toggleTodo}/>
    <input type="text" placeholder="Input your task name" value={text} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
    <input type="checkbox" onChange={(e : React.ChangeEvent<HTMLInputElement>) => setIsDone( e.target.checked)}/>

    <button onClick={() => handleAddTodoItem({isDone, text})}>Add todo task</button>
    </>)
}




interface LayoutProps {
    input : string,
    children : React.ReactNode 
}

function General({input, children} : LayoutProps) {
    return (<>
    <p>Input : {input}</p>
    {children}
    </>)
}
function Render() {
    return (<>
    <General input={'test'}>
        <h1>Hello world</h1>
    </General>

    </>)
}
