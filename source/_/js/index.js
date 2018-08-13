var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'thing.json'
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('bm2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})