import React from "react";
const TopPost = ({ card }: any) => {

  return (
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
  );
};

export default React.memo(TopPost);
