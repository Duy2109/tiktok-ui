import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };
        return (
            <img
                className={classNames(className, styles.wrapper)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
