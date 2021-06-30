
const expirationKey =  'expiresAfter'
const updatedAtKey =  'updatedAt'
const expiresAfter = 25200000

export const localStorageCache = {
  get: (key:string) => {
    try {
      const serializedData = localStorage.getItem(key)
      if (serializedData === null){
        return undefined 
      }
      const data = JSON.parse(serializedData)

      return data

    } catch (error) {
      return undefined
    }
  },
  set: (key:string, data:any) => {
    console.log("\nlocalStorageCache set key: %s, data: %j", key, data)

    if(data===undefined){
      localStorageCache.removeItem(key)
      return
    }
    
    try {
      let serializedData = JSON.stringify(data)
      localStorage.setItem(key, serializedData)
      localStorage.setItem(updatedAtKey, `${Date.now()}`)

      //todo: move to creation
      localStorage.setItem(expirationKey, `${expiresAfter}`)

    } catch (error) {
      console.log("ERROR save data to localstorage")
      console.log(error)
    }
  },
  removeItem: (key:string) => {
    localStorage.removeItem(key)
    // localStorage.removeItem(expirationKey)
    // localStorage.removeItem(updatedAtKey)
    localStorage.setItem(updatedAtKey, `${Date.now()}`)
  },
  isCacheExpired: () => {
    try {
        const lastUpdated = localStorage.getItem(updatedAtKey)
        const expiresAfter = localStorage.getItem(expirationKey)

        if (expiresAfter === null || expiresAfter === undefined 
          || lastUpdated === null || lastUpdated === undefined
          ){
            return true 
        }

        if( Date.now() >= parseInt(lastUpdated) + parseInt(expiresAfter) ){
          return true
        }      
    } catch (error) {
        console.log("ERROR trying to read expiresAfter")
        console.log(error)
    } 
    return false
  }
}
