"use strict";

/* global $, moment, ReactDOM */
$(document).ready(function () {
  var weapons = [{
    light: 'https://www.light.gg/db/items/2782847179',
    tracker: 'https://destinytracker.com/destiny-2/db/items/2782847179-blasphemer',
    name: 'Blasphemer (Shotgun)',
    img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/2782847179.jpg'
  }, {
    light: 'https://www.light.gg/db/items/2164448701',
    tracker: 'https://destinytracker.com/destiny-2/db/items/2164448701-apostate',
    name: 'Apostate (Sniper)',
    img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/2164448701.jpg'
  }, {
    light: 'https://www.light.gg/db/items/3067821200',
    tracker: 'https://destinytracker.com/destiny-2/db/items/3067821200-heretic',
    name: 'Heretic (Rocket Launcher)',
    img: 'https://cdn.thetrackernetwork.com/destiny/common/destiny2_content/screenshots/3067821200.jpg'
  }];
  var data = [];
  moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
  var start = moment.tz('America/Los_Angeles').year(2019).month(9).date(29).hour(10).minute(0).second(0);
  var today = moment.tz('America/Los_Angeles');
  var todayReset = moment.tz('America/Los_Angeles').hour(10).minute(0).second(0);
  var reset1 = todayReset.clone();
  var reset2 = todayReset.clone();
  var afterReset = today.isAfter(todayReset) ? 0 : 1;
  reset1 = moment.duration(reset1.add(1 - afterReset, 'day').diff(today));
  reset2 = moment.duration(reset2.add(2 - afterReset, 'day').diff(today));
  var diff = moment.tz('America/Los_Angeles').diff(start, 'days');
  var currentWeapon = weapons[diff % 3];
  console.log(currentWeapon);
  data.push({
    light: currentWeapon.light,
    tracker: currentWeapon,
    img: currentWeapon.img,
    title: currentWeapon.name,
    body: 'Currently dropping'
  });
  console.log(diff);
  console.log(weapons);
  weapons.splice(diff % 3, 1);
  if (!weapons[diff % 3]) diff += -2;
  console.log(weapons);
  data.push({
    light: weapons[diff % 3].light,
    tracker: weapons[diff % 3].tracker,
    img: weapons[diff % 3].img,
    title: weapons[diff % 3].name,
    body: "in ".concat(reset1.days(), " days, ").concat(reset1.hours(), " hours  and ").concat(reset1.minutes(), " minutes")
  });
  weapons.splice(diff % 3, 1);
  console.log(weapons);
  data.push({
    light: weapons[0].light,
    tracker: weapons[0].tracker,
    img: weapons[0].img,
    title: weapons[0].name,
    body: "in ".concat(reset2.days(), " days, ").concat(reset2.hours(), " hours  and ").concat(reset2.minutes(), " minutes")
  });
  ReactDOM.render(cardBody(data), document.getElementById('body'));
});

function cardBody(data) {
  return React.createElement("div", {
    className: "card-group"
  }, data.map(function (card, index) {
    return React.createElement("div", {
      className: "card",
      key: card.title
    }, React.createElement("img", {
      src: card.img,
      className: "card-img-top",
      alt: "..."
    }), React.createElement("div", {
      className: "card-body"
    }, React.createElement("h5", {
      className: "card-title"
    }, card.title), React.createElement("p", {
      className: "card-text"
    }, card.body), React.createElement("a", {
      href: card.light,
      className: "card-link"
    }, "Light.GG"), React.createElement("a", {
      href: card.tracker,
      className: "card-link"
    }, "Destiny Tracker")));
  }));
}