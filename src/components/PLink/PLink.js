import Vue from "vue";
import { compute, includeMixins } from "../../util";

import colorable from "../../mixins/colorable";
const mixins = [colorable];

import "./PLink.scss";

export default Vue.extend({
  name: "PLink",
  mixins: includeMixins(mixins),
  props: {
    label: {
      type: String,
      default: null,
    },
    underline: {
      type: [Boolean, String],
      default: false,
      validator: (val) =>
        typeof val === "boolean" || ["hover", "always", "none"].includes(val),
    },
  },
  render(h) {
    const computed = compute.call(this, "p-link", mixins);
    return h(
      "a",
      {
        class: [
          "p-link",
          ...computed.classes,
          {
            "p-link--underline":
              this.underline === true || this.underline === "always",
            "p-link--hover-underline": this.underline === "hover",
          },
        ],
        style: computed.styles,
        attrs: this.$attrs,
      },
      [this.label ?? this.$slots.default]
    );
  },
});
