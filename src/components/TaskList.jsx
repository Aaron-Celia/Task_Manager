'use client';
import { useEffect } from "react";
import Task from "./Task"


export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        (function getTasks(){
            let start = 0
            let item = localStorage.getItem(`task${start}`);

            while(!item) {
                start++;
                if(start === 100) {
                    break;
                }
            }

            const num = start - 100;

            while (num >= 0) {
                let item = localStorage.getItem(`task${num}`);
                if(!tasks.length) {
                    setTasks([item])
                } else {
                    setTasks([...tasks, item]);
                }
            }
        })()
    }, [])
  return (
    <>
    {
        tasks.length ? tasks.map(task => {
            <Task
            name={task.name}
            priority={task.priority}
            flagColor={task.flagColor ? task.flagColor : null}
            />
        }) : null
    }
    </>
  )
}
