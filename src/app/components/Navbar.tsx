import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image
 from 'next/image';
 
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className='sticky z-[100] inset-x-0 top-0 transition-all flex items-center grainy-light justify-center '>
      <div className='w-full max-w-[1792px] px-8 flex items-center justify-between'>
        <div className='flex items-center space-x-16'>
          <Link href='/' className='mt-4'>
            <Image src='/logo.png' alt='Logo' width={100} height={64} className="h-16 w-auto" />
           {/* <span className='font-bold'>UNICUS</span><br/>
           <span className='font-bold'>olympiads</span> */}
           
          </Link>
          <div className='flex space-x-16 mt-4 '>
            <Link href='http://localhost:3001/' className='text-[#6D736F] h-[24px] flex items-center font-bold leading-none'>
              Subjects
            </Link>
            <Link href='/api/company' className='text-[#6D736F] h-[24px] flex items-center font-bold leading-none'>
              Exam Dates
            </Link>
            <Link href='/pages/catalogue' className='text-[#6D736F] h-[24px] flex items-center font-bold leading-none'>
                Quick Links
            </Link>
            <Link href='/about' className='text-[#6D736F] h-[24px] flex items-center font-bold leading-none'>
              Results
            </Link>
          </div>
        </div>

        <div className='flex items-center space-x-4 mt-4'>
          {user ? (
            <>
              <Link href='/api/auth/logout'
                className='px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-600 hover:bg-[#2596be]'>
                Sign out
              </Link>
              <Link href='/configure/dash'
                className='px-4 py-2 bg-[#2596be] text-white rounded-md text-sm font-semibold hover:bg-[#2596be]'>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link href='/api/auth/login'
                className='px-4 py-2 border border-gray-300 rounded-md body-2 text-[#707070] hover:bg-gray-100'>
                Log in
              </Link>
              <Link href='/api/auth/register' className="px-4 py-2 text-white rounded-md body-2 p-[10px_24px] gap-10 bg-[#2596be]">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
