import Oven from "../Oven/Oven";
import Sink from "../Sink/Sink";


function Kitchen () {
    return (
        <div id="kitchen">
            
            <div id="cooker-cleaner">
                <Oven/>
                <Sink/>
            </div>
            <h2>Kitchen</h2>
        </div>
    );
}

export default Kitchen;