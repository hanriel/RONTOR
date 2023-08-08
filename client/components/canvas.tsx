import { Stage, Layer, Circle, Text, Image } from 'react-konva';
import useImage from 'use-image';
import React, {useState} from "react";

function Canvas() {
    const [scale, setScale] = useState({x:1, y:1});
    const [position, setPosition] = useState({x:1, y:1});
    const [image] = useImage('first_floor.svg');
    const [image_pc_err] = useImage('pc_err.svg');

    let scaleBy = 1.1;

    const onWh = (e : any) => {
        e.evt.preventDefault();

        let oldScale = scale.x;
        let pointer = {x: 0, y: 0};

        //var mousePointTo = {
        //    x: (pointer.x - e.evt.x()) / oldScale,
        //    y: (pointer.y - e.evt.y()) / oldScale,
       // };

        let direction = e.evt.deltaY > 0 ? 1 : -1;
        if (e.evt.ctrlKey) { direction = -direction; }
        let newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        setScale({ x: newScale, y: newScale });

        //let newPos = {
        //    x: pointer.x - mousePointTo.x * newScale,
        //    y: pointer.y - mousePointTo.y * newScale,
        //};
        //setPosition(newPos);

    }

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            draggable
            onWheel={onWh}
            scale={scale}
            x={position.x}
            y={position.y}>
            <Layer>
                <Text text="Try to drag a star" />
                <Image image={image}/>
                <Image image={image_pc_err} x={10} y={10}/>
            </Layer>
        </Stage>
    );
}

export default Canvas;
