/* global $, moment */
const weapons = ['Blasphemer (Shotgun)', 'Apostate (Sniper)', 'Heretic (Rocket Launcher)']
$(document).ready(() => {
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0')
  const start = moment.tz('America/Los_Angeles')
    .year(2019).month(9).date(29).hour(10).minute(0).second(0)
  const today = moment.tz('America/Los_Angeles')
  const todayReset = moment.tz('America/Los_Angeles').hour(10).minute(0).second(0)

  let diff = moment.tz('America/Los_Angeles').diff(start, 'days')
  const afterReset = today.isAfter(todayReset)
  console.log(afterReset)
  if (afterReset) diff++

  const currentWeapon = weapons[diff % 3]
  console.log(currentWeapon)

  $('#weapon1').text(currentWeapon)
})
