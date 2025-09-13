import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TailwindDemo1 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: ''
    });

    const [error, setErrors] = useState({
        currentPassword: '',
        newPassword: ''
    });
    const [showPassword,setShowPassword]=useState(false)
    const [currentShowPassword,setCurrentShowPassword]=useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...error,
            [name]: ''
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const { currentPassword, newPassword } = formData;

        if (!currentPassword) {
            newErrors.currentPassword = 'Current password is required.';
        }

        if (!newPassword) {
            newErrors.newPassword = 'New password is required.';
        }

        if (currentPassword === newPassword) {
            newErrors.newPassword = (newErrors.newPassword || '') + ' New password must be different from the current password.';
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>/?]).{8,}$/;
        if (newPassword && !passwordRegex.test(newPassword)) {
            newErrors.newPassword = (newErrors.newPassword || '') +
                ' New password must be at least 8 characters, contain one uppercase letter, and one special character.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Valid Password');
            // Proceed with form submission logic
        } else {
            console.log('Invalid password');
        }
    };

    const handlePasswordShowPassword = () => {
    setShowPassword((prev)=>!prev)
  }
  const handlePasswordCurrentShowPassword=()=>{
    setCurrentShowPassword((prev)=>!prev)
  }

    return (
        <div className='min-h-screen bg-white'>
            {/* Header */}
            <header className='flex items-center justify-between px-8 py-6 border-b'>
                <div className='flex items-center space-x-2'>
                    <div className='bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold'>UI</div>
                    <span className='text-lg font-semibold'>Design Daily</span>
                </div>
                <nav className='flex space-x-10 text-gray-600 gap-4'>
                    <button onClick={() => navigate('/')} className='hover:text-black'>Free designs</button>
                    <button onClick={() => navigate('/')} className='hover:text-black'>License</button>
                    <button onClick={() => navigate('/tailwinddemo')} className='hover:text-black'>Articles</button>
                    <button onClick={() => navigate('/demo1')} className='hover:text-black'>Contributors</button>
                    <button onClick={() => navigate('/demo2')} className='hover:text-black'>About</button>
                </nav>
                <div className='flex items-center space-x-4'>
                    <button className='bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold'>Upload</button>
                </div>
            </header>

            {/* Main */}
            <div className='flex max-w-5xl mx-auto mt-12'>
                {/* Sidebar */}
                <aside className='w-1/4 pr-12'>
                    <h2 className='text-3xl font-bold mb-8'>Settings</h2>
                    <ul className='space-y-4 text-lg'>
                        <li><button onClick={() => navigate('/demo5')} className='text-gray-800 hover:text-black'>Public profile</button></li>
                        <li><button onClick={() => navigate('/')} className='text-gray-600 hover:text-black'>Account settings</button></li>
                        <li><button onClick={() => navigate('/')} className='text-gray-600 hover:text-black'>Notifications</button></li>
                        <li><button onClick={() => navigate('/')} className='text-gray-600 hover:text-black'>PRO Account</button></li>
                    </ul>
                </aside>

                {/* Form */}
                <section className='w-3/4'>
                    <form onSubmit={handleSubmit} className='mb-10'>
                        <h3 className='text-2xl font-bold mb-4'>Account settings</h3>
                        <div className='mb-8'>
                            <label className='block font-semibold mb-1'>Email address</label>
                            <div className='flex items-center space-x-2'>
                                <span>Your email address is <b>emailis@private.com</b></span>
                                <button onClick={() => navigate('/')} className='text-indigo-600 hover:underline text-sm font-medium'>Change</button>
                            </div>

                            <div className='flex space-x-4 mb-2 mt-4'>
                                <div className='flex-1 '>
                                    <label htmlFor='currentPassword' className='block text-sm mb-1'>Current Password</label>
                                    <div className='mb-4 flex justify-between border px-1 rounded focus-within:ring-2 focus-within:ring-blue-500 '>
                                    <input
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        name='currentPassword'
                                        id='currentPassword'
                                       type={`${currentShowPassword? 'text' : 'password'}`}
                                        placeholder='**********'
                                        className='w-full px-4 py-2 rounded-md focus:outline-none'
                                    />
                                    <button type='button' onClick={(e)=>{
                                        e.preventDefault();                                                                                                                                                                         
                                        handlePasswordCurrentShowPassword()
                                     }}>
                                         {currentShowPassword ?
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
                                       :
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
        
      
                                     }
                                     </button>
                                    {error.currentPassword && <p className='text-red-500'>{error.currentPassword}</p>}
                                    </div>
                                </div>



                                <div className='flex-1'>
                                    
                                    <label htmlFor='newPassword' className='block text-sm mb-1'>New Password</label>
                                    <div className='mb-4 flex justify-between border px-1 rounded focus-within:ring-2 focus-within:ring-blue-500 ' >
                                    <input
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        name='newPassword'
                                        id='newPassword'
                                        type={`${showPassword ? 'text' : 'password'}`}
                                        placeholder='*********'
                                        className='w-full px-3 py-2 rounded-md focus:outline-none'
                                    />
                                    <button type='button' onClick={(e)=>{
    e.preventDefault(); 
    handlePasswordShowPassword()
}}>
    {showPassword ?
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
      :
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
        
      
}
</button>
                                    {error.newPassword && <p className='text-red-500'>{error.newPassword}</p>}
                                    </div>
                                </div>
                                
                            </div>

                            <span>Can't remember your current password? </span>
                            <button
                                type='button'
                                onClick={() => navigate('/')}
                                className='text-indigo-700 hover:underline font-medium'
                            >
                                Reset your password
                            </button>
                        </div>

                        <button
                            type='submit'
                            className='bg-indigo-900 text-white px-6 py-2 rounded-lg font-semibold mt-2'
                        >
                            Save Password
                        </button>
                    </form>

                    <div className='mt-10'>
                        <h4 className='font-bold mb-2 text-lg'>Delete account</h4>
                        <p className='mb-2 text-gray-700'>
                            Would you like to delete your account?<br />
                            This account contains <span className='font-bold'>1388 posts</span>. Deleting your account will remove all the content associated with it.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className='text-red-600 hover:underline font-medium text-base'
                        >
                            I want to delete my account
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TailwindDemo1;
