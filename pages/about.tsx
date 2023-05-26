import { useState } from 'react';
import Image from 'next/image';
import AboutTitle from '../components/AboutTitle';

export default function About() {
  type User = {
    name: string;
    age: number;
  };
  const [users, setUsers] = useState<User[]>([
    { name: 'yamashi', age: 34 },
    { name: 'adachi', age: 46 },
  ]);

  return (
    <>
      <main>
        <div className='container mx-auto py-4'>
          <ul className='flex justify-center gap-6 text-3xl text-cyan-700'>
            <li>
              <a href='#flex'>flex</a>
            </li>
            <li>
              <a href='#grid'>grid</a>
            </li>
            <li>
              <a href='#member'>リスト一覧</a>
            </li>
          </ul>
        </div>
        <div className='container mx-auto py-4'>
          <AboutTitle />
          <h2
            id='flex'
            className='text-center text-2xl mb-3'
            style={{ scrollMarginTop: '20px' }}
          >
            flex構造
          </h2>
          <div className='container mx-auto sm:flex sm:justify-between'>
            <div className='bg-red-800 sm:w-[calc(50%_-_10px)] px-4'>aaaaa</div>
            <div className='bg-orange-500 sm:w-[calc(50%_-_10px)] px-4'>
              bbb
              <br />
              bbb
              <br />
              bbb
            </div>
          </div>

          <div className='relative grid place-items-center h-60 bg-blue-200 mb-[40px]'>
            <i className='relative w-[180px] h-[120px]'>
              <Image
                className='object-contain'
                src='https://placehold.jp/3d4070/ffffff/150x90.png'
                alt='プレイス画像'
                fill
              />
            </i>
          </div>

          <div className='container mx-auto'>
            <div className='flex flex-wrap sm:ml-[1.3%] ml-[1.5%]'>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-4xl'>ユーティリティとしてのサイズ</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-2xl'>ユーティリティとしてのサイズ</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-[14px]'>フォントサイズをそのまま指定</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-[1.5rem]'>16の何倍になります</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='font-bold'>太くなります</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-center'>真ん中に</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='underline'>下線を引く</p>
              </div>
            </div>
          </div>
          {users.map((user: User, index: number) => (
            <div key={index}>
              {`名前は、${user.name}と申し、${user.age}歳でございます。`}
            </div>
          ))}
        </div>
        <h2
          id='grid'
          className='text-center text-2xl mb-3'
          style={{ scrollMarginTop: '20px' }}
        >
          grid構造
        </h2>
        <div className='container mx-auto'>
          <div
            className='grid gap-4 sm:grid-cols-3 mx-2 sm:mx-2'
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
            }}
          >
            <div className=' bg-yellow-800'>
              <p className='text-4xl'>ユーティリティとしてのサイズ</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='text-2xl'>ユーティリティとしてのサイズ</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='text-[14px]'>フォントサイズをそのまま指定</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='text-[1.5rem]'>16の何倍になります</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='font-bold'>太くなります</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='text-center'>真ん中に</p>
            </div>
            <div className=' bg-yellow-800'>
              <p className='underline'>下線を引く</p>
            </div>
          </div>
        </div>
        <h2
          id='member'
          className='text-center text-2xl mb-3'
          style={{ scrollMarginTop: '20px' }}
        >
          リスト一覧
        </h2>
        <div className='flex items-center justify-center -space-x-2 mt-6'>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
          </div>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
          </div>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
          </div>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
          </div>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://launchcart.jp/admin/wp-content/uploads/2020/01/js.png'
            />
          </div>
          <div className='h-10 w-10'>
            <img
              className='h-full w-full rounded-full object-cover object-center ring ring-white'
              src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
            />
          </div>
        </div>
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
        <br />
        aaa
      </main>
    </>
  );
}
