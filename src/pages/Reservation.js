import React from 'react'
import { ReservationWrapper } from '../css/reservation-style'

const Reservation = () => {
  return (
    <ReservationWrapper>
      <div className='reservation_warpper'>
        <div className='reservation_inner'>
          <h1>캠핑장 예약 목록</h1>
          <div className='reservation_list_head'>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </ReservationWrapper>
  )
}

export default Reservation