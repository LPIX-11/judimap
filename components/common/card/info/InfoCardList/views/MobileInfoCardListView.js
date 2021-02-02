import { Flex } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'

import InfoCard from '../../InfoCard';
import { useEffect, useRef, useState } from "react";

export default function MobileInfoCardListView() {
  const [pause, setPause] = useState(false)
  const timer = useRef()

  const [sliderRef, slider] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    loop: true,
    mode: 'free-snap',
    duration: 1000,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        loop: false,
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slidesPerView: 2.5,
        loop: false,
        mode: "free-snap",
      }
    },
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    // <div className={'w-100 pt-4 pl-5'} data-aos={'fade-up'}>
    <div ref={sliderRef} className={'keen-slider mt-4'}>
      <div className={'keen-slider__slide w-100'}>
        <InfoCard title={'Qui sommes nous ?'} description={'La première plateforme digitale dédiée à l’information juridique et administrative au Sénégal pour pallier au manque de connaissances juridiques de bases qui devraient être la feuille de route de tout bon citoyens.'} />
      </div>

      <div className={'keen-slider__slide'}>
        <InfoCard title={'Ce qu’on fait'} image={'young_girl.webp'} description={`
              -Nous informons et orientons la population sur leurs droits et obligations, et sur  l’actualité juridique au Sénégal.
              -Conseil et assistance aux entrepreneurs dans la formalisation de leurs activités et aux entreprises étrangères dans le processus d’investissement et d’implantation au Sénégal.`} />
      </div>
      <div className={'keen-slider__slide'}>
        <InfoCard title={'Notre Cible ?'} image={'/black_men.webp'} description={`Population sénégalaise
              Entrepreneurs
              Entreprises
              Agents de justice
              Étudiant / Juristes`} />
      </div>
    </div>
    // </div>
  )
}