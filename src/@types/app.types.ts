export type Coordinates = {
  lat: number,
  lng: number
}

export type Bounds = {
  ne: {
    lat: number,
    lng: number
  },
  sw: {
    lat: number,
    lng: number
  }
}

export type PlacesInfo = {
  latitude?: string,
  longitude?: string,
  photo?: {
    images?:
    {
      large?:
      { url?: string },
      small?:
      { url?: string },
    }
  },
  name?: string,
  ranking: string,
  rating: string,
  cuisine?: {
    name?: string
  }[],
  address?: string,
  price_level?: string,
  phone?: string,
  web_url?: string,
  website?: string,
  num_reviews?: string
}[]

export type PlaceInfo = {
  latitude?: string,
  longitude?: string,
  photo?: {
    images?:
    {
      large?:
      { url?: string },
      small?:
      { url?: string },
    }
  },
  name?: string,
  ranking: string,
  rating: string,
  cuisine?: {
    name?: string
  }[],
  address?: string,
  price_level?: string,
  phone?: string,
  web_url?: string,
  website?: string,
  num_reviews?: string
}
