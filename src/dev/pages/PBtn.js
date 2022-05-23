import Vue from 'vue';

import { PBtn } from '../../components';

export default Vue.extend({
    name: 'page-p-btn',
    render(h) {
        return h('div', {
            class: 'container'
        }, [
            h(PBtn)
        ]);
    }
});