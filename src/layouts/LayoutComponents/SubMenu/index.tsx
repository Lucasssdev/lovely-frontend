import React from 'react'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'
import * as S from './styles'
import useStore from '../../../zustand/store'
import languages from './../../../config/translation/subMenu.json'
import langs from '../../../utils/lang'
import InputSearch from '../../../components/inputs/InputSearch'
import FilterBox from '../filterBox'
import ResourcesBox from '../ResourcesBox'
import {SubMenuProps, ISubMenu, customItens, defaultItens} from './types'
import useController from './controller'

//Componente que renderiza o submenu
function SubMenu({ config, setState }: SubMenuProps) {
    const controller = useController({config, setState});
    
    return (
        <S.Container showSubMenu={controller.showSubMenu ?? false}>
            <S.WrapperCloseSubMenu className={controller.hiddenMainNav ? 'hiddenMainNav' : 'openMainNav'} onClick={() => setState(false)} />
            <S.Content>
                <S.Header>
                    <S.Course href="https://clieent.com/treinamento" target={'_blank'}>
                        <S.HeaderTexts>
                            <S.TextPrimary>{controller.lang('training')}</S.TextPrimary>
                            <S.Textsecundary>{controller.lang('descriptionTraining')}</S.Textsecundary>
                        </S.HeaderTexts>
                        <S.IconWrapper>
                            <S.Icon icon={light('circle-info')} />
                        </S.IconWrapper>
                    </S.Course>

                    {controller.seeInputSearch() ? <InputSearch value={undefined} id={''} setState={undefined} /> : null}
                </S.Header>
                {Array.isArray(controller.customItens) && controller.customItens.length > 0 ? (
                    <S.Filters>
                        <S.Textsecundary className="textsecundary">
                            <p>{controller.lang('savedFilters')}</p>
                        </S.Textsecundary>
                        {controller.customItens.map((item) => (
                            <FilterBox
                                key={item.id}
                                item={item}
                                onClick={() =>
                                    setState((data: ISubMenu) => ({
                                        ...data,
                                        showSubMenu: false,
                                    }))
                                }
                            />
                        ))}
                    </S.Filters>
                ) : null}
                {Array.isArray(controller.defaultItens) && controller.defaultItens.length > 0 ? (
                    <S.BrowseResources>
                        <S.Textsecundary className="textsecundary">
                            <p>{controller.lang('browseResources')}</p>
                        </S.Textsecundary>
                        {controller.defaultItens.map((item) => (
                            <ResourcesBox
                                key={item.id}
                                icon={item.icon}
                                title={controller.lang(item.label)}
                                route={item.route}
                                order={item.order}
                                onClick={() =>
                                    setState((data: ISubMenu) => ({
                                        ...data,
                                        showSubMenu: false,
                                    }))
                                }
                            />
                        ))}
                    </S.BrowseResources>
                ) : null}
            </S.Content>
        </S.Container>
    )
}
export default SubMenu
