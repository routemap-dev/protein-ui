const presetColors = ["primary", "secondary", "success", "warning", "danger"];

const colorStrToCss = (str, modifier = "color") => {
  if (!str) return null;
  if (str.match(/^#([0-9A-F]{3}){1,2}$/i)) return str;
  return `var(--${modifier}-${str})`;
};

export { presetColors };

export default {
  compute: function () {
    if (this.color) {
      if (presetColors.includes(this.color)) {
        return {
          modifiers: [this.color],
        };
      } else {
        return {
          styles: {
            backgroundColor: colorStrToCss(this.color),
          },
        };
      }
    }
  },
  mixin: {
    props: {
      color: {
        type: String,
        default: null,
      },
    },
  },
};
