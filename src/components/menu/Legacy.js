import React from 'react'
import Header from '../commons/header/Header'

import './LegacyPrivacy.css'

const Legacy = (props) => {
  const path = props.location.pathname
  return (
    <>
      <Header location={path} burger />
      <div className='container-mentions'>
        <h1 className='title bold-16px-grey'>MENTIONS LÉGALES</h1>
        <h2 className='soustitle regular-16px-grey'>IDENTIFICATION</h2>
        <p className='t-courant medium-14px-grey'>
Le site tinyhappy.app ainsi que l'application associée Tinyhappy
sont édités et maintenus par Mr Jérôme Benoit.
L'application a été initialement développée par Mme Veronica Pattou,
Mr Auxence Blondel, Mr Jérôme Potie, Mr Nicolas Régnier,
Mr Tristan Manaut, Mr Jérémie Neret.
        </p>
        <p className='t-courant medium-14px-grey'>
Adresse email : hello@tinyhappy.app
Directeur de la publication : Mr Jérôme Benoit<br />

Hébergement du site : 1&1 IONOS SARL, 7 place de la Gare, 57201 Sarreguemines - France<br />

Hébergement de l'app : OVH SAS, 2 rue Kellermann, 59100 Roubaix - France
        </p>
        <h2 className='soustitle regular-16px-grey'>DONNÉES PERSONNELLES / COOKIES, TRACEURS ET TECHNOLOGIES SIMILAIRES</h2>
        <p className='t-courant medium-14px-grey'>Le terme « cookie » recouvre les différents traceurs qui sont déposés ou
lus sur un ordinateur, tablette, ou mobile, par exemple lors de la consultation
d’un site internet, d’une publicité, ou de l’utilisation d’un logiciel. Un cookie a
pour but de collecter des informations relatives à la navigation de l’internaute.
Ces informations peuvent être utilisées pour différentes finalités, notamment
réaliser des statistiques sur l’utilisation faite du site.
        </p>
        <p className='t-courant medium-14px-grey'>
Les cookies utilisés sur le site sont uniquement à but statistique sur la fréquentation du site.
        </p>
        <p className='t-courant medium-14px-grey'>
Si vous ne souhaitez pas que des cookies soient utilisés sur votre terminal,
vous pouvez à tout moment choisir de désactiver ces cookies. En effet, la plupart des navigateurs vous permettent de désactiver le dépôt de cookies via les options de réglage.
        </p>
        <h2 className='soustitle regular-16px-grey'>PROPRIÉTÉ INTELLECTUELLE</h2>
        <p className='t-courant medium-14px-grey'>Il est expressément rappelé que, conformément aux dispositions du Code de la propriété intellectuelle,
toute reproduction, représentation, transmission, modification ou adaptation de tout ou
partie du site, sur quelque support que ce soit, par quelque moyen que ce soit,
est strictement interdite sans l’autorisation écrite et préalable de M. Jérôme Benoit.
        </p>
      </div>
    </>
  )
}

export default Legacy
