!(function () {
    const conn = new signalR.HubConnection('/chathub');
    let connectionId;

    conn.on('Login', (timestamp, connectionId) => {
        const message = `${timestamp} ${connectionId} is Login`
        appendMessage(message);
    });

    conn.on('ReceiveMessage', (timestamp, from, to, message) => {
        const msg = `${timestamp}  FROM:${from}  TO:${to}  ${message}`
        appendMessage(msg);
    });

    conn.start().then(err => {
        connectionId = conn.connection.connectionId
        document.getElementById('from').innerText = connectionId;
        conn.invoke("Login", connectionId).catch(err => showErr(err));
    }).catch(err => showErr(err));

    document.getElementById('send').addEventListener('click', event => {
        const msg = document.getElementById('message').value;
        const from = connectionId || conn.connection.connectionId;
        const to = document.getElementById('to').value;

        conn.invoke('SendMessage', from, to, msg).catch(err => showErr(err));
        event.preventDefault();
    });

    function appendMessage(message) {
        const listItem = document.createElement('li');
        listItem.innerText = message;
        document.getElementById('messages').appendChild(listItem);
    }

    function showErr(msg) {
        const listItem = document.createElement('li');
        listItem.setAttribute('style', 'color: red');
        listItem.innerText = msg.toString();
        document.getElementById('messages').appendChild(listItem);
    }
})();


function dustbin() {




}