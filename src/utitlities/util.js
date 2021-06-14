
export const trimStrings = (length, words) => {

    return words.length > length ? words.substring(0, length) + '...' : words

}

export const formatDate = (itemDate) => {

    const newDate = new Date(itemDate)

    const formattedDate = newDate.getFullYear()+'/'+(newDate.getMonth()+1)+'/'+newDate.getDate(); 

    return formattedDate

}