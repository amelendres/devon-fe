
export interface Sharable{
    title: string
    text: string
    url: string
}

export interface Sharer{
    share(item: Sharable):void
}

export class Share {
    share(item: Sharable){
        if (navigator.share) {
          navigator.share({
            title: item.title,
            text: item.text,
            url: item.url,
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      }
}
