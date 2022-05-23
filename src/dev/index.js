import Vue from 'vue';
import { PBtn } from '../components';

export default Vue.extend({
    name: 'index',
    render(h) {
        return h(PBtn)
    }
});