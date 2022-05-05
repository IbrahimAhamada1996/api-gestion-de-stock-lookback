import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Categorie} from './categorie.model';

@model()
export class Produit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'string',
  })
  description?: string;

  @belongsTo(() => Categorie)
  categorieId: number;

  constructor(data?: Partial<Produit>) {
    super(data);
  }
}

export interface ProduitRelations {
  // describe navigational properties here
}

export type ProduitWithRelations = Produit & ProduitRelations;
