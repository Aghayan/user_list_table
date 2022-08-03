

export  function flatobject(obj){
    let result = {}
    let ans = ''
    for(const i in obj){
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i]) && obj[i] !== null){
            const temp = flatobject(obj[i])
            for(const j in temp){
                result[i + '_p2_' + j] = temp[j]
            }
        }else{
            result[i] = obj[i]
        }
    }
    for(const key in result){
        if(key.includes('_p2_')){
            ans = ans +  result[key]
        }else{
            ans = ans + ' ' + result[key]
        }
    }
    return ans
}