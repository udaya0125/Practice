import React, { useState } from 'react';

const TailwindDemo7 = () => {
    const[searchTerm, setSearchTerm]=useState('')
    

    const Users = [
        {
            name: 'Lelah Nichols',
            location: 'Troy,MI',
            avatar: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww',
            tags: ['Clothes','stem']
        },
          {
            name: 'Jesus wiess',
            location: 'Fort Worth,TX',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww',
            tags: ['headset','gadget','speed','winter'] 
        },
          {
            name: 'Annie Rice',
            location: 'Austin,TX',
            avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D',
            tags: ['road','mountain', 'trip', 'earth','nature'] 
        },
          {
            name: 'Robert Browser',
            location: 'Cincinnati,OH',
            avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww',
            tags: ['Maintenance', 'gears','frame','repair',] 
        },
          {
            name: 'Amy Campbell',
            location: 'Warrior,Al',
            avatar: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D',
            tags: ['music','disks', ]
        },
          {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
        {
            name: 'Anthony S.Morin',
            location: 'Lyndhurst ,NJ',
            avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
            tags: ['vintage', 'electric']
        },
    ];

    return (
        <div className=' min-h-screen bg-gray-50 p-8 overflow-auto'>
            <div>
                <h2 className='text-2xl font-bold'>
                    User
                </h2>
            </div>
            <header className='flex flex-col sm:flex-row justify-between items-center  md:px-8 px-2 py-6 '>
                <div className=''>
                    <div className='relative'>
                        <input
                        type='text'
                        placeholder='search users'
                        value={searchTerm}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        className='pl-12 py-2 border border-black  focus:outline-none focus:ring-3 w-full'
                    />            
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        </div>
                    </div>
                </div>
                <nav className=' flex md:gap-3 gap-1  flex-wrap'>
                    <button className='md:px-5 px-1.5 py-1 rounded-md text-sm font-semibold transition'>Reputation</button>
                    <button className='md:px-5 px-1.5 py-1 rounded-md text-sm font-semibold transition'>New Users</button>
                    <button className='md:px-5 px-1.5 py-1 rounded-md text-sm font-semibold transition'>Voters</button>
                    <button className='md:px-5 px-1.5 py-1 rounded-md text-sm font-semibold transition'>Editors</button>
                    <button className='md:px-5 px-1.5 py-1 rounded-md text-sm font-semibold transition'>Moderators</button>
                </nav>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3  md:gap-8 gap-2 h-[600px] overflow-y-scroll">
                {Users.filter(user=>user.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                    <div
                        key={user.name}
                        className={`bg-white rounded-xl border ${
                            user.featured
                                ? "border-blue-400 shadow-lg scale-105"
                                : "border-gray-200"
                            } p-6 flex flex-col items-center transition-transform`}
                    >
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                        />
                        <h2 className="font-semibold text-lg">{user.name}</h2>
                        <div className="text-gray-500 text-sm mb-3">{user.location}</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {user.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs"
                                >
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TailwindDemo7;

