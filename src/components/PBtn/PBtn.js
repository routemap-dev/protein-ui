import Vue from 'vue';
import colorable from '../../mixins/colorable';
import sizable from '../../mixins/sizable';

import './PBtn.scss';

export default Vue.extend({
    name: 'p-btn',
    mixins: [colorable, sizable],
    props: {
        label: {
            type: String
        }
    },
    render(h) {
        return h('button', {
            class: {
                'p-btn': true,
                ...this.__sizeClasses,
            },
            style: {
                ...this.__colorStyles,
            },
        }, [
            this.label ?? this.$slots.default
        ]);
    },
});