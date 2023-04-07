import AboutTitle from "../components/AboutTitle";

export default function About() {

  return (
    <>
      <main className="container mx-auto py-4">
        <AboutTitle />
        <div className="container mx-auto sm:flex sm:justify-between">
          <div className="bg-red-800 sm:w-[calc(50%_-_10px)] px-4">aaaaa</div>
          <div className="bg-orange-500 sm:w-[calc(50%_-_10px)] px-4">bbb<br />bbb<br />bbb</div>
        </div>

        <div className="grid place-items-center h-60 bg-blue-200 mb-[40px]">
            <img src="https://placehold.jp/3d4070/ffffff/150x90.png" />
        </div>
        
        <div className="container mx-auto">
          <div className="flex flex-wrap sm:ml-[1.3%] ml-[1.5%]">
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="text-4xl">ユーティリティとしてのサイズ</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="text-2xl">ユーティリティとしてのサイズ</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="text-[14px]">フォントサイズをそのまま指定</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="text-[1.5rem]">16の何倍になります</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="font-bold">太くなります</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="text-center">真ん中に</p></div>
              <div className="w-[calc(50%_-_2%)] mr-[2.0%] mb-[30px] bg-yellow-600 sm:w-[calc(33%_-_1%)] sm:mr-[1.3%]"><p className="underline">下線を引く</p></div>
          </div>
        </div>
      </main>
    </>
  );
};