'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import {Button} from "@nextui-org/react";
import GoogleIcon from '@mui/icons-material/Google';
import CreateTask from "@/components/CreateTask";
import TaskList from "@/components/TaskList";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <main className="h-screen w-screen">
          <div className="h-[10rem] w-[100vw] bg-slate-500">
            <p className="text-large">Hello, {session.user.name}</p>
          </div>
          <section>
            <CreateTask />
            <TaskList />
          </section>
        </main>
      </>
    )
  }
  return (
    <>
      <div className="flex bg-slate-400 h-screen w-screen justify-center items-center">
        <Button className="h-10 w-[10rem] bg-black text-white rounded-xl" color="primary" onClick={() => signIn()}>Sign in with <GoogleIcon /></Button>
      </div>
    </>
  )
}
