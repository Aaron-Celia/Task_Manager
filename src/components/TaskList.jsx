import Task from "./Task"


export default function TaskList({ tasks }) {
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
