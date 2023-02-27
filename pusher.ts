import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1559760",
    key: "004c656148b68d818c05",
    secret: "baba652f0d314c053b3c",
    cluster: "ap2",
    useTLS: true
})

export const clientPusher = new ClientPusher('004c656148b68d818c05', {
    cluster: 'ap2',
    forceTLS: true
});