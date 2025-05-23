import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'

interface item {
    id: string
    label: string
    route?: string
    icon: IconDefinition
    order: number
    canAccess: boolean
    subMenu?: {
        id: string
        customItens: customItens[]
        defaultItens: defaultItens[]
    }
}
interface customItens {
    id: string
    icon: IconDefinition
    label: string
    url: string
    order: number
}
interface defaultItens {
    id: string
    icon: IconDefinition
    label: string
    route: string
    order: number
}

//Array de objetos que são usados no menu lateral do sitema (MainNav)
const menuItens: item[] = [
    {
        id: 'main-nav-funnel',
        label: 'funnel',
        route: '/flows',
        icon: light('chart-pyramid'),
        order: 1,
        canAccess: true,
    },
    {
        id: 'main-nav-schedule',
        label: 'schedule',
        icon: light('calendar-days'),
        order: 2,
        canAccess: true,
        subMenu: {
            id: 'sub-menu-schedule',
            customItens: [
                {
                    id: 'custom-items-schedule-exemple1',
                    icon: light('magnifying-glass'),
                    label: 'Meus clientes Inadimplentes',
                    url: '',
                    order: 0,
                },
                {
                    id: 'custom-items-schedule-exemple2',
                    icon: light('magnifying-glass'),
                    label: 'Clientes de Passos/MG',
                    url: '',
                    order: 1,
                },
            ],
            defaultItens: [
                {
                    id: 'default-items-schedule-to-do-list',
                    icon: light('list'),
                    label: 'toDoList',
                    route: '', // '/to-do-list',
                    order: 0,
                },
                {
                    id: 'default-schedule-items-scheduling',
                    icon: light('calendar-day'),
                    label: 'scheduling',
                    route: '', //'/scheduling',
                    order: 1,
                },
                {
                    id: 'default-items-schedule-commitments-types',
                    icon: light('calendar-clock'),
                    label: 'commitmentsTypes',
                    route: '', //'/commitments-types',
                    order: 2,
                },
            ],
        },
    },
    {
        id: 'main-nav-contacts',
        label: 'contacts',
        icon: light('address-book'),
        route: '/stakeholder',
        order: 0,
        canAccess: true,
    },
    {
        id: 'main-nav-pages-forms',
        label: 'pagesForms',
        icon: light('memo'),
        order: 4,
        canAccess: true,
        subMenu: {
            id: 'sub-menu-contacts',
            customItens: [
                {
                    id: 'custom-items-pages-forms-exemple1',
                    icon: light('magnifying-glass'),
                    label: 'Meus clientes Inadimplentes',
                    url: '',
                    order: 0,
                },
                {
                    id: 'custom-items-pages-forms-exemple2',
                    icon: light('magnifying-glass'),
                    label: 'Clientes de Passos/MG',
                    url: '',
                    order: 1,
                },
            ],
            defaultItens: [
                {
                    id: 'default-items-pages-forms-forms',
                    icon: light('pen-field'),
                    label: 'forms',
                    route: '/forms',
                    order: 0,
                },
                {
                    id: 'default-items-pages-forms-pages',
                    icon: light('table-layout'),
                    label: 'pages',
                    route: '', //'/pages',
                    order: 1,
                },
            ],
        },
    },
    {
        id: 'main-nav-proposal',
        label: 'proposal',
        icon: light('file-lines'),
        order: 3,
        canAccess: true,
        subMenu: {
            id: 'sub-menu-proposal',
            customItens: [],
            defaultItens: [
                {
                    id: 'default-items-proposal-requests',
                    icon: light('messages-dollar'),
                    label: 'requests',
                    route: '', //'/requests',
                    order: 0,
                },

                {
                    id: 'default-items-proposal-proposals',
                    icon: light('files'),
                    label: 'proposals',
                    route: '', //'/proposals',
                    order: 1,
                },
                {
                    id: 'default-items-proposal-services',
                    icon: light('bell-concierge'),
                    label: 'services',
                    route: '', //'/services',
                    order: 2,
                },
                {
                    id: 'default-items-proposal-template',
                    icon: light('boxes-stacked'),
                    label: 'proposalTemplate',
                    route: '', //'/proposal-template',
                    order: 3,
                },
            ],
        },
    },
    {
        id: 'main-nav-signatures',
        label: 'signature',
        icon: light('file-signature'),
        order: 3,
        canAccess: true,
        subMenu: {
            id: 'sub-menu-signature',
            customItens: [],
            defaultItens: [
                {
                    id: 'default-items-signatures-collect-signature',
                    icon: light('signature'),
                    label: 'collectSignature',
                    route: '', //'/collect-signature',
                    order: 0,
                },

                {
                    id: 'default-items-signatures-document-types',
                    icon: light('folder-open'),
                    label: 'documentTypes',
                    route: '', //'/document-types',
                    order: 1,
                },
                {
                    id: 'default-items-signatures-document-management',
                    icon: light('lightbulb-on'),
                    label: 'documentManagement',
                    route: '', //'/document-management',
                    order: 2,
                },
                {
                    id: 'default-items-signatures-document-templates',
                    icon: light('boxes-stacked'),
                    label: 'documentTemplates',
                    route: '', //'/document-templates',
                    order: 3,
                },
            ],
        },
    },
    {
        id: 'main-nav-more',
        label: 'more',
        icon: light('square-plus'),
        order: 5,
        canAccess: true,
        subMenu: {
            id: 'sub-menu-more',
            customItens: [],
            defaultItens: [
                {
                    id: 'default-items-more-tags',
                    icon: light('tags'),
                    label: 'tags',
                    route: '/tags',
                    order: 0,
                },
                {
                    id: 'default-items-more-custom-fields',
                    icon: light('input-text'),
                    label: 'customFields',
                    route: '/custom-fields',
                    order: 1,
                },
                {
                    id: 'default-items-more-checklist-templates',
                    icon: light('clipboard-list-check'),
                    label: 'checklistTemplates',
                    route: '', //'/checklist-templates',
                    order: 2,
                },
                {
                    id: 'default-items-more-campaigns',
                    icon: light('paper-plane'),
                    label: 'campaigns',
                    route: '', //'/campaigns',
                    order: 3,
                },
                {
                    id: 'default-items-more-goals',
                    icon: light('bullseye-arrow'),
                    label: 'goals',
                    route: '', //'/goals',
                    order: 4,
                },
                {
                    id: 'default-items-more-integration',
                    icon: light('circle-nodes'),
                    label: 'integration',
                    route: '', //'/integration',
                    order: 5,
                },
            ],
        },
    },
]
export default menuItens
