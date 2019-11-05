/* global $, moment, ReactDOM */

$(document).ready(() => {
  const weapons = [
    { light: 'https://www.light.gg/db/items/2782847179', tracker: 'https://destinytracker.com/destiny-2/db/items/2782847179-blasphemer', name: 'Blasphemer (Shotgun)', img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/2782847179.jpg' },
    { light: 'https://www.light.gg/db/items/2164448701', tracker: 'https://destinytracker.com/destiny-2/db/items/2164448701-apostate', name: 'Apostate (Sniper)', img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/2164448701.jpg' },
    { light: 'https://www.light.gg/db/items/3067821200', tracker: 'https://destinytracker.com/destiny-2/db/items/3067821200-heretic', name: 'Heretic (Rocket Launcher)', img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/3067821200.jpg' }
  ]
  const data = []

  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0')
  const start = moment.tz('America/Los_Angeles')
    .year(2019).month(9).date(29).hour(10).minute(0).second(0)
  const today = moment.tz('America/Los_Angeles')
  const todayReset = moment.tz('America/Los_Angeles').hour(10).minute(0).second(0)
  let reset1 = todayReset.clone()
  let reset2 = todayReset.clone()
  reset1 = moment.duration(reset1.add(1, 'day').diff(today))
  reset2 = moment.duration(reset2.add(2, 'day').diff(today))

  let diff = moment.tz('America/Los_Angeles').diff(start, 'days')
  const afterReset = today.isAfter(todayReset)
  console.log(afterReset)
  if (!afterReset) diff += -1

  const currentWeapon = weapons[diff % 3]
  console.log(currentWeapon)

  data.push({ light: currentWeapon.light, tracker: currentWeapon, img: currentWeapon.img, title: currentWeapon.name, body: 'Currently dropping' })

  weapons.splice(diff % 3, 1)
  data.push({ light: weapons[diff % 3].light, tracker: weapons[diff % 3].tracker, img: weapons[diff % 3].img, title: weapons[diff % 3].name, body: `in ${reset1.days()} days, ${reset1.hours()} hours  and ${reset1.minutes()} minutes` })
  weapons.splice(diff % 3, 1)
  data.push({ light: weapons[0].light, tracker: weapons[0].tracker, img: weapons[0].img, title: weapons[0].name, body: `in ${reset2.days()} days, ${reset2.hours()} hours  and ${reset2.minutes()} minutes` })
  ReactDOM.render(cardBody(data), document.getElementById('body'))
})

function cardBody (data) {
  return <div className='card-group'>
    {
      data.map((card, index) => {
        return (
          <div className='card' key={card.title}>
            <img
              src={card.img}
              className='card-img-top' alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.body}</p>
              <a href={card.light} className='card-link'>Light.GG</a>
              <a href={card.tracker} className='card-link'>Destiny Tracker</a>
            </div>
          </div>
        )
      })
    }
  </div>
}
