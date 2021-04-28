const compassDirections = [
  'Please select an option',
  'north_east',
  'north',
  'north_west',
  'west',
  'south_west',
  'south',
  'south_east',
  'east',
  'center',
];
const options = compassDirections.map((compassDirection, idx) => {
  if (idx === 0) {
    return `<option value="">${compassDirection}</option>`;
  }
  return `<option value="${compassDirection}">${compassDirection}</option>`;
});

const checkCoords = (x, y) => {
  if (
    typeof x === 'number' &&
    typeof y === 'number' &&
    x !== NaN &&
    y !== NaN &&
    x !== Infinity &&
    y !== Infinity &&
    x <= 600 &&
    x >= -600 &&
    y <= 600 &&
    y >= -600
  ) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('compass-select').innerHTML = options;

const result = document.getElementById('result');

let existingGravity;

document
  .getElementById('compass-select')
  .addEventListener('change', (event) => {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    if (event.target.value) {
      if (checkCoords(x, y)) {
        const url = `https://res.cloudinary.com/tamas-demo/image/upload/l_text:roboto_30:⚫,g_${event.target.value},x_${x},y_${y},co_rgb:f00/bg.jpg`;
        result.src = url;
        existingGravity = event.target.value;
      } else {
        const url = `https://res.cloudinary.com/tamas-demo/image/upload/l_text:roboto_30:⚫,g_${event.target.value},x_0,y_0,co_rgb:f00/bg.jpg`;
      }
    } else {
      result.innerHTML = '';
    }
  });

document.getElementById('apply').addEventListener('click', () => {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  if (checkCoords(x, y)) {
    if (existingGravity) {
      const url = `https://res.cloudinary.com/tamas-demo/image/upload/w_600/l_text:roboto_30:⚫,g_${existingGravity},x_${x},y_${y},co_rgb:f00/bg.jpg`;
      console.log('url', url);
      result.src = url;
    } else {
      result.innerHTML = '';
    }
  }
});
