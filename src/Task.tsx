import React, { useState } from "react";

// Quick Props


// interface TagsProps {
//     tags : ["new", "sale"]
// }
// interface ProductProps extends TagsProps {
//     title? : string,
//     price?: number,
//     isAvailable? : boolean,
// }
// function ShowTags({tags} : TagsProps) {
//     return (<>
//     <p> Tags: 
//           {(typeof tags === "object" && tags.length > 0) && tags.map((item, key) => (
//             <span key={key} style={{ marginRight: '5px' }}>
//             {item}
//           </span>
//           ) )}

//     </p>
//     </>)
// }
// function ShowProducts({title, price, isAvailable, tags} : ProductProps) {
//     return (
//         <>
//         <h1>Title : {title}</h1>
//         <h1>Price : {price}</h1>

//         {isAvailable && <button>Buy Now</button>}
//         <ShowTags tags={tags}/>
//         </>
//     )
// }




// State and events  ex.
interface UserContents {
    name : string,
    age : number,
    address : string,
    contact : number
}
function InteractiveState() {
    const [count, setCount] = useState(0); // count infer as number

    const [user, setUser] = useState<UserContents | null>(null)

    return (<>
    </>) 
}



// "Interactive Counter & Input"

export function InteractiveInputCounter() {
    const [count, setCount] = useState(0);
    const [taskName, setTaskName] = useState("");

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
        setCount((c) => c + 1) // 
        // setCount(c => c + taskName.length)  // we can also do this 
    }   

    return (<>
    <h1>Task Name :: {taskName} </h1>
    <h1>Input Count :: {count}</h1>
    <input onChange={handleInputChange} value={taskName}></input> 
    </>) 
}



// Lists, Keys, and Complex State


interface Todo {
    id? : number,
    text : string,  
    isDone : boolean
}


interface ShowTodo {
    todoAllList : Todo[] | null
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

    return (<> 

    <DisplayTodoList todoAllList={todo}/>
    <input type="text" placeholder="Input your task name" value={text} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
    <input type="checkbox" onChange={(e : React.ChangeEvent<HTMLInputElement>) => setIsDone( e.target.checked)}/>

    <button onClick={() => handleAddTodoItem({isDone, text})}>Add todo task</button>
    </>)
}