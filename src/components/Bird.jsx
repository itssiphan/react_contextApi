import React, { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';

export default function Bird() {
  const { bird, setBird } = useContext(AppContext);

  return (
    <>
      <h2>Fav Bird: <strong>{bird}</strong></h2>
      <button 
        onClick={() => setBird("Eagle 🦅")} 
        className="p-2 bg-blue-500 text-white rounded-md mt-2">Change Bird
      </button>
    </>
  );
}