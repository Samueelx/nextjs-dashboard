/**
 * This is where we keep the fonts that will be used throughout the application.
 */
import {Inter} from 'next/font/google'
import {Lusitana} from 'next/font/google'

export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
})