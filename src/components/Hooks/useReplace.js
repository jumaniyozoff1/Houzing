export function useReplace (value,name){
    let url = new URL(window.location.href)
    url.useSearchParams.set(name,value)
    if(!value){
        url.useSearchParams.delete(name)
    }
    return url.search 
}
export default useReplace