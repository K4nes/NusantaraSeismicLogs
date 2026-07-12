

export async function gempaTerbaru(){
    try {
        const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");

        if (!res.ok) {
            throw new Error(`Gagal fetch: ${res.status}`);
        }

        const data = await res.json();
        return data?.Infogempa?.gempa || null;;
    } catch (error) {
        return error;
    }
}

export async function gempaTerkini(){
    try {
        const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");

        if (!res.ok) {
            throw new Error(`Gagal fetch: ${res.status}`);
        }

        const data = await res.json();
        return data?.Infogempa?.gempa || null;;
    } catch (error) {
        return error;
    }
}

export async function gempaDirasakan(){
    try {
        const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");

        if (!res.ok) {
            throw new Error(`Gagal fetch: ${res.status}`);
        }

        const data = await res.json();
        return data?.Infogempa?.gempa || null;;
    } catch (error) {
        return error;
    }
}