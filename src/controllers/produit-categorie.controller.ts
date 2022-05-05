import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Produit,
  Categorie,
} from '../models';
import {ProduitRepository} from '../repositories';

export class ProduitCategorieController {
  constructor(
    @repository(ProduitRepository)
    public produitRepository: ProduitRepository,
  ) { }

  @get('/produits/{id}/categorie', {
    responses: {
      '200': {
        description: 'Categorie belonging to Produit',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categorie)},
          },
        },
      },
    },
  })
  async getCategorie(
    @param.path.number('id') id: typeof Produit.prototype.id,
  ): Promise<Categorie> {
    return this.produitRepository.categorie(id);
  }
}
