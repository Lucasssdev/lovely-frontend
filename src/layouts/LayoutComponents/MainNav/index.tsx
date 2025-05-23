import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import menuItens from '../../../config/menuItens'
import * as S from './styles'
import LogoClieent from '../../../components/logos/LogoClieent'
import Image from 'next/image'
import Preferencies from '../Preferencies'
import SubMenu from '../SubMenu'
import languages from './translation.json'
import langs from '../../../utils/lang'
import useStore from '../../../zustand/store'
import Avatar from 'react-avatar'
import type { Store, Actions } from '../../../../src/zustand/store'
import { MainNavProps, ISubMenu } from './types'
import useController from './controller'

//Menu lateral do sistema
const MainNav = ({ hiddenMenu, handleToggleHiddenMainNav }: MainNavProps) => {
    const controller = useController()

    return (
        <S.Container className={hiddenMenu ? 'hidden' : 'open'}>
            <SubMenu config={controller.subMenu} setState={controller.setSubMenu} />
            <S.SimpleOption onClick={(e) => handleToggleHiddenMainNav(e)}>
                <S.IconWrapper>
                    <S.Icon icon={light('bars')} />
                </S.IconWrapper>
                <S.Text className="itemMenu">
                    <p>{controller.lang('collapseMenu')}</p>
                </S.Text>
            </S.SimpleOption>
            <S.PageIndicator href="/dashboard" onClick={() => controller.route.push('/dashboard')}>
                <LogoClieent w={19} h={18} type={'symbol'} />
                <S.Text className="itemMenu">
                    <p onClick={() => controller.route.push('/dashboard')}>
                        <strong>Dash</strong>Board
                    </p>
                </S.Text>
            </S.PageIndicator>
            <S.PersonalField>
                <S.Profile>
                    <S.WrapperUserProfile onClick={() => controller.menuControl('pref', null)}>
                        <div className="avatar">
                            {!controller.user.avatarUrl || controller.user.avatarUrl == '' ? (
                                <Avatar name={controller.user.name.split(' ')[0]} size="32" textSizeRatio={2} round />
                            ) : (
                                <Image
                                    src={
                                        controller.user.avatarEditedUrl && controller.user.avatarEditedUrl
                                            ? controller.user.avatarEditedUrl
                                            : controller.user.avatarUrl
                                    }
                                    alt="Select image"
                                    width="32"
                                    height="32"
                                    crossOrigin="anonymous"
                                />
                            )}
                        </div>

                        <S.Person>
                            <S.Text className="itemMenu">
                                <p>{controller.user.name.split(' ')[0] ?? controller.user.name}</p>
                            </S.Text>
                            <S.Preferences className="itemMenu">
                                <p>
                                    {controller.lang('preferencies')} <S.Icon icon={light('arrow-right')} />
                                </p>
                            </S.Preferences>
                        </S.Person>
                    </S.WrapperUserProfile>
                    {controller.showPreferencies ? (
                        <div>
                            <S.WrapperCloseContainer
                                className={hiddenMenu ? 'hiddenMainNav' : 'openMainNav'}
                                onClick={() => controller.setShowPreferencies(false)}
                            />
                            <Preferencies hiddenMainNav={hiddenMenu} setShowPreferencies={controller.setShowPreferencies} />
                        </div>
                    ) : null}
                </S.Profile>
                <S.SimpleOption>
                    <S.IconWrapper>
                        <S.Icon icon={light('bell')} />
                    </S.IconWrapper>

                    <S.Text className="itemMenu">
                        <p>
                            {controller.lang('notifications')} <S.Amount>+88</S.Amount>
                        </p>
                    </S.Text>
                </S.SimpleOption>
            </S.PersonalField>
            <S.MagicCreationButton hiddenMenu={hiddenMenu}>
                <S.IconWrapper>
                    <S.Icon icon={light('plus')} />
                </S.IconWrapper>
                <S.Text className="itemMenu">
                    <p>{controller.lang('magicButton')}</p>
                </S.Text>
            </S.MagicCreationButton>
            <S.MoreOptions>
                {menuItens.map((item, index) => {
                    return (
                        <S.SimpleOption
                            href={item.route}
                            key={item.id}
                            onClick={() => {
                                item.subMenu
                                    ? controller.menuControl('sub', item.subMenu, index)
                                    : item.route
                                    ? controller.route.push(item.route)
                                    : null
                                controller.setShowPreferencies(false)
                            }}
                        >
                            <S.IconWrapper>
                                <S.Icon icon={item.icon} />
                            </S.IconWrapper>
                            <S.Text className="itemMenu">
                                <p>{controller.lang(item.label)}</p>
                            </S.Text>
                        </S.SimpleOption>
                    )
                })}
            </S.MoreOptions>
            <S.SimpleOption
                href="/account-settings"
                onClick={() => {
                    controller.route.push('/account-settings')
                    controller.setShowPreferencies(false)
                }}
            >
                <S.IconWrapper>
                    <S.Icon icon={light('building')} />
                </S.IconWrapper>
                <S.Text className="itemMenu">
                    <p>{controller.lang('myCompany')}</p>
                </S.Text>
            </S.SimpleOption>
        </S.Container>
    )
}
export default MainNav
