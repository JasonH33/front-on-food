export type CityPros = {
  id: number,
  name: string,
  slug: string,
  catalogEstimated: number;
}

export type ParamsStaticProps = {
  params: {
    city: string,
  }
}

export type PageDiscoveryProps = {
  city: CityPros
}