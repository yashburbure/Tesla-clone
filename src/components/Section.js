import React from 'react';
import styled from 'styled-components';
function Section({ title, backgroundimg, description, leftbtntext, rightbtntext }) {
    return (
        <Wrap backgimg={backgroundimg}>
            <Itemtext>
                <h1>{title}</h1>
                <p>{description}</p>
            </Itemtext>
            <Buttons>
                <Buttongroup>
                    <LeftButton>
                        {leftbtntext}
                    </LeftButton>
                    {rightbtntext &&
                        <RightButton>
                            {rightbtntext}
                        </RightButton>
                    }
                </Buttongroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
}

export default Section;
const Wrap = styled.div`
    height:100vh; 
    width:100vw;
    background-size:cover;
    background-position:center;
    background-repeat:cover;
    background-image:url('/images/model-s.jpg');    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props => `url("/images/${props.backgimg}")`};
    }
`;
const Itemtext = styled.div`
    padding-top:15vh;
    text-align:center;
`;
const Buttons = styled.div`

`;
const Buttongroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`;
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`;
const RightButton = styled(LeftButton)`
    background:white;
    color:black;
    opacity:0.62;
`;
const DownArrow = styled.img`

    height:40px;
    animation:animateDown infinite 1.5s;
    // overflow-x:hidden;
`;