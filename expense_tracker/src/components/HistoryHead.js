import React from 'react'

const HistoryHead = () => {
  return (
    <div className='history_header'>
        <p>History</p>
        <label>
              <select
                  name="dropdown_menu"
                  id="history_header__drop_menu"
              >
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
              </select>
        </label>
    </div>
  )
}

export default HistoryHead
