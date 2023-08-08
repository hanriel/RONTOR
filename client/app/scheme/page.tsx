'use client'

import React, { createRef, useEffect } from 'react';
import data from '@/data/data.json';
import { Stage, Layer, Star, Text } from 'react-konva';
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import('@/components/canvas'), {
    ssr: false,
});

export default function Home() {
    return (<Canvas />);
}
