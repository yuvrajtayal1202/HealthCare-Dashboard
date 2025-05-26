import React from 'react'
import './styles.css'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
export default function Date() {
  return (
    <main className='date-main'>
      <CalendarView/>
      <UpcomingSchedule/>
    </main>
  )
}
