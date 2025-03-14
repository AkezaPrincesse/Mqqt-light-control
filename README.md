# MQTT Light Control

This is a simple web-based MQTT light control system where users can toggle a light ON or OFF using a webpage. It uses MQTT.js to communicate with an MQTT broker over WebSockets. The simulation of an IoT device (like the ESP8266) listens to the MQTT messages and prints whether the light is ON or OFF.

## Features
- **Web interface** with two buttons: "Turn ON" and "Turn OFF"
- Displays the **last sent command** (ON/OFF) in the status message.
- Uses **MQTT.js** to send "ON" or "OFF" messages to an MQTT topic (`/student_group/light_control`).
- Built with HTML, CSS, JavaScript, and MQTT.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **MQTT**: MQTT.js (for client-side communication with MQTT broker)
- **Broker**: `broker.hivemq.com` (free MQTT broker)

## How to Use
1. Open the `index.html` file in your browser.
2. Click the **"Turn ON"** button to send an `ON` message via MQTT.
3. Click the **"Turn OFF"** button to send an `OFF` message via MQTT.
4. The status message will update to show the last sent command ("Light ON" or "Light OFF").

## Running Locally
If you'd like to run this locally:
1. Clone the repository:
    ```sh
    git clone https://github.com/YOUR_USERNAME/mqtt-light-control.git
    ```
2. Open the `index.html` file in any modern browser.
3. Ensure you have access to the internet to connect to the MQTT broker.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

