---
title:  "Slot Cars"
description: "A system for controlling slot cars using the accelerometer in a mobile device"
start: 2018-01-01
tags: ["Go", "Angular", "RaspberryPi", "Electronics"]
code: [
	{
		type: "Frontend",
		link: "https://github.com/AndyPWarren/slot-car-fe"
	}, {
		type: "Backend",
		link: "https://github.com/AndyPWarren/slot-car-server"
	}
]
weight: 1
---
## Inception
***
I wanted to explore the realms of physical/digital worlds and recognize how much more potential is unlocked by bridging these worlds. Technologies like RaspberryPi and Ardurino have made this type of project relatively accessible, offering extensive interactivity between software and electronics. I had an Artin (Scalextric) slot car set from my childhood in my loft so I thought I would devise a system for controlling the cars via the accelerometer in a mobile device.        

## Tech
***
I opted to use a RaspberryPi which would run a socket server to interface with a custom-built electronic circuit controlling the cars. The main benefits of using the Pi were two-fold. As the Pi is based on Linux OS, code can be written in high level languages without having to learn a language specific to the device like the Ardurino event loop. It also has more networking capabilities out of the box, the RaspberryPi 3 Model B having built in Wi-FI. 

Despite Python being the most popular language for RaspberryPi I chose to write the server code using GoLang, partly as a learning exercise but also because of its cross-compilation capabilities. A binary can be compiled for the ARM chipset on a development machine and then run directly on the Pi, negating the need for any interpreters to be installed.

## Process
***
As this was my first experience coding for electronics I started off with a simple exercise, turning on some LED's via the Pi. After achieving this I moved onto varying the brightness of the LED's. This is achieved by toggling the pin on and off at a certain frequency above human perception, known as PWM (Pulse Width Modulation). Initially I wrote software in Go to achieve this but found this wasn't particularly performant due to the OS interrupting the CPU. After some research I found a hardware PWM interface, <a href="https://github.com/sarfata/pi-blaster" target="_blank">pi-blaster</a> which exposes a FIFO (First In First Out) file which applications can write to, e.g. `echo "17=1" > /dev/pi-blaster` which turns pin 17 to full brightness. I also found a library which wrapped this interface in Go <a href="https://github.com/ddrager/go-pi-blaster" target="_blank">go-pi-blaster</a>.

<!-- insert gif of leds changing brightness -->
{{% image-width width="30%" %}}![LED's brightness](/img/projects/slot-car/leds-brightness.gif "LED's brightness"){{% /image-width %}}

The next step was to write the server code so the LED brightness could be controlled over the network. The socket server written on top of the <a href="https://github.com/gorilla/websocket" target="_blank">Gorilla websocket package</a>. The code enables messages streamed in the format `<pin name>=<value>` to control the brightness of an LED e.g. streaming the message `1=0.5` will set pin 1 to half brightness. Pin names are configured by passing arguments to the binary when starting the application e.g. 1=17, 2=27. Pins will be released when a client sends the CloseNormalClosure (1000 code), so the next device to connect will control the first available pin.

Now I needed a user interface to send accelerometer data to the socket server. I wrote the frontend application as a Webapp primarily because they are device agnostic and dont require any app installation. I used the framework Angular which is arguably overkill for this use case but I like its observable focus, fast build times and test-driven approach using the CLI. To extract accelerometer data I used the Device Orientation Web API. Initially I allowed the user to select which axis to use as the control axis to give me insight into which was more natural for car control. Later I fixed this to to the Y (beta) axis which mimicked the action of an accelerator pedal by tilting the device forward. The socket client is written using the WebSocket API and will disconnect from the server when the page is unloaded or when the window loses focus (blur event) and connect on page load or a focus event. 

So now I had a mobile phone controlling the brightness of the LED's. It was time to make it control the slot cars. I prototyped a circuit which varied the track voltage using transistors feed by the Pi's GPIO PWM output. One of the issues I encountered was that the cars would speed up and down at particular intervals, which was caused by the power supply not producing an AC free voltage. A fairly large capacitor was required to smooth out the AC component. I also had an issue with transistors overheating over an extended time period. This was solved by replacing the transistor with higher current rating components and providing a heat sink so they could dissipate heat more effectively. 

This is a diagram of the final circuit, note the diode protecting the transistors from back EMF's (Electromagnetic fields) produced by the motor.

{{% image-width width="80%" %}}![slot car circuit diagram](/img/projects/slot-car/circuit-diagram.svg "Slot car circuit diagram"){{% /image-width %}}

This is the final circuit. The power supply is connected on the left-hand side with positive towards the front and negative at the back. The track is connected via the black box with positive the brown wire and negative the yellow wires. The RaspberryPi GPIO pins connect on the right-hand side.

![slot car final circuit](/img/projects/slot-car/final-circuit.jpg "Slot car final circuit")

## End Result
***
I found controlling the cars using the accelerometer in an accelerator-pedal motion to be a natural and effective experience. By bringing this rather one-dimensional game into the digital domain it has expanded its potential with the possibility of future features like lap timing and counting, race control and power-ups.

<!-- Video demo -->
