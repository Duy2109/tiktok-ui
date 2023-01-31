import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    // xử lí nút back ngôn ngữ
    const handleOnBack=() => {
        setHistory((prev) =>
            prev.slice(0, prev.length - 1),
        );
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={handleOnBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    // xử lí xét lại trang đầu tiên 
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            //cắt và khi di chuyển vào menu cấp 2
            // khi đưa chuột ra khỏi vùng menu nó sẽ ẩn
            // và khi đưa cuột vào hiện nó sẽ hiển thị trang đầu tiên của menu
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
