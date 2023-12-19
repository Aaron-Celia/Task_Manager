'use client';
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { createClass } from "@/classes/Task";

const priorities = [
    {
        key: 0,
        level: 'Low',
        textColor: 'green-500'
    },
    {
        key: 1,
        level: 'Moderate',
        textColor: 'yellow-500'
    },
    {
        key: 2,
        level: 'High',
        textColor: 'red-500'
    }
]
const flagColors = ['Red', 'Green', 'Yellow', 'Blue'];

export default function CreateTask() {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('');
    const [flagColor, setFlagColor] = useState('');
    const [counter, setCounter] = useState(100);
    const [disabled, setDisabled] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleSubmit = () => {
        const task = createClass(name, priority, flagColor.length ? flagColor : null);
        localStorage.setItem(`task${counter}`, task);
        setCounter(100 - tasks.length);
        if(counter === -1) {
            setDisabled(true)
        }
    };

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
    <div className="flex justify-around items-center">
        <Input onChange={(e) => setName(e.target.value)} type="text" label="Task name" />
        <AutocompleteSection>
            <Autocomplete onChange={(e) => setPriority(e.target.value)} label="Select priority level">
                {priorities.map(p => {
                    <AutocompleteItem className={`text-${p.textColor}`} key={p.key} value={p.level}>{p.level}</AutocompleteItem>
                })}
            </Autocomplete>
            <Autocomplete onChange={(e) => setFlagColor(e.target.value)} label="Select flag color (optional)">
                {flagColors.map(c => {
                    <AutocompleteItem className={`text-${c.toLowerCase()}-500`} key={c} value={c}>{c}</AutocompleteItem>
                })}
            </Autocomplete>
        </AutocompleteSection>
        <Button disabled={disabled} onClick={() => handleSubmit()}>Create</Button>
    </div>
  )
}