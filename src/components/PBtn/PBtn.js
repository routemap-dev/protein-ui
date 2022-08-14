import Vue from "vue";
import { compute, includeMixins } from "../../util";

import colorable from "../../mixins/colorable";
import sizable from "../../mixins/sizable";
const mixins = [colorable, sizable];

import "./PBtn.scss";

export default Vue.extend({
  name: "p-btn",
  mixins: includeMixins(mixins),
  props: {
    label: {
      type: String,
    },
  },
  render(h) {
    const computed = compute.call(this, mixins);
    return h(
      "button",
      {
        class: ["p-btn", ...computed.classes],
        style: computed.styles,
      },
      [this.label ?? this.$slots.default]
    );
  },
});
