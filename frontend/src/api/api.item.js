const createItem = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
};

const displayItem = async (url, userprofile, username="") => {
    if (!userprofile) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userprofile: userprofile}),
        })
        return response.json()
    } else {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userprofile: userprofile,
                username: username
            }),
        })
        return response.json()
    }
}

const deleteItem = async (url, id) => {
    const response = await fetch(url, {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id}),
    })
    return response.json()
}

export { createItem, displayItem, deleteItem };