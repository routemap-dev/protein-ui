import Vue from 'vue';
import colorable from '../../mixins/colorable';

import './PLink.scss';

export default Vue.extend({
    name: 'p-link',
    mixins: [colorable],
    props: {
        label: {
            type: String,
        },
        underline: {
            type: [Boolean, String],
            default: false,
            validator: (val) => (typeof val === 'boolean' || ['hover', 'always', 'none'].includes(val)),
        }
    },
    render(h) {
        return h('a', {
            class: {
                'p-link': true,
                'p-link--underline': this.underline === true || this.underline === 'always',
                'p-link--hover-underline': this.underline === 'hover',
            },
            style: {
                ...this.__colorStyles,
            },
            attrs: this.$attrs,
        }, [
            this.label ?? this.$slots.default,
        ]);
    },
});