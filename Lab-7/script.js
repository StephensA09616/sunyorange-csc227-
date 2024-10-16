/*
Onjects:train, gate arm, motor, train detection sensor
Relationships: The train activates train detector sensor. Train detection sensor will activate the motor. The motor will move the gate arm up and down.
Evolution: The train will set off the train detection sensor, the train detection sensorwill send a signal to the motor, the motor will move the gate arm. After the sensor has been deactivate for 20 seconds
the motor will put the gate up..
*/
function turnOn(c) {
    c.state = "on";
}
function turnOff(c) {
    c.state = "off";
}
function advanceTrain(m) {
    m.distance += m.speed;
}
function updateSensor(s, m) {
    if (s.target === m.distance) {
        s.state = "hit";
    } else {
        s.state = "no hit";
    }
}
function main() {
    const train = {
        "speed": 1.0,
        "direction": "straight",
        "distance": -5.0
    };
    const sensor = {
        "target": 2.0,
        "state": "no hit"
    };
    const gate = {
        "state": "off",
        "train": train,
        "sensor": sensor
    };
    turnOn(gate);
    console.log(JSON.stringify(gate, null, 2));
    while (gate.sensor.state !== "hit") {
        advanceTrain(gate.train);
        updateSensor(gate.sensor, gate.train);
        console.log(JSON.stringify(gate, null, 2));
    }
    turnOff(gate);
    console.log(JSON.stringify(gate, null, 2));
}
main();