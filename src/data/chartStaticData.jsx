const chartStaticData = {
  yAxis: ['$800', '$600', '$400', '$200', '$0'],

  months: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],

  path: `
    M 40 82
    C 55 80, 65 60, 80 52
    C 95 43, 108 48, 122 60
    C 137 73, 148 88, 163 82
    C 178 76, 187 68, 200 69
    C 214 70, 225 58, 239 68
    C 253 78, 258 101, 274 106
    C 290 111, 301 103, 311 72
    C 322 40, 340 42, 355 39
    C 370 36, 385 38, 400 37
  `,

  highlightedPoint: {
    x: 187,
    y: 76,
  },

  tooltip: {
    x: 158,
    y: 42,
    width: 65,
    height: 25,
    value: '$25,240',
  },

  highlightBar: {
    x: 174,
    y: 107,
    width: 22,
    height: 83,
  },
}

export default chartStaticData