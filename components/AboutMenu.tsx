import React from 'react';

const AboutMenu = ({ slug, menutext }: any) => {
  return (
    <li>
      <a href={`#${slug}`} className='bg-purple-700 text-white p-1'>
        {menutext}
      </a>
    </li>
  );
};

export default AboutMenu;
