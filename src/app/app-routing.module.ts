import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pages/pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./pages/image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./pages/text/text.module').then( m => m.TextPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
