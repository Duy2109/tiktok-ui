import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    outline = false,
    primary = false,
    small = false,
    disabled=false,
    large=false,
    text=false,
    rounded=false,
    children,
    className,
    onClick,
    leftIcon,
    rightIcon,
    ...passprops
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passprops,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
// remove event listeners when btn is disabled 
    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith("on" && typeof props[key] === "function")){
                delete props[key];
            }
        })
    }
    const classes = cx('wrapper', {
        [className]: className, 
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className='title'>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
