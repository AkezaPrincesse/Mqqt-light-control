const mqtt = require("mqtt");
const express = require("express");

const app = express();
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
    console.log("Connected to MQTT broker");
});

app.get("/toggle/:state", (req, res) => {
    const state = req.params.state.toUpperCase();
    if (state === "ON" || state === "OFF") {
        client.publish("home/light", state);
        res.send(`Light turned ${state}`);
    } else {
        res.status(400).send("Invalid state");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
