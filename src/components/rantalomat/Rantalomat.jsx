import React from 'react'
import './rantalomat.css'
import IMG1 from '../../assets/maldives.jpg'
import IMG2 from '../../assets/thailand.jpg'
const Rantalomat = () => {
  return (
    <div class="rantalomat_container">
  <h2 className='ranta-h2'>Haaveiletko lämpimästä ja aurinkoisesta pakopaikasta? <br/>Kiinnostaako trooppinen paratiisi kuten Malediivit tai Meksiko? </h2>
  <img className="ranta_pic" src={IMG1}/>
  <h3 className='fill-text'>
  Kristallinkirkkailla turkoosilla vesillä, pehmeillä hiekkarannoilla ja ympärivuotisilla lämpimillä lämpötiloilla nämä kohteet tarjoavat äärimmäisen rantalomakokemuksen.
Malediiveilla voit rentoutua ylellisissä vedenalaisissa bungaloweissa tai nauttia auringosta koskemattomilla valkoisilla hiekkarannoilla. Pulahda kristallinkirkkaisiin vesiin ja ihastele eloisaa merielämää, joka kutsuu tätä paratiisia kodiksi.
Samaan aikaan Meksikossa voit tutustua upeisiin rantakaupunkeihin, kuten Tulumiin tai Cabo San Lucasiin, joissa on loputtomat mahdollisuudet seikkailuun, rentoutumiseen ja hauskanpitoon. Halusitpa sitten oleskella rannalla margarita kädessäsi tai aloittaa jännittävän snorklausseikkailun, Meksikossa on kaikki.
Riippumatta siitä, minkä kohteen valitset, rantaloma lämpimässä ja aurinkoisessa paikassa on täydellinen tapa paeta jokapäiväisen elämän stressiä ja hemmotella rentoutumista ja seikkailua. Aloita lomasi suunnittelu jo tänään ja koe äärimmäinen rantaloma Malediivien tai Meksikon lämpimillä rannoilla!
</h3>

<img className="ranta_pic" src={IMG2}/>

<h3 className='fill-text'>Jos etsit lomakohdetta, jossa yhdistyvät luonnonkauneus, kulttuurikokemukset ja herkullinen ruoka, kannattaa kohteeksi valita Thaimaa! <br/>Tämä upea maa tarjoaa ainutlaatuisen sekoituksen modernia mukavuutta ja muinaisia perinteitä, joten se on täydellinen paikka paeta ja tutkia.
</h3>
<h3 className='fill-text'>Thaimaa tunnetaan koskemattomista rannoistaan ja kirkkaista turkoosista vesistään, joten se on suosittu kohde rannan ystäville ja vesiurheilun harrastajille. Halusitpa sitten rentoutua rauhallisella saarella tai juhlia muiden matkailijoiden kanssa, Thaimaassa on ranta, joka on täydellinen sinulle.

Mutta Thaimaalla on paljon muutakin tarjottavaa kuin vain kauniit rannat. Maassa on muinaisia temppeleitä, vilkkaita kaupunkeja ja reheviä viidakoita, jotka vain odottavat tutkimista. Osallistu ruoanlaittokurssille Chiang Maissa, tutustu Bangkokin vilkkaaseen yöelämään tai patikoi upean Khao Yain kansallispuiston läpi – mahdollisuudet ovat rajattomat.

</h3>

</div>


  )
}

export default Rantalomat