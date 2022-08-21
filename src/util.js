function compute(name, mixins = []) {
  let classes = [],
    modifiers = [],
    styles = {};

  for (const mixin of mixins) {
    if (mixin.compute) {
      const res = mixin.compute.call(this);
      if (res && res.classes) classes.push(...res.classes);
      if (res && res.modifiers) modifiers.push(...res.modifiers);
      if (res && res.styles) {
        styles = {
          ...styles,
          ...res.styles,
        };
      }
    }
  }

  return {
    classes: [
      ...classes,
      ...modifiers.map((modifier) => name + "--" + modifier),
    ],
    styles,
  };
}

function includeMixins(mixins) {
  return mixins.map((m) => m.mixin);
}

function mergeValues(...args) {
  const values = args.filter((arg) => arg !== null);
  if (values.length <= 1) {
    return values;
  }
  const result = [];
  for (const arg of args) {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      // string or objects can be simply added to the array
      result.push(arg);
    }
  }
  return result;
}

export { compute, includeMixins, mergeValues };
