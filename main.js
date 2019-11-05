/* global $, moment */
const weapons = ['Blasphemer (Shotgun)', 'Apostate (Sniper)', 'Heretic (Rocket Launcher)']
$(document).ready(() => {
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

  $('#weapon1').text(currentWeapon)

  weapons.splice(diff % 3, 1)

  $('#timer2').text(`in ${reset1.days()} days, ${reset1.hours()} hours  and ${reset1.minutes()} minutes`)
  $('#weapon2').text(weapons[diff % 3])
  weapons.splice(diff % 3, 1)
  $('#timer3').text(`in ${reset2.days()} days, ${reset2.hours()} hours  and ${reset2.minutes()} minutes`)
  $('#weapon3').text(weapons[0])
})

moment.updateLocale('en', {
  relativeTime: {
    s: function (number, withoutSuffix, key, isFuture) {
      return number + ' seconds'
    }
  }
})
