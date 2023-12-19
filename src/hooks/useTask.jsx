'use client';
import { useEffect, useState } from "react";
import { createClass } from "@/classes/Task";

export default function useTask({ taskName, taskPriority, taskFlagColor }) {
    return createClass(taskName, taskPriority, taskFlagColor ? taskFlagColor : null);
}
