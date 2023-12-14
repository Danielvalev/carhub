export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'a0fddf003bmshd8ef39222b0e793p160852jsnddf95d296285',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}