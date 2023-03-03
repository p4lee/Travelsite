import React from 'react'
import './etusivu.css'
import IMG from '../../assets/travel.jpg'

const Etusivu = () => {
  return (
    <div class="etusivu_container">
  <h2 className='etusivu-h2'>Tervetuloa matkailusivustollemme, jossa pyrimme tuomaan maailman sormiesi ulottuville!</h2>
  <img className="travel_pic" src={IMG} alt="Image" />
  <h3 className='fill-text'>
  Euroopan viehättävistä kaupungeista Etelä-Amerikan karuihin maisemiin, matkasivustomme on suunniteltu esittelemään maailman kauneutta ja monimuotoisuutta.
  <br/>Etsitpä sitten seikkailua, rentoutumista tai vain maisemanvaihtoa, meillä on jokaiselle jotakin.
  <br/>Tutki Venetsian mutkittelevia kanavia, hemmottele itseäsi Tokion herkullisella keittiöllä tai todista kunnioitusta herättäviä revontulia Islannissa.
  <br/>Koska valittavana on niin monia kohteita, sinua hemmotellaan valinnalla.
Kokeneiden matkailijoiden tiimimme on tutkinut maailmaa tuodakseen sinulle parhaat matkasuositukset, sisäpiirin vinkit ja henkeäsalpaavat kuvat. Olemme ylpeitä voidessamme tarjota yksityiskohtaisia tietoja jokaisesta kohteesta, jotta voit suunnitella matkasi helposti.
Lähde kanssamme löytöretkelle, kun viemme sinut virtuaalikierrokselle maailman jännittävimpiin ja kiehtovimpiin paikkoihin. 
<br/>Anna matkasivustomme inspiroida seuraavaa seikkailuasi ja auttaa sinua luomaan unohtumattomia muistoja.
<br/> Aloita tutkiminen nyt!
</h3>
</div>
  )
}

export default Etusivu