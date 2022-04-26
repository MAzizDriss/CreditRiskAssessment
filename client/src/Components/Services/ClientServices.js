const KEYS = {
    client: 'client',
    clientId: 'clientId'
}

export function insertClient(data) {
    let clients = getAllClients();
    data['id'] = generateClientId()
    clients.push(data)
    localStorage.setItem(KEYS.clients, JSON.stringify(clients))
}

export function updateClient(data) {
    let clients = getAllClients();
    let recordIndex = clients.findIndex(x => x.id == data.id);
    clients[recordIndex] = { ...data }
    localStorage.setItem(KEYS.clients, JSON.stringify(clients));
}


export function deleteClient(id) {
    let clients = getAllClients();
    clients = clients.filter(x => x.id != id)
    localStorage.setItem(KEYS.clients, JSON.stringify(clients));
}

export function generateClientId() {
    if (localStorage.getItem(KEYS.clientId) == null)
        localStorage.setItem(KEYS.clientId, '0')
    var id = parseInt(localStorage.getItem(KEYS.clientId))
    localStorage.setItem(KEYS.clientId, (++id).toString())
    return id;
}

export function getAllClients() {
    if (localStorage.getItem(KEYS.clients) == null)
        localStorage.setItem(KEYS.clients, JSON.stringify([]))
    let clients = JSON.parse(localStorage.getItem(KEYS.clients));
    //map departmentID to department title
   // let departments = getDepartmentCollection();
    return clients.map(x => ({
        ...x,
       // department: departments[x.departmentId - 1].title
    }))
}