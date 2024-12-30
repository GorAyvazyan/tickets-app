export async function getCurrency({ to }: { to: string }) {
    const apiKey = "TteC1s0MFEdeQaC2X2OseJmkHPgTGW7d";
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
        },
    };

    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=RUB&amount=1`;

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch currency data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
