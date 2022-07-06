import { useMemo } from "react";
import { useLocation, useSearchParams} from "react-router-dom"

function useSearch (){
    const {search} =useLocation()
    return new URLSearchParams(search,[search])
}
export default useSearch
