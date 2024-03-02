'use client'
import React, { FC, useState } from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { styles } from "./style";

interface HolidayCardSectionProps {
  format: string;
}

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
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div>
            {format === 'original'? <p className={styles.altTitle}>
              You can select just your photograph
            </p>: 
            <p className={styles.title}>
              Painting Wall
              </p>}
          </div>

          {/* Dropdown: only photographs are applicable */}
          {format === 'original' && 
          <div className="relative inline-block text-left">
            <div className="group">
                {person===''?
                <button type="button"
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    Select a person to view
                    <svg className={styles.expandSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                </button>
                :
                <button type="button"
                  className={styles.menuButton}
                  onClick={() => setPerson('')}>
                    View All
                </button>}

                {menuOpen && 
                <div
                    className={styles.menuContainer}>
                    <div className="py-1 font-gsans">
                      {recipients.map(recipient => 
                        <button key={recipient.id} className={styles.menuOptions} onClick={()=>{setPerson(recipient.id); setMenuOpen(false)}}>
                          {recipient.name}
                          </button>
                        )}

                    </div>
                </div>}
              </div>
          </div>}

        </div>
        
        {/* Dynamic View or Static if paintings*/}
        {format!='original'? 
          <Carousel className="rounded-xl" placeholder={undefined}>
            {recipients.map((recipient) => 
                <img
                  className="h-full w-full object-cover"
                  src={`/painted/_${recipient.id}.jpg`}
                  alt={`${recipient.name} Img`}
                />
            )}
          </Carousel>
          : person === '' ?
          // <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
              <div className="grid mb-32 grid-cols-1 lg:gap-8 sm:gap-1 sm:grid-cols-2 md:grid-cols-2">
              {recipients.map((recipient) => 
                  <img
                  className="h-40 my-2 w-full max-w-full rounded-lg object-cover object-center"
                  // className={`${format != 'original' && 'rounded-lg'} object-cover mx-auto my-10`}
                    src={`/original/_${recipient.id}.jpg`}
                    alt={`${recipient.name} Img`}
                    onClick={()=> setPerson(recipient.id)}
                  />
              )}
              </div>
          : 
          recipients.filter(recipient=> recipient.id === person).map((recipient) => 
            <div>
            <div className="mb-32 grid gap-2 lg:gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
                <img
                    className="my-2 h-full w-full rounded-xl object-cover object-center"
                    src={`/original/_${recipient.id}.jpg`}
                    alt={`${recipient.name} Img`}
                  />
                <figure className="relative h-96 w-full">
                  <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={`/painted/_${recipient.id}.jpg`}
                    alt={`${recipient.name} Img`}
                  />
                  <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                      <Typography variant="h5" color="blue-gray" placeholder={undefined}>
                        {recipient.name}
                      </Typography>
                      <Typography color="gray" className="mt-2 font-normal" placeholder={undefined}>
                        {recipient.description}
                      </Typography>
                    </div>
                  </figcaption>
                </figure>
                {/* <Image
                  className={`${format != 'original' && 'rounded-lg'} object-cover mx-auto my-10`}
                  src={`/${format != 'original'? 'original': 'painted'}/_${recipient.id}.jpg`}
                  width={200}
                  height={200}
                  unoptimized
                  alt={`${recipient.name} Img`}
                  priority
                /> */}
              </div>
              {/* <p className="text-textColor text-center text-sm md:text-lg">
                {recipient.description}
              </p> */}
            </div>
          )      
          }
      </div>
    </section>
  );
};

export default HolidayCardSection;