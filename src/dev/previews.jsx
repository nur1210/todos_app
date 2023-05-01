import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TodosList from "../components/TodosList.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TodosList">
                <TodosList/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews