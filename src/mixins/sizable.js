const sizeAliases = {
  large: "lg",
  medium: "md",
  small: "sm",
  lg: "lg",
  md: "md",
  sm: "sm",
};

export default {
  compute: function () {
    if (this.size) {
      return {
        modifiers: [sizeAliases[this.size]],
      };
    }
  },
  mixin: {
    props: {
      size: {
        type: String,
        validator: (val) => !!sizeAliases[val],
      },
    },
  },
};
