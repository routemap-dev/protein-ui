import Vue from "vue";
import { compute, includeMixins } from "../../util";

import colorable from "../../mixins/colorable";
import sizable from "../../mixins/sizable";
const mixins = [colorable, sizable];

import "./PBtnGroup.scss";

export default Vue.extend({
  name: "PBtnGroup",
  mixins: includeMixins(mixins),
  props: {
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
    const computed = compute.call(this, "p-btn-group", mixins);
    return h(
      "div",
      {
        class: ["p-btn-group", ...computed.classes],
        style: computed.styles,
      },
      this.$slots.default
    );
  },
});
