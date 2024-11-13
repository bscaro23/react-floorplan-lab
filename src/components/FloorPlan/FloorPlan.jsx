import Bedroom from "../Bedroom/Bedroom";
import Kitchen from "../Kitchen/Kitchen";
import LivingRoom from "../LivingRoom/LivingRoom";
import Bathroom from "../Bathroom/Bathroom";

function FloorPlan () {
    return (
        <div id="floor-plan">
            <div id="left-side">
                <Bedroom bedNum={1}/>
                <Bathroom size={'Half'}/>
                <Bedroom bedNum={2}/>
            </div>
            <div id="right-side">
                <LivingRoom/>
                <Kitchen/>
                <Bathroom size={'Full'}/>
                <Bedroom bedNum={3}/>
                
            </div>
        </div>
    );
}

export default FloorPlan;