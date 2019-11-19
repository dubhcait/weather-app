
const filterApiResponse = (response) => {

    const humidity = [];
    let dayTemp = [];
    let nightTemp = [];
    let morningTemp = [];

    // time and relevent data
    response.map((dataPoint) => {
        const time = new Date(dataPoint['dt'] * 1000);
        
        humidity.push(dataPoint['main'].humidity)
        const tempData = [dataPoint['main'].temp, dataPoint['main'].temp_min, dataPoint['main'].temp_max]
        const timeRange = time.getHours()

        if (timeRange >= 6 && timeRange < 12) {
            morningTemp = [...morningTemp, ...tempData]
        }
        if (timeRange >= 6 && timeRange < 18) {
            dayTemp = [...dayTemp, ...tempData]
        } else {
            nightTemp = [...nightTemp, ...tempData]
        }
    })

    return { humidity, dayTemp, nightTemp, morningTemp }
}


export default filterApiResponse;