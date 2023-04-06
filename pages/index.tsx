import { GetStaticProps } from "next";
import Head from 'next/head';
import { getAllPosts } from "../lib/notionAPI";

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 10,
  };
};

export default function Home({allPosts}: any) {
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-4">
          <h2 className="text-3xl font-bold text-amber-400 md:text-emerald-600 text-center">
            Hello world!
        </h2>
        
        <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {allPosts.map((card: any) => (
            <div
              key={card.id}
              className={` rounded-lg overflow-hidden shadow-lg`}
            >
              <img
                className="w-full h-48 object-cover"
                src={card.thumbnail}
                alt={card.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{card.date}</p>
                <div className="flex flex-wrap mb-2">
                  {card.tags.map((tag: any, index: any) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
