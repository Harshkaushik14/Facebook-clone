import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0"
            profileSrc="https://timesofindia.indiatimes.com/thumb/msid-72168734,width-800,height-600,resizemode-4/72168734.jpg?imglength=277599"
            title="Akshay Kumar"
            />
            <Story 
            image="https://images.indianexpress.com/2021/02/India-vs-England-5.jpg"
            profileSrc="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
            title="Virat Kohli"
            />
            <Story 
            image="https://pbs.twimg.com/profile_images/1022539461689831426/NUJM1LNM.jpg"
            profileSrc="https://static.toiimg.com/thumb/msid-71066614,width-800,height-600,resizemode-75,imgsize-211329,pt-32,y_pad-40/71066614.jpg"
            title="Raj Kumar Rao"
            />
            <Story 
            image="https://static.hollywoodreporter.com/sites/default/files/2019/08/gates_unit_00200_c-h_2019-928x523.jpg"
            profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
            title="Bill Gates"
            />
            
        </div>
    )
}

export default StoryReel;
