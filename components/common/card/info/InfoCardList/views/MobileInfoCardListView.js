import { Flex } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'

const InfoCard = dynamic(() => import('../../InfoCard'));

export default function MobileInfoCardListView() {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        // mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        // mode: "free-snap",
      },
    },
  })
  return (
    // <div className={'w-100 pt-4 pl-5'} data-aos={'fade-up'}>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <InfoCard title={'Qui sommes nous ?'} description={'La première plateforme digitale dédiée à l’information juridique et administrative au Sénégal pour pallier au manque de connaissances juridiques de bases qui devraient être la feuille de route de tout bon citoyens.'} />
      </div>

      <div className="keen-slider__slide">
        <InfoCard title={'Ce qu’on fait'} image={'pexels-cottonbro-5081971.jpg'} description={`
              -Nous informons et orientons la population sur leurs droits et obligations, et sur  l’actualité juridique au Sénégal.
              -Conseil et assistance aux entrepreneurs dans la formalisation de leurs activités et aux entreprises étrangères dans le processus d’investissement et d’implantation au Sénégal.`} />
      </div>
      <div className="keen-slider__slide">
        <InfoCard title={'Notre Cible ?'} image={'/black_men.jpg'} description={`Population sénégalaise
              Entrepreneurs
              Entreprises
              Agents de justice
              Étudiant / Juristes`} />
      </div>
    </div>
    // </div>
  )
}