import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    outline = false,
    primary = false,
    small = false,
    disabled = false,
    large = false,
    text = false,
    rounded = false,
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
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on' && typeof props[key] === 'function')) {
                delete props[key];
            }
        });
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
            <span className="title">{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    //định nghĩa kiểu dữ liệu cho to và href là String
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    // định nghĩa kiểu dữ liệu là boolean
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    // Bạn có thể xâu chuỗi bất kỳ thứ nào ở trên với 
    // `isRequired` để đảm bảo cảnh báo
    // được hiển thị nếu chỗ dựa không được cung cấp.
    // Một đối tượng có hình dạng cụ thể
    children: PropTypes.node.isRequired,
    // được định nghĩa là có thể hiển thị : số , chuỗi, phần tử(element)
    // hoặc mảng (array), hoặc đoạn chứa các đoạn này
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    //được định nghĩa là được sử dụng function 
    onClick: PropTypes.func,
};
export default Button;
