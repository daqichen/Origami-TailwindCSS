'use client'

import Image from "next/image";
import React, { FC, useState } from "react";

interface HolidayCardSectionProps {
  format: string;
}

const recipientss = ['lisaTom', 'eileen', 'evan', 'geriVirginia', 'me', 'resh', 'rosamaria', 'stacy', 'tara', 'wendy'];

const recipients = [
  {
    id: 'lisaTom',
    name: 'Lisa & Tom',
    description: 'A selfie Rosamaria sent me of you two!'
  },
  {
    id: 'eileen',
    name: 'Eileen',
    description: 'A group selfie from when we celebrated Stacy\'s engagement!'
  },
  {
    id: 'evan',
    name: 'Evan',
    description: 'Us at Geri and Virginia\'s housewarming party!'
  },
  {
    id: 'geriVirginia',
    name: 'Geri & Virginia (Kus & Hufflepuff)',
    description: 'Post department graduation ceremony!'
  },
  {
    id: 'me',
    name: 'Rosamaria & Evan',
    description: 'Us three in Padanaram!'
  },
  {
    id: 'resh',
    name: 'Resh',
    description: 'Overpriced but stunning aquarium of Atlanta oO0'
  },
  {
    id: 'rosamaria',
    name: 'Rosamaria',
    description: 'The customary picture of you, me, and Newman in front of the Christmas tree'
  },
  {
    id: 'stacy',
    name: 'Stacy',
    description: 'The celebration of the year!'
  },
  {
    id: 'tara',
    name: 'Tara',
    description: 'Love this sweet photo of you and your dad!'
  },
  {
    id: 'wendy',
    name: 'Wen wen',
    description: 'You and I in front of a sign inside some mall, cannot remember which one:)'
  },
]

const HolidayCardSection: FC<HolidayCardSectionProps> = ({format}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [person, setPerson] = useState('');
  return (
    <section id={format === 'original'? 'photographs': 'paintings'} className="w-full flex justify-center">
      <div className=" flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="flex flex-col items-center w-full md:max-w-[800px] text-center gap-8">
          <div>
            <p className="text-textColor text-sm md:text-lg">
              You can select just your {format === 'original'? 'photograph': 'painting'} with this dropdown:
            </p>
          </div>
          {/* Dropdown */}
          <div className="relative inline-block text-left">
            <div className="group">
                {person===''?
                <button type="button"
                    className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    Select a person to view
                    <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                </button>
                :
                <button type="button"
                  className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => setPerson('')}>
                    View All
                </button>}

                {menuOpen && 
                <div
                    className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1">
                      {recipients.map(recipient => 
                        <button key={recipient.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={()=>{setPerson(recipient.id); setMenuOpen(false)}}>
                          {recipient.name}
                          </button>
                        )}

                    </div>
                </div>}
            </div>
        </div>
        </div>
        
        {/* Dynamic View */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
          {person!=''? 
          recipients.filter(recipient=> recipient.id === person).map((recipient) => 
              <div>
                <Image
                  className={`${format != 'original' && 'rounded-lg'} object-cover mx-auto my-10`}
                  src={`/year2024/${format === 'original'? 'original': 'painted'}/_${recipient.id}.jpg`}
                  width={200}
                  height={200}
                  unoptimized
                  alt={`${recipient.name} Img`}
                  priority
                  onClick={()=> setPerson(recipient.id)}
                />
                <Image
                  className={`${format != 'original' && 'rounded-lg'} object-cover mx-auto my-10`}
                  src={`/year2024/${format != 'original'? 'original': 'painted'}/_${recipient.id}.jpg`}
                  width={200}
                  height={200}
                  unoptimized
                  alt={`${recipient.name} Img`}
                  priority
                  onClick={()=> setPerson(recipient.id)}
                />
                <p className="text-textColor text-sm md:text-lg">
                  {recipient.description}
                </p>
              </div>
          ): recipients.map((recipient) => 
              <Image
                className={`${format != 'original' && 'rounded-lg'} object-cover mx-auto my-10`}
                src={`/year2024/${format === 'original'? 'original': 'painted'}/_${recipient.id}.jpg`}
                width={200}
                height={200}
                unoptimized
                alt={`${recipient.name} Img`}
                priority
                onClick={()=> setPerson(recipient.id)}
              />
          )}
          </div>
      </div>
    </section>
  );
};

export default HolidayCardSection;