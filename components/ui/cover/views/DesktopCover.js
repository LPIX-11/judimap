import { Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

import coverStyle from '../Cover.module.css'

export default function DesktopCoverView() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 200;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName(coverStyle.typewrite);
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      console.log(toRotate);
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = `${coverStyle.typewrite} > .wrap { border-right: 0.08em solid #fff}`;
    document.body.appendChild(css);

  }, []);

  return (
    <Flex className={'position-relative'} direction={'column'} w={'100%'} h={'80vh'} align={'center'} justify={'center'}>

      <div className={coverStyle.left} style={{ zIndex: 1 }}>
        <Flex className={'position-relative pl-5'} direction={'column'} w={'60vw'} h={'80vh'} bg={'transparent'} align={'start'} justify={'center'}>
          <Heading color={'#FFF'} as={'h1'} size={'lg'}>JudiMap</Heading>
          <Heading color={'#FFF'} as={'h3'} size={'md'}
            className={`text-primary ${coverStyle.typewrite}`}
            data-period={'5000'}
            data-type={'[ "Le souci d’un justiciable bien informé.", "La nouvelle plateforme d’information et d’orientation juridique au Sénégal.", "Le bon droit influence alors l’instauration d’un bon ordre social." ]'}>
            <span className={'wrap'}></span>
          </Heading>
          {/* <Heading color={'#FFF'} as={'h3'} size={'md'}>
            "La nouvelle plateforme d’information et d’orientation juridique au Sénégal."
          </Heading> */}
        </Flex>
      </div>

      <div className={coverStyle.right}>
        <Image src={'/pexels-cottonbro-5081971.jpg'} height={'100vh'} width={'100%'} pos={'absolute'} zIndex={-2} right={-10} />
      </div>
      <div className={'bg-dark position-absolute'} style={{ height: '80vh', width: '100%', opacity: .3 }}></div>
      <Flex className={'position-absolute w-100'} bottom={10} align={'center'} justify={'center'} zIndex={300}>
        <FiChevronDown className={'bouncy'} color={'white'} size={32} />
      </Flex>
    </Flex>
  )
}