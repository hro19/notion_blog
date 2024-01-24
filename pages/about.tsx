import Image from 'next/image';
import SeoHead from '../components/SeoHead';
import AboutTitle from '../components/AboutTitle';
import AboutMenu from '../components/AboutMenu';

export default function About() {
  return (
    <>
      <SeoHead
        title={'Tailwindラボ'}
        titleTemplate={'Hor_Web_Blog'}
        description={'tailwindラボ in Web技術ブログ'}
      />
      <main>
        <div className='container mx-auto py-4'>
          <AboutTitle />
          {/* -------------menu---------------- */}
          <ul className='flex justify-center gap-2 text-base'>
            <AboutMenu slug={'grid'} menutext={'grid構造'} />
            <AboutMenu slug={'xy_center'} menutext={'上下中央寄せ'} />
            <AboutMenu slug={'flex'} menutext={'flex構造'} />
            <AboutMenu slug={'member'} menutext={'リスト一覧'} />
          </ul>
        </div>
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
          <div className='container mx-auto'>
            <div className='flex flex-wrap sm:ml-[1.3%] ml-[1.5%]'>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-orange-400 text-3xl'>
                  text-orange-400 text-3xl
                </p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-green-500 text-3xl'>text-green-500</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-purple-700 text-3xl'>text-purple-700</p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-emerald-700 text-2xl'>
                  text-emerald-700 text-2xl
                </p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-cyan-500 text-clip'>
                  text-cyan-500 text-clip
                </p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-indigo-900 text-5xl'>
                  text-indigo-600 text-5xl
                </p>
              </div>
              <div className='w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-slate-300 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]'>
                <p className='text-rose-500 text-base'>下線を引く</p>
              </div>
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
              <Image
                className='h-full w-full rounded-full object-cover object-center ring ring-white'
                alt='あて画像'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                width='200'
                height='100'
              />
            </div>
            <div className='h-10 w-10'>
              <Image
                className='h-full w-full rounded-full object-cover object-center ring ring-white'
                alt='あて画像'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                width='200'
                height='100'
              />
            </div>
            <div className='h-10 w-10'>
              <Image
                className='h-full w-full rounded-full object-cover object-center ring ring-white'
                alt='あて画像'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                width='200'
                height='100'
              />
            </div>
            <div className='h-10 w-10'>
              <Image
                className='h-full w-full rounded-full object-cover object-center ring ring-white'
                alt='あて画像'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                width='200'
                height='100'
              />
            </div>
            <div className='h-10 w-10'>
              <Image
                className='h-full w-full rounded-full object-cover object-center ring ring-white'
                alt='あて画像'
                src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                width='200'
                height='100'
              />
            </div>
          </div>
        </div>
        <br />
      </main>
    </>
  );
}
