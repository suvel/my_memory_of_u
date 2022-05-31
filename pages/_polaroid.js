import React from 'react'
import styles from '../styles/polaroid.module.css'

const getRandomPlacement = () => {

    const possiblePlacements = ["-3deg", "2deg", "-7deg", "-13deg", "-8deg", "5deg", "-25deg", "13deg", "-10deg"];
    const possibleZIndex = ["1", "2"];
    const getRanPlc = () => {
        return possiblePlacements[Math.floor(Math.random() * possiblePlacements.length)];
    }
    const getRanZIndex = () => {
        return possibleZIndex[Math.floor(Math.random() * possibleZIndex.length)];
    }
    return { "transform": `rotate(${getRanPlc()})`, "z-index": getRanZIndex() }
}

function Polaroid({ image, title, description, location, geoMark }) {
    return (
        <div style={getRandomPlacement()} className={styles.polaroid}>
            <img className={styles.polaroid_img} src={image} />
            <div className={styles.polaroid_caption}>{title}</div>
        </div>
    )
}

export default Polaroid