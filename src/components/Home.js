import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return(
        <Container>
            <Section 
                title="Model S"
                backgroundimg="model-s.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing Inventory"
                description="Order Online for Touchless delivery"
            />
            <Section
                title="Model Y"
                backgroundimg="model-y.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing Inventory"
                description="Order Online for Touchless delivery"
            />
            <Section
                title="Model 3"
                backgroundimg="model-3.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing Inventory"
                description="Order Online for Tuchless delivery"
            />
            <Section
                title="Model X"
                backgroundimg="model-x.jpg"
                leftbtntext="Custom Order"
                rightbtntext="Existing Inventory"
                description="Order Online for Touchless delivery"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                backgroundimg="solar-panel.jpg"
                leftbtntext="Order now"
                rightbtntext="money-back guarentee"
                description="Money-Back guarentee"
            />
            <Section
                title="Solar for New Roofs"
                backgroundimg="solar-roof.jpg"
                leftbtntext="Order now"
                rightbtntext="learn more"
                description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
            />
            <Section
                title="Accessories"
                backgroundimg="accessories.jpg"
                leftbtntext="shop now"
                description=""
            />
        </Container>
    );
}
export default Home; 
const Container=styled.div`
    height:100vh;
    width:100vw;
`;