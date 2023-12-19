'use client';
import { useState } from "react";
import useTask from "@/hooks/useTask";

const priorities = ['Low', 'Moderate', 'High'];
const flagColors = ['Red', 'Green', 'Yellow', 'Blue'];

export default function Task({ name, priority, flagColor }) {
    const [primaryColor, setPrimaryColor] = useState('');
    
  return (
    <div>
        <h3>{name}</h3>
        <code>{priority}</code>
    </div>
  )
}
