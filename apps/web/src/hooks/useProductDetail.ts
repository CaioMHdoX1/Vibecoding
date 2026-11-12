import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export interface ProductImage {
  url: string
  alt: string
  position: number
}

export interface ProductVariant {
  id: string
  size: string
  pot: string
  price: number
  stockQuantity: number
}

export interface Review {
  id: string
  userId: string
  rating: number
  comment: string
  createdAt: string
}

export interface ProductDetail {
  id: string
  name: string
  slug: string
  description: string
  species: string
  estimatedAge: string
  style: string
  careLevel: string
  sunExposure: string
  priceBase: number
  images: ProductImage[]
  variants: ProductVariant[]
  careGuide: string
  reviews: Review[]
}

/**
 * Hook to fetch product detail by slug.
 * Returns {data, loading, error}.
 */
export function useProductDetail(slug: string) {
  const [data, setData] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL || ''}/products/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setData(null)
      })
      .finally(() => setLoading(false))
  }, [slug])

  return { data, loading, error }
}
