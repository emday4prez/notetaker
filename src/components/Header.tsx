import { signIn, signOut, useSession } from 'next-auth/react';

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className='navbar bg-primary text-primary-content'>
      <div className='flex-1 px-2 mx-2 font-bold text-3xl'>
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ''}
      </div>
      <div className='flex-none gap-2'>
        {sessionData?.user ? (
          <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
            <img src={sessionData?.user?.image ?? ''} alt={sessionData?.user?.name ?? ''} />
          </label>
        ) : (
          <button className=' btn-ghost rounded-btn btn' onClick={() => void signIn()}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};
