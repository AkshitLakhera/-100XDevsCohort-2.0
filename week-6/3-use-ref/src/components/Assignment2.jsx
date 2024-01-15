import  { useRef, useState ,useEffect} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const renderCount = useRef(0);
    const [, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        renderCount.current=renderCount.current +1;
        forceRender(Math.random());
    };
    useEffect(() => {
        // Update the number of renders in the effect
        forceRender(Math.random());
        console.log(`Component has rendered ${renderCount.current} times.`);
    }, [renderCount.current]);
    return (
        <div >
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}