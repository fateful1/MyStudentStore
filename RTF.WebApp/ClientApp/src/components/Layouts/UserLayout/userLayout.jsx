import React from 'react';
import './userLayout.scss';
import logo from '../../../images/main/logo.png'
import { Link } from "react-router-dom";
import { useAuthContext } from '../../../context/AuthContext';
import { useCurrentPageContext } from '../../../context/CurrentPageContext';

export const UserLayout = ({children}) => {
    const profileData = useAuthContext();
    const pageName = useCurrentPageContext().name;
    return (
        <div className='user-layout'>
            <aside className='user-layout__side-menu'>
                <div className='user-layout__side-menu-cont'>
                    <div className='user-layout__logo-cont'>
                        <div className='user-layout__logo'>
                            <img src={logo} width='88' alt='Логотип магазина'/>
                        </div>
                        <span className='user-layout__shop-name'>My<br/>Student Store</span>
                    </div>
                    <div className='user-layout__user'>
                        <div className='user-layout__user-logo'>Д</div>
                        <span className='user-layout__user-name'>{profileData.firstName}<br/>{profileData.lastName}</span>
                    </div>
                    <div className='user-layout__balance'>
                        <div className='user-layout__balance-name'>Баланс</div>
                        <div className='user-layout__balance-count'>7 баллов</div>
                    </div>
                </div>
                <div className='user-layout__links'>
                    <Link to='/profile' className={pageName === 'profile' ? 'user-layout__links-link active' : 'user-layout__links-link'}>Мой профиль</Link>
                    <Link to='/shop' className={pageName === 'shop' ? 'user-layout__links-link active' : 'user-layout__links-link'}>Магазин</Link>
                    <Link to='/calendar' className={pageName === 'calendar' ? 'user-layout__links-link active' : 'user-layout__links-link'}>Календарь мероприятий</Link>
                    <Link to='/orders' className={pageName === 'orders' ? 'user-layout__links-link active' : 'user-layout__links-link'}>Мои заказы</Link>
                    <Link to='/rules' className={pageName === 'rules' ? 'user-layout__links-link active' : 'user-layout__links-link'}>Правила начисления баллов</Link>
                </div>
                <div className='user-layout__exit' onClick={() => profileData.logout()}>Выйти</div>
            </aside>
            <div style={{gridColumn: '2 / 3', minWidth: '-webkit-fill-available'}}>{children}</div>
        </div>
    )
}