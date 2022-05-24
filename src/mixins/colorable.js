const colorStrToCss = (str) => {
    if (str.match(/^#([0-9A-F]{3}){1,2}$/i)) {
        return str;
    }
    return `var(--color-${str})`;
};

const parseColorStr = (str, key) => {
    if (!str) return {};
    return {
        [key]: colorStrToCss(str),
    };
};

export default {
    props: {
        color: {
            type: String,
        },
        textColor: {
            type: String,
        },
    },
    computed: {
        __colorStyles() {
            return {
                ...parseColorStr(this.color, 'background'),
                // ...parseColorStr(this.color, 'border-color'),
                ...parseColorStr(this.textColor, 'color'),
            };
        },
    },
};