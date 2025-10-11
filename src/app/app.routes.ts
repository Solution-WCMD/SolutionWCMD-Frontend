import { Routes } from '@angular/router';
import {HomeContentComponent} from './components/home-page/home-content.component/home-content.component';
import {AssetsGridComponent} from './components/assets-page/assets-grid.component/assets-grid.component';
import {SocialContentComponent} from './components/social-page/social-content.component/social-content.component';
import {CareerContentComponent} from './components/career-page/career-content.component/career-content.component';
import {FundingDialogueComponent} from './components/career-page/funding-dialogue.component/funding-dialogue.component';
import {
  PrivacyPolicyContentComponent
} from './components/privacy-policy-page/privacy-policy-content.component/privacy-policy-content.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeContentComponent
  },
  {
    path: 'assets',
    component: AssetsGridComponent
  },
  {
    path: 'social',
    component: SocialContentComponent
  },
  {
    path: 'career',
    component: CareerContentComponent,
    children: [
      {
        path: 'funding',
        component: FundingDialogueComponent,
        outlet: 'dialog'
      }
    ]
  },
  {
    path: 'privacy',
    component: PrivacyPolicyContentComponent
  }
];
