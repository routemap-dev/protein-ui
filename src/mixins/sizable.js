const sizeAliases = {
    large: 'lg',
    medium: 'md',
    small: 'sm',
    lg: 'lg',
    md: 'md',
    sm: 'sm',
};

export default {
    props: {
        size: {
            type: String,
            validator: val => !!sizeAliases[val],
        },
    },
    computed: {
        __sizeClasses() {
            if (this.size) return {
                [`${this.baseClass ?? this.$options.name}--${this.size}`]: true
            };
            return {};
        },
    },
};