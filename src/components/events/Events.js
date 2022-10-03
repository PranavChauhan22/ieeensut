import './Events.css'
import {MdSchedule} from 'react-icons/md'
function Events() {
  return (
    <div className='EventPage' id="events">
    <div className="event">EVENTS</div>
    <div className="card-header">Explore Future Events</div>
    <div className="card-container">

          <div className="card">
              <div className="date-container">
                  <div className="date">4</div>
                  <div className="month-year">
                      <div className="month">October</div>
                      <div className="year">2022</div>
                  </div>
              </div>

              <div className="timing">
                  <MdSchedule/>
                  <p>9:00 AM</p>
              </div>
              <div className="divider-line"></div>

              <div className="card-content">
                  <h3>Xtreme league | Episode 1</h3>
                  <div className="description">Session by Utkarsh gupta
                  </div>
              </div>

              <button className="read-more">
              <a href="https://www.instagram.com/p/CjM7Et2uEea/" style={{ textDecoration: "none", color: "white" }}>Explore Now</a>
                </button>

          </div>
         
          <div className="card">
              <div className="date-container">
                  <div className="date g-1">13</div>
                  <div className="month-year g-2">
                      <div className="month">October</div>
                      <div className="year">2022</div>
                  </div>
              </div>

              <div className="timing">
              <MdSchedule/>
                  <p>12:00 PM </p>
              </div>

              <div className="divider-line"></div>

              <div className="card-content">
                  <h3>WIE Pitchers</h3>
                  <div className="description">An ideathon under project Inspire
                  </div>
              </div>

              <button className="read-more">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScG4TdIlJONHAQ0OVAnuDb0Y9wHpibsXadd9BXd6boaQGhx_w/viewform" style={{ textDecoration: "none", color: "white" }}> Explore Now</a>
                </button>
          </div>



         

      </div>
      </div>
  )
}

export default Events