import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)

function Menu({children, items =[]}) {

    const renderItems= ()=>{
        return items.map((item,index)=>(
            <MenuItem key={index} data={item}/>
        ))  
    }

    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0,700]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}>
            <span>
                {children}
            </span>
        </Tippy>
    );
}

export default Menu;