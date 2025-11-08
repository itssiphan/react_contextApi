import { useState } from 'react'
import "./app.css"
import { AppProvider } from '@/contexts/AppContext'
import Bird from "@/components/Bird"

export default function App() {
  return (
    <AppProvider>
      <div className="bg-red-300 text-2xl">Hello world</div>
      <Bird />
    </AppProvider>
  );
}