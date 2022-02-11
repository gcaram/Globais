import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'glb-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  title = 'Novo Usuário';
  
public readonly actions: PoPageDynamicEditActions = {
  cancel: 'user',
  save: 'user',
};

public readonly breadcrumb: PoBreadcrumb = {
  items: [
    { label: 'Usuários', link: '/user' },       
    { label: 'Novo' }
  ]
};

public readonly fields: Array<PoPageDynamicEditField> = [
  { property: 'id', key: true, visible: false },
  { label: 'Descricao', property: 'Descricao' },
  { label: 'Mês Refer&encia', property: 'Referencia', type: 'date' },
  { label: 'Arquivo', property: 'Arquivo', type: 'date',divider: 'Arquivos' }
];

constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit() {
  this.activatedRoute.params.subscribe((params) => {
    this.title = params['id']? 'Inclusão de balancete' : this.title;
  });
}
}