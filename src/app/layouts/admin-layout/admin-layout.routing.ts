import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DemandeListComponent } from 'app/demande-list/demande-list.component';
import { DemandecreationComponent } from 'app/demandecreation/demandecreation.component';
import { LoginComponent } from 'app/login/login.component';
import { ListUsersComponent } from 'app/list-users/list-users.component';
import { TransactionComponent } from 'app/transaction/transaction.component';
import { CreateTransactionComponent } from 'app/create-transaction/create-transaction.component';
import { CreationForumComponent } from 'app/creation-forum/creation-forum.component';
import { ListForumsComponent } from 'app/list-forums/list-forums.component';
import { ListMessagesComponent } from 'app/list-messages/list-messages.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'demande-list',        component: DemandeListComponent },
    { path: 'demande-creation',        component: DemandecreationComponent },
    { path: 'Listusers',        component: ListUsersComponent },
    { path: 'transaction',        component: TransactionComponent },
    { path: 'create-transaction',        component:  CreateTransactionComponent },
    { path: 'create-forum',        component:  CreationForumComponent },
    { path: 'listForums',        component:  ListForumsComponent },
    { path: 'listMessages',        component:  ListMessagesComponent }


  


  

];
