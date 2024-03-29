import Vue from "vue";
import { compute, includeMixins } from "../../util";

import colorable from "../../mixins/colorable";
import sizable from "../../mixins/sizable";
const mixins = [colorable, sizable];

import "./PBtn.scss";

export default Vue.extend({
  name: "PBtn",
  mixins: includeMixins(mixins),
  props: {
    label: {
      type: String,
      default: null,
    },
    text: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  render(h) {
    const computed = compute.call(this, "p-btn", mixins);
    return h(
      "button",
      {
        class: [
          "p-btn",
          ...computed.classes,
          {
            "p-btn--text": this.text,
            "p-btn--outline": this.outline,
          },
        ],
        style: computed.styles,
      },
      [this.label ?? this.$slots.default]
    );
  },
});
