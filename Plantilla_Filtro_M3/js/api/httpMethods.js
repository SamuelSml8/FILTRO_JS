export async function post(url, info) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMethod(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function put(url, info) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
