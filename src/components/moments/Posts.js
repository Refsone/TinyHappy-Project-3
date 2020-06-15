import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import 'moment/locale/fr'
import CardPost from './CardPost'
import './Posts.css'
import AddNewMoment from './AddNewMoment'
import Navbar from '../commons/footer/Navbar'

export default function Post () {
  const [moments] = useState([
    {
      user_isPresent: 0,
      moment_text: '“Hey Louise, arrête de faire du foin-foin là !"',
      moment_context: 'En parlant à sa soeur qui est un peu bruyante.',
      moment_event_date: '2020-05-12',
      moment_favorite: 0,
      user_id: 1,
      moment_type_id: 0,
      family_firstname: [{ name: 'Violette', color: 'rose' }]
    },
    {
      user_isPresent: 0,
      moment_text: 'Les filles ont fabriqué une cabane avec tous les éléments mobiles de l’appart. 30 minutes de rangement, youpi.',
      moment_context: '',
      moment_event_date: '2020-05-09',
      moment_favorite: 1,
      user_id: 1,
      moment_type_id: 1,
      family_firstname: [{ name: 'Louise', color: 'cyan' }, { name: 'Violette', color: 'rose' }],
      family_color: ['cyan, rose']
    },
    {
      user_isPresent: 0,
      moment_text: 'Les filles sont chez les grands-parents !!!! Liberés, délivrés !',
      moment_context: 'En parlant à sa soeur qui est un peu bruyante.',
      moment_event_date: '2020-05-09',
      moment_favorite: 0,
      user_id: 1,
      moment_type_id: 0,
      family_firstname: [{ name: 'Marie', color: 'blue' }, { name: 'Jérôme', color: 'green' }]
    },
    {
      user_isPresent: 0,
      moment_text: '“Dis papa, tu connais l’histoire de la coquillette molle ?”',
      moment_context: '',
      moment_event_date: '2020-05-07',
      moment_favorite: 0,
      user_id: 1,
      moment_type_id: 0,
      family_firstname: [{ name: 'Violette', color: 'rose' }]
    },
    {
      user_isPresent: 0,
      moment_text: '“Dis papa, comment on fait des enfants ?”',
      moment_context: '',
      moment_event_date: '2020-05-02',
      moment_favorite: 1,
      user_id: 1,
      moment_type_id: 0,
      family_firstname: [{ name: 'Louise', color: 'cyan' }]
    }
  ])
  let date = ''

  const formatDate = (date) => {
    Moment.locale('fr')
    return Moment(date).format('LL')
  }

  useEffect(() => {
    console.log('change')
  }, [date])

  return (
    <div className='Posts'>
      {moments.map((moment, key) => {
        if (date !== moment.moment_event_date) {
          date = moment.moment_event_date
          return (
            <>
              <p className='moment-date'>{formatDate(moment.moment_event_date)}</p>
              <CardPost moment={moment} key={key} style={{ borderLeft: '0.4rem solid #91E9FE' }} />
            </>
          )
        } else {
          date = moment.moment_event_date
          return (
            <>
              <CardPost moment={moment} key={key} style={{ marginTop: '8px', borderLeft: '0.4rem solid #D3FF9B' }} />
            </>
          )
        }
      })}
      <AddNewMoment />
      <Navbar />
    </div>
  )
}
