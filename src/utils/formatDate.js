function formatDate(dateStr) {
    let dt = new Date(parseInt(dateStr))
    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1 + '').padStart(2, '0')
    var d = (dt.getDate() + '').padStart(2, '0')
    var hh = (dt.getHours() + '').padStart(2, '0')
    var mm = (dt.getMinutes() + '').padStart(2, '0')
    var ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    return dateStr
}
export { formatDate }