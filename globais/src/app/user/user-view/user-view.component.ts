import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'glb-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  title = 'Usuário';

  readonly actions: PoPageDynamicDetailActions = {
    back: 'user',
    edit: 'user/edit/:id'    
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', gridColumns: 2, key: true, divider: 'Dados pessoais' },
    { property: 'name', label: 'Nome', gridXlColumns: 4, gridLgColumns: 4 },
    {
      property: 'birthdate',
      type: 'date',
      label: 'Data de aniversário',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'genre',
      tag: true,
      label: 'Gênero',
      gridColumns: 2,
      gridSmColumns: 6,
    },
    { property: 'street', divider: 'Endereço', label: 'Rua' },
    { property: 'city', label: 'Cidade' },
    { property: 'country', label: 'País' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Usuários', link: '/user' },      
      { label: 'Visualização' }
    ]
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params["id"]
        ? `Visualizando ${this.title} ${params["id"]}`
        : 'Visualizando';
    });
  }
}