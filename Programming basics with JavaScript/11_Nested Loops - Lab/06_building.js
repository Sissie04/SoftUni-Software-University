function building(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let currentFloor = floors; currentFloor >= 1; currentFloor--) {
        let floorRooms = '';

        for (let currentRoom = 0; currentRoom < roomsPerFloor; currentRoom++) {

            if (currentFloor === floors) {
                floorRooms += `L${currentFloor}${currentRoom} `;

            } else if (currentFloor % 2 === 0) {
                floorRooms += `O${currentFloor}${currentRoom} `;
            } else {
                floorRooms += `A${currentFloor}${currentRoom} `;
            }
        }

        console.log(floorRooms);
    }

}
building(["6", "4"]);