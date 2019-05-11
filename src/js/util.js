const directions = {
  x: ['left', 'center', 'right'],
  y: ['top', 'bottom'],
};
const floatRegexp = '[-+]?[0-9]*.?[0-9]+';

const types = [
  {
    name: 'px',
    regexp: new RegExp(`^${floatRegexp}px$`),
  },
  {
    name: '%',
    regexp: new RegExp(`^${floatRegexp}%$`),
  },
  /**
   * Fallback optopn
   * If no suffix specified, assigning "px"
   */
  {
    name: 'px',
    regexp: new RegExp(`^${floatRegexp}$`),
  },
];

const getType = (value) => {
  if (value === 'auto') {
    return {
      type: value,
      value: 0,
    };
  }

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (type.regexp.test(value)) {
      return {
        type: type.name,
        value: parseFloat(value),
      };
    }
  }

  return {
    type: '',
    value,
  };
};
const split = (value) => {
  if (typeof value !== 'string') {
    return [];
  }

  return value.split(/\s+/gi).filter(v => v);
};

export const listToDirection = (value) => {
  if (typeof value === 'string') {
    value = split(value);
  }

  let x = null;
  let y = null;

  value.forEach((v) => {
    if (directions.y.includes(v)) {
      y = v;
    }
    if (directions.x.includes(v)) {
      x = v;
    }
  });

  return { x, y };
};

export const parseNumericValue = (value) => {
  switch (typeof value) {
    case 'number':
      return { type: 'px', value };
    case 'string':
      return getType(value);
    default:
      return { type: '', value };
  }
};
