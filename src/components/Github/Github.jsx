import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

export default function Github() {
  const { userid } = useParams();
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');

  async function getUser() {
    try {
      const api = await fetch(`https://api.github.com/users/${userid}`);
      const response = await api.json();
      if(response?.status) {
        setUserData(null);
      } else {
        setUserData(response);
      }
    } catch(errror) {
      setUserData(null);
      console.error('Error Fetching User Details: ', errror);
    }
  }

  useEffect(() => {
    if(userid) getUser();
  }, [userid])

  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      {
        userData ?
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12">
          <div className="md:5/12 lg:w-4/12">
            <div className='flex flex-col items-center'>
              <img
                className='inline-block w-80 overflow-hidden border-10 border-amber-200 rounded-full mb-6'
                src={userData?.avatar_url}
                alt="image"
              />

            </div>
          </div>
          <div className="md:7/12 lg:w-8/12 pt-6">
            <h3 className='text-4xl text-red-700 font-bold'>{userData?.name}</h3>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, asperiores ad ut repudiandae eligendi aspernatur similique sint laboriosam minus illum sunt fuga voluptatibus aperiam recusandae assumenda fugit, eaque cumque architecto?</p>
          </div>
        </div>
         :
          <h3 className='text-4xl text-center font-bold'>No User Data found!</h3>
      }
      <div className='mt-4'>
        <h3>Search Someone on Github</h3>
        <div className='flex flex-col'>
          <input type="text" name="username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
          <Link to={`/github/${userName}`} className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white text-center font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">Search</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
