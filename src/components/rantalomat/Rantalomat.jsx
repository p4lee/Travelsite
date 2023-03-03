import React from 'react'
import './rantalomat.css'
import IMG1 from '../../assets/maldives.jpg'
const Rantalomat = () => {
  return (
    <div class="rantalomat_container">
  <h2 className='ranta-h2'>Tervetuloa matkailusivustollemme, jossa pyrimme tuomaan maailman sormiesi ulottuville!</h2>
  <img className="ranta_pic" src={IMG1} alt="Image" />
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

export default Rantalomat