import { useState } from 'react';
import Image from 'next/image';
import AboutTitle from '../components/AboutTitle';
import AboutMenu from '../components/AboutMenu';

export default function About() {
  return (
    <>
      <main>
        <div className='container mx-auto py-4'>
          <AboutTitle />
          <ul className='flex justify-center gap-2 text-base'>
            <AboutMenu slug={'grid'} menutext={'grid構造'} />
            <AboutMenu slug={'xy_center'} menutext={'上下中央寄せ'} />
            <AboutMenu slug={'flex'} menutext={'flex構造'} />
            <AboutMenu slug={'member'} menutext={'リスト一覧'} />
          </ul>
        </div>aa
        {/* ----------------------------- */}
        <div className='container mx-auto'>
          <h2
            id='grid'
            className='text-center text-2xl mb-3'
            style={{ scrollMarginTop: '20px' }}
          >
            【grid構造】
          </h2>
          <div className='container mx-auto'>
            <div
              className='grid gap-4 sm:grid-cols-3 mx-2 sm:mx-2'
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
              }}
            >
              <div className=' bg-yellow-300'>
                <p className='text-sm'>text-smのサイズ</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='text-2xl'>text-2xlのサイズ</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='text-[14px]'>text-[14px]のサイズ</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='text-[1.5rem]'>16の何倍になります</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='text-[1.5rem]'>text-[1.5rem]のサイズ</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='font-bold'>font-boldで太く</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='text-center'>text-centerで真ん中に</p>
              </div>
              <div className=' bg-yellow-300'>
                <p className='underline'>underlineで下線を引く</p>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className='container mx-auto py-4'>
          <h2
            id='xy_center'
            className='text-center text-2xl mb-3'
            style={{ scrollMarginTop: '20px' }}
          >
            【上下中央寄せ】
          </h2>
          <div className='relative grid place-items-center h-60 bg-green-600 mb-[40px]'>
            <i className='relative w-[180px] h-[120px]'>
              <Image
                className='object-contain'
                src='https://placehold.jp/3d4070/ffffff/150x90.png'
                alt='プレイス画像'
                fill
              />
            </i>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className='container mx-auto py-4'>
          <h2
            id='flex'
            className='text-center text-2xl mb-3'
            style={{ scrollMarginTop: '20px' }}
          >
            【flex構造】
          </h2>
          <div className='container mx-auto sm:flex sm:justify-between pb-2'>
            <div className='bg-red-600 sm:w-[calc(50%_-_10px)] px-4'>
              bg-red-600
            </div>
            <div className='bg-lime-500 sm:w-[calc(50%_-_10px)] px-4'>
              bg-lime-500
              <br />
              bbb
              <br />
              bbb
            </div>
          </div>
          <div className='flex flex-wrap sm:ml-[1.3%] ml-[1.5%]'>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-orange-400 text-3xl'>text-orange-400</p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-green-500 text-3xl'>text-green-500</p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-purple-700 text-3xl'>text-purple-700</p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-cyan-600 text-3xl'>text-cyan-600 text-3xl</p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-teal-400 text-base'>
                text-teal-400 text-base'
              </p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-violet-600 text-center'>
                text-violet-600 text-center
              </p>
            </div>
            <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
              <p className='text-rose-700 text-end'>text-rose-700 text-end</p>
            </div>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className='container mx-auto'>
          <h2
            id='member'
            className='text-center text-2xl mb-3'
            style={{ scrollMarginTop: '20px' }}
          >
            【リスト一覧】
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
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
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
      </main>
    </>
  );
}
