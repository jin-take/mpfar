import React from "react"


const Login: React.FC = (profile) => {

  return (
    <div>
      <form action='' className='flex justify-center'>
        <input
          type='text'
          className='my-8  rounded border border-black'
          placeholder='loginname'
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Login