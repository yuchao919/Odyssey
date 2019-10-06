using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.SignalR;

namespace SignalRCoreChat.Hubs
{
    public class ChatHub : Hub
    {
        //public override Task OnConnectedAsync()
        //{
        //    return base.OnConnectedAsync();
        //}

        public Task Login(string connectionId)
        {
            string timestamp = DateTime.Now.ToShortTimeString();
            return Clients.All.SendAsync("Login", timestamp, connectionId);
        }

        public Task SendMessage(string from, string to, string message)
        {
            string timestamp = DateTime.Now.ToShortTimeString();
            IClientProxy icp;
            var toClient = Clients.Client(to);
            if (toClient != null)
            {
                return toClient.SendAsync("ReceiveMessage", timestamp, from, to, message);
            }
            return Clients.All.SendAsync("ReceiveMessage", timestamp, from, to, message);
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}