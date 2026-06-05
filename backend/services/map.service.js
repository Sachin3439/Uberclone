module.exports.getAddressCoordinates = async (address) => {

    if (!address) {
        throw new Error("Address is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const encodedAddress =
        encodeURIComponent(address);

    const url =
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        // FIXED CONDITION
        if (data.status === "OK") {

            const location =
                data.results[0].geometry.location;

            return {
                lat: location.lat,
                lng: location.lng
            };

        } else {

            throw new Error(
                "Unable to fetch coordinates"
            );
        }

    } catch (error) {

        console.error(
            "Error fetching coordinates:",
            error
        );

        throw error;
    }
};





module.exports.getDistanceTime = async (
    origin,
    destination
) => {

    if (!origin || !destination) {
        throw new Error(
            "Origin and destination are required"
        );
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    // MISSING VARIABLES FIXED
    const encodedOrigin =
        encodeURIComponent(origin);

    const encodedDestination =
        encodeURIComponent(destination);

    const url =
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodedOrigin}&destinations=${encodedDestination}&key=${apiKey}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Failed to fetch distance and time"
            );
        }

        const data = await response.json();

        if (data.status !== "OK") {
            throw new Error(
                "Google API Error: " + data.status
            );
        }

        if (
            data.rows.length === 0 ||
            data.rows[0].elements.length === 0
        ) {
            throw new Error(
                "No distance data available"
            );
        }

        const element =
            data.rows[0].elements[0];

        return {
            distance: element.distance,
            duration: element.duration
        };

    } catch (error) {

        console.error(
            "Error fetching distance and time:",
            error
        );

        throw error;
    }
};






module.exports.getSuggestions = async (query) => {

    if (!query) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const encodedQuery =
        encodeURIComponent(query);

    const url =
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedQuery}&key=${apiKey}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        // IMPORTANT
        if (data.status !== "OK") {

            console.log(data);

            throw new Error(
                "Google API Error: " + data.status
            );
        }

        return data.predictions;

    } catch (error) {

        console.error(
            "Error fetching suggestions:",
            error
        );

        throw error;
    }
};