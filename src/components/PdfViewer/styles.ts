import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    &:hover .page-controls{
        opacity: 1;
    }
    &:hover .page-zoom{
        opacity: 1;
    }
    .page-controls{
        position: absolute;
        bottom: 5%;
        left: 50%;
        background: white;
        opacity: 0;
        transform: translateX(-50%);
        transition: opacity ease-in-out 0.2s;
        box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
        border-radius: 4px;
        

        button{
            width: 44px;
            height: 44px;
            background: white;
            border: 0;
            font: inherit;
            font-size: 0.8em;
            outline: none;
            border-radius: 4px;

            &:hover{
                background: #e6e6e6;
                cursor: pointer;
            }
        }

        button:disabled{
          background: lightgray;
        }

        button:first-child{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        button:last-child{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        span {
          padding: 0px 10px;
        }
    }

    .page-zoom{
        position: absolute;
        bottom: 5%;
        right: 1%;
        background: white;
        opacity: 0;
        transform: translateX(-50%);
        transition: opacity ease-in-out 0.2s;
        box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
        border-radius: 4px;

        button{
            width: 44px;
            height: 44px;
            background: white;
            border: 0;
            font: inherit;
            font-size: 0.8em;
            outline: none;
            border-radius: 4px;

            &:hover{
                background: #e6e6e6;
                cursor: pointer;
            }
        }

        button:disabled{

            background: lightgray;
        }

        button:first-child{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        button:last-child{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
`;

export const ContainerPDF = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    /* background-color: gray; */
    display: flex;
    font-size: 19px;
    background-color: white;
    

    .react-pdf__Document{
        margin: auto;
        border-radius: 8px;
        position: relative;
        box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
        background-color: white;
    }
    
    .react-pdf__Page__svg{
        border-radius: 8px;

        svg{
            border-radius: 8px;
            display: block;
            background-color: white;
        }
    }   
    
`;
