/* global $, moment */
const weapons = ['Blasphemer (Shotgun)', 'Apostate (Sniper)', 'Heretic (Rocket Launcher)']
$(document).ready(() => {
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0')
  const start = moment.tz('America/Los_Angeles')
    .year(2019).month(9).date(29).hour(10).minute(0).second(0)
  const today = moment.tz('America/Los_Angeles')
  const todayReset = moment.tz('America/Los_Angeles').hour(10).minute(0).second(0)
  const reset1 = todayReset.clone()
  const reset2 = todayReset.clone()
  reset1.add(1, 'day')
  reset2.add(2, 'day')

  let diff = moment.tz('America/Los_Angeles').diff(start, 'days')
  const afterReset = today.isAfter(todayReset)
  console.log(afterReset)
  if (!afterReset) diff += -1

  const currentWeapon = weapons[diff % 3]
  console.log(currentWeapon)

  $('#weapon1').text(currentWeapon)

  weapons.splice(diff % 3, 1)

  $('#timer2').text(today.to(reset1))
  $('#weapon2').text(weapons[diff % 3])
  weapons.splice(diff % 3, 1)
  $('#timer3').text(today.to(reset2))
  $('#weapon3').text(weapons[0])
})
