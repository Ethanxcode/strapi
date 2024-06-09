import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderMenu extends Schema.Component {
  collectionName: 'components_header_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    icon: Attribute.Text &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

export interface HeaderNavigation extends Schema.Component {
  collectionName: 'components_header_navigations';
  info: {
    displayName: 'navigation';
    description: '';
  };
  attributes: {
    menus: Attribute.Component<'header.menu', true> & Attribute.Required;
    textColor: Attribute.String;
    backgroundColor: Attribute.String;
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.menu': HeaderMenu;
      'header.navigation': HeaderNavigation;
    }
  }
}
