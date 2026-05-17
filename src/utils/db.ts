import { openDB } from 'idb'

export const dbPromise = openDB('registration-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('form')) {
      db.createObjectStore('form')
    }
  },
})

export async function saveFormData(key: string, value: any) {
  const db = await dbPromise
  await db.put('form', value, key)
}

export async function getFormData(key: string) {
  const db = await dbPromise
  return db.get('form', key)
}
