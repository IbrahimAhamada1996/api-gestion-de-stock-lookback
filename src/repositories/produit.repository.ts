import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Produit, ProduitRelations, Categorie} from '../models';
import {CategorieRepository} from './categorie.repository';

export class ProduitRepository extends DefaultCrudRepository<
  Produit,
  typeof Produit.prototype.id,
  ProduitRelations
> {

  public readonly categorie: BelongsToAccessor<Categorie, typeof Produit.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CategorieRepository') protected categorieRepositoryGetter: Getter<CategorieRepository>,
  ) {
    super(Produit, dataSource);
    this.categorie = this.createBelongsToAccessorFor('categorie', categorieRepositoryGetter,);
    this.registerInclusionResolver('categorie', this.categorie.inclusionResolver);
  }
}
