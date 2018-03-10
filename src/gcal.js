import request from 'superagent'
 
export function getEvents (callback) {
  request
    .get("https://www.googleapis.com/calendar/v3/calendars/pagk30kqpa5ardane6o36nh8lc@group.calendar.google.com/events?key=AIzaSyDlBREu-e3aD7TM7cztRY9LIc-268SQFgM")
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
        
                   console.log(resp.text)     
          events.push({
            
                
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
           
           

           
           
            
            
          })
        })
        callback(events)
 
      }
    })
}
