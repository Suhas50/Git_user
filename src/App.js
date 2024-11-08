import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const fetchData = async () => {
    if (name.trim()) {
      try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          setData(null);
          console.error("User not found or API error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchTrigger]);

  return (
    <>
      <div className='bg-[#050745]'>
      <h1 className='text-white text-center pt-10 text-[48px] font-mona font-bold'>Git-Hub user  info</h1> 
 
      </div>
      <div className='pb-[200px] h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#050745] to-[#1d2044]'>
      <input

        className='w-64 border-3 border-solid border-black p-2 rounded-xl  '
        type="text"
        placeholder="Enter github username"
        onChange={(e) => setName(e.target.value)}
        />
      <button className=' p-1 rounded-lg  border-2 border-solid  m-3 mt-5 bg-white hover:border-black border-3'  onClick={() => setFetchTrigger(!fetchTrigger)}>Get User Data</button>
      { <User user={data} /> } 
    </div>
      
    </>
  );
}

export default App;
