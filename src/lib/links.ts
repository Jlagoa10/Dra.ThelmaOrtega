import { site } from '@/data/site'

const { street, district, city, state, postalCode } = site.address

export const fullAddress = `${street} - ${district}, ${city} - ${state}, ${postalCode}`

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`
}

export const telUrl = `tel:${site.phone.e164}`
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`
