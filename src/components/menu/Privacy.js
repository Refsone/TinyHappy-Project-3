import React from 'react'
import Header from '../commons/header/Header'

import './LegacyPrivacy.css'

const Privacy = (props) => {
  const path = props.location.pathname
  return (
    <>
      <Header location={path} burger />
      <div className='container-mentions'>
        <h1 className='title bold-16px-grey'>Politique de confidentialité</h1>
        <p className='t-courant medium-14px-grey'>
        Tinyhappy a pour objectif de créer l'histoire de ses enfants et de soi-même
        à titre totalement privé, avec l'option de le partager avec des individus
        sélectionnés.
        </p>
        <h2 className='soustitle regular-16px-grey'>PROPRIÉTÉ ET GESTION DES DONNÉES PERSONNELLES</h2>
        <p className='t-courant medium-14px-grey'>Vous avez le contrôle complet sur les informations et le contenu que vous fournissez sur Tinyhappy. Vous conservez la propriété intellectuelle de tout le contenu que vous ajoutez sur Tinyhappy. Vous pouvez modifier ou supprimer le contenu que vous avez ajouté. Vous avez également la possibilité de supprimer entièrement votre compte à n'importe quel moment.
        </p>
        <p className='t-courant medium-14px-grey'>
        Si vous souhaitez supprimer votre compte, le profil des enfants que vous gérez ainsi que tous les moments associés à votre compte, contactez-nous à l'adresse suivante : hello@tinyhappy.app.
        </p>
        <h2 className='soustitle regular-16px-grey'>INFORMATIONS SUR VOTRE COMPTE</h2>
        <p className='t-courant medium-14px-grey'>
        Quand vous créez un compte, nous collectons des informations personnelles spécifiques que vous fournissez volontairement, tels que votre nom, votre surnom, votre photo de profil, et votre adresse email. Nous utilisons ces informations pour vous permettre d'utiliser Tinyhappy, et vous envoyer des informations sur nos produits et services.
        </p>
        <h2 className='soustitle regular-16px-grey'>INFORMATIONS QUE NOUS COLLECTONS</h2>
        <ul className='medium-14px-grey'>
          <li>Nom et contact (tels que noms, surnom, email);</li>
          <li>Information sur les enfants que vous ajoutez sur Tinyhappy (tels que noms, surnoms, date de naissance);</li>
          <li>Information sur vos usage du site et de l'application mobile;</li>
          <li>Données personnelles inclues dans le contenus que vous créé sur Tinyhappy;</li>
          <li>Données personnelles des individus avec qui vous partagez votre contenus (tels que noms et adresse email);</li>
          <li>N'importe quelle information que vous nous avez fourni (tels que votre photo de profil, et votre consentement à recevoir notre newsletter).</li>
        </ul>
        <h2 className='soustitle regular-16px-grey'>COMMENT UTILISONS-NOUS LES DONNÉES PERSONNELLES ?</h2>
        <ul className='medium-14px-grey'>
          <li>Pour vous créer un compte sur Tinyhappy;</li>
          <li>Pour vous autoriser à vous connecter à votre famille et vos amis;</li>
          <li>Pour vous fournir une assistance;</li>
          <li>Pour analyser comment Tinyhappy est utilisé, tel que le nombre de pages visitées, la durée passée sur ces pages, et quelle a été votre navigation sur le site et l'application;</li>
          <li>Pour vérifier la conformité aux exigences légales applicables et à nos politiques;</li>
          <li>Pour vous contacter.</li>
        </ul>
        <p className='t-courant medium-14px-grey'>
          <br />Nous traitons des données personnelles car elles sont également nécessaires au fonctionnement et à l'amélioration de nos produits et services.
        </p>
        <h2 className='soustitle regular-16px-grey'>PARTAGE DES DONNÉES PERSONNELLES AVEC DES TIERCES-PARTIES</h2>
        <p className='t-courant medium-14px-grey'>
        Il se peut que l'on partage vos données personnelles à des tierces-parties de telle sorte :
        </p>
        <ul className='medium-14px-grey'>
          <li>Fournisseurs de services;</li>
          <li>Conformité légale : Si requis par la loi ou pour protéger les droits, la propriété et la sécurité de nous-mêmes ou d'autrui.</li>
        </ul>
        <p className='t-courant medium-14px-grey'>
          <br />Nous ne vendons pas, ne louons pas, ni n'échangeons pas vos données personnelles.
        </p>
        <h2 className='soustitle regular-16px-grey'>PROTECTION DE VOS DONNÉES PERSONNELLES</h2>
        <p className='t-courant medium-14px-grey'>
        Nous utilisons et maintenons des mesures techniques et sécuritaires raisonnables pour protéger vos données personnelles, afin d'éviter toute destruction accidentaire illégale ou inautorisée, perte, accès, divulgation, utilisation ou altération. Cependant, dû à la nature ouverte d'Internet, nous ne pouvons pas garantir que les communications entre vous et nous, ou les informations personnelles stockées sont absolument sécurisés. Vous serez notifiés en cas de brèche qui pourrait avoir des conséquences sur la sécurité de vos données personnelles.
        </p>
        <h2 className='soustitle regular-16px-grey'>RÉTENTION DE VOS DONNÉES PERSONNELLES</h2>
        <p className='t-courant medium-14px-grey'>
        Nous conservons les données personnelles pendant la période nécessaire à la réalisation des finalités pour lesquelles nous collectons ces données, sauf si la loi en vigueur l'exige autrement. Dans la plupart des cas, nous conserverons vos données personnelles pendant toute la durée de votre utilisation des services Tinyhappy ou jusqu'à ce que vous demandiez la suppression d'un compte ou de vos données.
        </p>
        <h2 className='soustitle regular-16px-grey'>ANALYTICS ET COOKIES</h2>
        <p className='t-courant medium-14px-grey'>
        Nous utilisons des analyses et des cookies pour améliorer nos services. Nous utilisons des outils tiers, tels que Google Analytics (un service d'analyse de site internet fourni par Google, Inc.) pour enregistrer automatiquement des informations sur votre navigateur, votre emplacement et le type d'appareil. Nous utilisons également des cookies, des extraits de code stockés par votre navigateur, afin de nous permettre de reconnaître votre navigateur lors de visites ultérieures et de nous aider à mieux comprendre comment et quand les utilisateurs interagissent avec les services Tinyhappy.
        </p>
        <h2 className='soustitle regular-16px-grey'>PARTAGE D'INFORMATION</h2>
        <p className='t-courant medium-14px-grey'>
        Nous partageons votre contenu lorsque vous nous en donnez l'autorisation en invitant des utilisateurs ou en le partageant avec un service tiers. Gardez à l'esprit qu'une fois le contenu partagé publiquement ou par un service tiers, nous n'avons plus aucun contrôle sur qui peut visualiser le contenu partagé ou quelles informations sont collectées par d'autres personnes ou services.
        </p>
        <h2 className='soustitle regular-16px-grey'>CONTACTS ET CARNET D'ADRESSE</h2>
        <p className='t-courant medium-14px-grey'>
        Pour vous aider à inviter votre famille et vos amis à suivre vos enfants, Tinyhappy demandera l'accès à vos contacts. Nous transmettons ces informations en toute sécurité et elles ne sont pas stockées.
        </p>
        <h2 className='soustitle regular-16px-grey'>CONFIDENTIALITÉ DE VOS ENFANTS</h2>
        <p className='t-courant medium-14px-grey'>
        Tout le contenu fourni à Tinyhappy sur les enfants de moins de 13 ans est fourni avec le consentement de leurs parents. Nous ne collectons pas sciemment des informations personnelles sur des enfants de moins de 13 ans. Nous avons besoin du consentement deS parents/tuteurs pour traiter des données relatives à un enfant.
        </p>
        <h2 className='soustitle regular-16px-grey'>RGPD</h2>
        <p className='t-courant medium-14px-grey'>
        Si vous résidez dans l'Union européenne, au Royaume-Uni, au Lichtenstein, en Norvège ou en Islande, vous pouvez bénéficier de droits supplémentaires en vertu du règlement général de l'UE sur la protection des données (la "RGPD") en rapport avec vos données personnelles.
        </p>
        <h2 className='soustitle regular-16px-grey'>MISES À JOUR DE CETTE POLITIQUE</h2>
        <p className='t-courant medium-14px-grey'>
        Lorsque nous mettrons à jour ce document, nous publierons la version la plus récente sur le site tinyhappy.app/confidentialite et dans la version la plus récente de nos applications mobiles.
        </p>
        <h2 className='soustitle regular-16px-grey'>FEEDBACK</h2>
        <p className='t-courant medium-14px-grey'>
        Pour toute question, merci de nous contacter à l'adresse suivante : hello@tinyhappy.app.
        </p>
        <p className='t-courant medium-14px-grey'>
        Mis à jour le 03/07/2020.
        </p>
      </div>
    </>
  )
}

export default Privacy
