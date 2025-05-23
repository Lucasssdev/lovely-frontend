import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import Avatar from 'react-avatar'
import { PreferenciesProps, ILanguageOption, IAvatar } from './types'
import useController from './controller'
import { ITEM_NUMBER_PAGINATION } from 'pageControllers/profile/pagesItemNumber'
import { useRouter } from 'next/router'
const Preferencies = ({ hiddenMainNav, setShowPreferencies }: PreferenciesProps) => {
    const controller = useController()
    const router = useRouter()

    return (
        <S.Container className={hiddenMainNav ? 'hidden' : 'open'}>
            <S.Content>
                <S.Person>
                    <S.Photo>
                        {!controller.avatar.url || controller.avatar.url == '' ? (
                            <Avatar name={controller.user.name.split(' ')[0]} size="60" textSizeRatio={2} round />
                        ) : (
                            <Image alt="" src={controller.avatar.url} width="80" height="80" crossOrigin="anonymous" />
                        )}
                        <div>
                            <label htmlFor="selectPhoto" title={controller.lang('newAvatar')}>
                                <input id="selectPhoto" type="file" onChange={controller.handleImageChange} />
                                <S.Icon
                                    icon={
                                        !controller.avatar.url || controller.avatar.url == '' ? light('camera') : light('pencil')
                                    }
                                />
                            </label>
                        </div>
                    </S.Photo>
                    <S.Text>{controller.handleNameOfUser(controller.user.name)}</S.Text>
                    <S.UserName>
                        @
                        {
                            // Trunca a string caso for maior que 20 caracters
                            controller.user.username.length > 20
                                ? controller.user.username.slice(0, 20) + '...'
                                : controller.user.username
                        }
                    </S.UserName>
                </S.Person>
                <S.Options>
                    <S.SimpleOption
                        onClick={() => {
                            setShowPreferencies(false)
                            //const path = router.pathname.split('/')
                            //if (path.includes('profile')) return
                            //router.push(`profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.PROFILE_DATA}`)
                            window.location.href = `/profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.PROFILE_DATA}`
                        }}
                    >
                        <S.IconWrapper>
                            <S.Icon icon={light('user')} />
                        </S.IconWrapper>
                        <S.Text>{controller.lang('option1')}</S.Text>
                    </S.SimpleOption>
                    <S.SimpleOption
                        onClick={() => {
                            setShowPreferencies(false)
                            //const path = router.pathname.split('/')
                            //if (path.includes('profile')) return
                            //router.push(`profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.PASSWORD}`)
                            window.location.href = `/profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.PASSWORD}`
                        }}
                    >
                        <S.IconWrapper>
                            <S.Icon icon={light('shield-check')} />
                        </S.IconWrapper>
                        <S.Text>{controller.lang('option2')}</S.Text>
                    </S.SimpleOption>
                    <S.SimpleOption
                        onClick={() => {
                            setShowPreferencies(false)
                            //const path = router.pathname.split('/')
                            //if (path.includes('profile')) return
                            //router.push(`profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.ACCOUNTS}`)
                            window.location.href = `/profile/${controller.user.id}?item=${ITEM_NUMBER_PAGINATION.ACCOUNTS}`
                        }}
                    >
                        <S.IconWrapper>
                            <S.Icon icon={light('buildings')} />
                        </S.IconWrapper>
                        <S.Text>{controller.lang('option3')}</S.Text>
                    </S.SimpleOption>
                    <S.SimpleOption>
                        <S.IconWrapper>
                            <S.Icon icon={light('square-plus')} />
                        </S.IconWrapper>
                        <S.Text>{controller.lang('option4')}</S.Text>
                    </S.SimpleOption>
                </S.Options>
                <S.LanguageAndTheme>
                    <S.SimpleOption>
                        <S.IconWrapper>
                            <S.Icon icon={controller.toggleValue ? light('brightness') : light('moon')} />
                        </S.IconWrapper>
                        <S.Theme>
                            {controller.lang('themeOption')}
                            <label htmlFor="toggleTheme">
                                <input
                                    id="toggleTheme"
                                    type="checkbox"
                                    onClick={() => {
                                        controller.setToggleValue(!controller.toggleValue)
                                    }}
                                    checked={controller.toggleValue}
                                />
                                <span id="toggleTheme"></span>
                            </label>
                        </S.Theme>
                    </S.SimpleOption>
                    <S.SimpleOption>
                        <S.IconWrapper>
                            <S.Flag index={controller.selectFlag()}></S.Flag>
                        </S.IconWrapper>
                        <S.Language>
                            {controller.lang('languageOption')}
                            <S.Select onClick={() => controller.setShowLanguageOptions(!controller.showLanguageOptions)}>
                                {Object.keys(controller.languagesOptions)
                                    .filter((lang) => controller.languagesOptions[lang].selected === true)
                                    .map((lang) => controller.languagesOptions[lang].label)}
                                <S.Icon icon={light('chevron-down')} />
                                {controller.showLanguageOptions ? (
                                    <S.LanguagesOptions>
                                        {Object.values(controller.languagesOptions).map((option, index) => (
                                            <S.OptionValue
                                                key={index}
                                                onClick={() =>
                                                    controller.handleLanguageSelect(
                                                        Object.keys(controller.languagesOptions)[index]
                                                    )
                                                }
                                            >
                                                {option.label}
                                            </S.OptionValue>
                                        ))}
                                    </S.LanguagesOptions>
                                ) : null}
                            </S.Select>
                        </S.Language>
                    </S.SimpleOption>
                </S.LanguageAndTheme>
                <S.Logout onClick={() => controller.setConfirmLogout(!controller.confirmLogout)}>
                    <S.IconWrapper>
                        <S.Icon icon={light('door-open')} />
                    </S.IconWrapper>

                    {!controller.confirmLogout ? (
                        <S.Text>{controller.lang('logout')} </S.Text>
                    ) : (
                        <S.Text>
                            {controller.lang('confirm')}😭 <span onClick={controller.logout}> {controller.lang('yes')}</span>
                            <span onClick={() => controller.setConfirmLogout(false)}> {controller.lang('no')}</span>
                        </S.Text>
                    )}
                </S.Logout>
            </S.Content>
        </S.Container>
    )
}
export default Preferencies
